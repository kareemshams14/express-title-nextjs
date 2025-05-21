"use client";

import React, { useState, useEffect } from 'react';

interface GHLFormIntegrationProps {
  vehicleInfo?: {
    year: string;
    make: string;
    model: string;
    trim?: string;
    mileage?: number;
    value: number;
    loanAmount: number;
    imageUrl?: string | null;
  } | null;
}

const GHLFormIntegration: React.FC<GHLFormIntegrationProps> = ({ vehicleInfo }) => {
  const [formLoaded, setFormLoaded] = useState(false);
  const [formHeight, setFormHeight] = useState(600);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // GHL form embed code - this would be replaced with the actual GHL form embed code
  const ghlFormEmbedCode = `
    <iframe 
      id="ghl-form-iframe"
      src="https://app.gohighlevel.com/v1/forms/YOUR_FORM_ID_HERE/" 
      style="width: 100%; height: 100%; border: none;"
    ></iframe>
  `;

  // Function to pass vehicle data to GHL form via hidden fields
  const updateHiddenFields = () => {
    if (!vehicleInfo) return;

    // Update all hidden field values
    const fields = [
      { id: 'vin_number', name: 'contact.vin_numner', value: '' }, // Keeping the typo as requested
      { id: 'vehicle_year', name: 'contact.vehicle_year', value: vehicleInfo.year || '' },
      { id: 'vehicle_make', name: 'contact.vehicle_make', value: vehicleInfo.make || '' },
      { id: 'vehicle_model', name: 'contact.vehicle_model', value: vehicleInfo.model || '' },
      { id: 'vehicle_trim', name: 'contact.vehicle_trim', value: vehicleInfo.trim || '' },
      { id: 'vehicle_mileage', name: 'contact.vehicle_mileage', value: vehicleInfo.mileage ? vehicleInfo.mileage.toString() : '' },
      { id: 'vehicle_value', name: 'contact.vehicle_value', value: vehicleInfo.value ? Math.round(vehicleInfo.value).toString() : '' },
      { id: 'loan_amount', name: 'contact.loan_amount', value: vehicleInfo.loanAmount ? Math.round(vehicleInfo.loanAmount).toString() : '' },
      { id: 'vehicle_image_url', name: 'contact.vehicle_image_url', value: vehicleInfo.imageUrl || '' }
    ];

    fields.forEach(field => {
      const element = document.getElementById(field.id) as HTMLInputElement;
      if (element) {
        element.value = field.value;
      }
    });
  };

  // Function to pass vehicle data to GHL form via postMessage
  const passDataToGHLForm = () => {
    if (!vehicleInfo || !formLoaded) return;

    // Get the iframe element
    const iframe = document.getElementById('ghl-form-iframe') as HTMLIFrameElement;
    if (!iframe || !iframe.contentWindow) return;

    // Prepare the data to be passed to GHL form
    const dataToPass = {
      'contact.vin_numner': '', // Keeping the typo as requested by the user
      'contact.vehicle_year': vehicleInfo.year || '',
      'contact.vehicle_make': vehicleInfo.make || '',
      'contact.vehicle_model': vehicleInfo.model || '',
      'contact.vehicle_trim': vehicleInfo.trim || '',
      'contact.vehicle_mileage': vehicleInfo.mileage ? vehicleInfo.mileage.toString() : '',
      'contact.vehicle_value': vehicleInfo.value ? Math.round(vehicleInfo.value).toString() : '',
      'contact.loan_amount': vehicleInfo.loanAmount ? Math.round(vehicleInfo.loanAmount).toString() : '',
      'contact.vehicle_image_url': vehicleInfo.imageUrl || ''
    };

    // Post message to the iframe with the data
    iframe.contentWindow.postMessage({
      type: 'ghl_form_data',
      data: dataToPass
    }, '*');
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    setFormLoaded(true);
    
    // Adjust iframe height based on content
    const adjustIframeHeight = () => {
      const iframe = document.getElementById('ghl-form-iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow && iframe.contentDocument) {
        const height = iframe.contentDocument.body.scrollHeight;
        if (height > 0) {
          setFormHeight(height);
        }
      }
    };

    // Try to adjust height after a short delay to ensure content is loaded
    setTimeout(adjustIframeHeight, 500);
    
    // Pass data to GHL form after it's loaded
    passDataToGHLForm();
    updateHiddenFields();
  };

  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle any messages from the GHL form iframe
      if (event.data && event.data.type === 'ghl_form_height') {
        setFormHeight(event.data.height);
      }
      
      // Handle form submission success
      if (event.data && event.data.type === 'ghl_form_submitted') {
        setFormSubmitted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Pass data to GHL form whenever vehicleInfo changes
  useEffect(() => {
    passDataToGHLForm();
    updateHiddenFields();
  }, [vehicleInfo]);

  // Add script to handle form submission
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      // Listen for form submission in the iframe
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'ghl_form_submit') {
          // Update hidden fields before submission
          const vehicleYearField = document.getElementById('vehicle_year');
          const vehicleMakeField = document.getElementById('vehicle_make');
          const vehicleModelField = document.getElementById('vehicle_model');
          const vehicleValueField = document.getElementById('vehicle_value');
          const loanAmountField = document.getElementById('loan_amount');
          
          // Find the form in the iframe and update its fields
          const iframe = document.getElementById('ghl-form-iframe');
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({
              type: 'ghl_update_fields',
              data: {
                'contact.vehicle_year': vehicleYearField ? vehicleYearField.value : '',
                'contact.vehicle_make': vehicleMakeField ? vehicleMakeField.value : '',
                'contact.vehicle_model': vehicleModelField ? vehicleModelField.value : '',
                'contact.vehicle_value': vehicleValueField ? vehicleValueField.value : '',
                'contact.loan_amount': loanAmountField ? loanAmountField.value : ''
              }
            }, '*');
          }
        }
      });
    `;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ghl-form-container bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Complete Your Application</h2>
      
      {/* Hidden fields for GHL integration */}
      <div style={{ display: 'none' }}>
        <input type="hidden" id="vin_number" name="contact.vin_numner" value="" />
        <input type="hidden" id="vehicle_year" name="contact.vehicle_year" value={vehicleInfo?.year || ''} />
        <input type="hidden" id="vehicle_make" name="contact.vehicle_make" value={vehicleInfo?.make || ''} />
        <input type="hidden" id="vehicle_model" name="contact.vehicle_model" value={vehicleInfo?.model || ''} />
        <input type="hidden" id="vehicle_trim" name="contact.vehicle_trim" value={vehicleInfo?.trim || ''} />
        <input type="hidden" id="vehicle_mileage" name="contact.vehicle_mileage" value={vehicleInfo?.mileage ? vehicleInfo.mileage.toString() : ''} />
        <input type="hidden" id="vehicle_value" name="contact.vehicle_value" value={vehicleInfo?.value ? Math.round(vehicleInfo?.value).toString() : ''} />
        <input type="hidden" id="loan_amount" name="contact.loan_amount" value={vehicleInfo?.loanAmount ? Math.round(vehicleInfo?.loanAmount).toString() : ''} />
        <input type="hidden" id="vehicle_image_url" name="contact.vehicle_image_url" value={vehicleInfo?.imageUrl || ''} />
      </div>
      
      {/* Form submission success message */}
      {formSubmitted ? (
        <div className="text-center py-8 bg-green-50 rounded-lg">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-xl font-bold text-green-800">Application Submitted Successfully!</h3>
          <p className="mt-2 text-green-700">Thank you for your application. Our team will contact you shortly.</p>
        </div>
      ) : (
        <>
          {/* GHL Form Container */}
          <div 
            className="ghl-form-wrapper" 
            style={{ height: `${formHeight}px`, overflow: 'hidden' }}
            dangerouslySetInnerHTML={{ __html: ghlFormEmbedCode }}
          />
          
          {/* Form loading indicator */}
          {!formLoaded && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-900"></div>
              <p className="mt-2">Loading application form...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GHLFormIntegration;
