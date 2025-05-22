'use client';

import React, { useEffect, useState } from 'react'; // Added useState

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  trim: string; // Retained as it's part of the existing interface, though not directly used in GHL params
  mileage: number; // Retained, not directly used
  value: number;
  loanAmount: number;
  imageUrl: string | null; // Retained, not directly used
  vin?: string; // Added optional vin
}

const BASE_GHL_URL = "https://api.leadconnectorhq.com/widget/form/eVmyj74xSDEJe0nRu3Ao";

export default function GHLFormIntegration({ vehicleInfo }: { vehicleInfo: VehicleInfo | null }) {
  const [iframeSrc, setIframeSrc] = useState(BASE_GHL_URL);

  useEffect(() => {
    if (vehicleInfo) {
      const params = new URLSearchParams();
      params.append('contact.vin_numner', encodeURIComponent(vehicleInfo.vin || ''));
      params.append('contact.vehicle_year', encodeURIComponent(vehicleInfo.year));
      params.append('contact.vehicle_make', encodeURIComponent(vehicleInfo.make));
      params.append('contact.vehicle_model', encodeURIComponent(vehicleInfo.model));
      params.append('contact.vehicle_value', encodeURIComponent(String(Math.round(vehicleInfo.value))));
      params.append('contact.loan_amount', encodeURIComponent(String(Math.round(vehicleInfo.loanAmount))));
      
      setIframeSrc(`${BASE_GHL_URL}?${params.toString()}`);
    } else {
      setIframeSrc(BASE_GHL_URL); // Reset to base URL if vehicleInfo is null
    }
  }, [vehicleInfo]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []); // This effect for GHL script loading runs only once

  return (
    <div className="min-h-[1800px] w-full">
      <iframe
        src={iframeSrc} // Use state variable for src
        style={{
          width: '100%',
          height: '1800px',
          border: 'none',
          borderRadius: '4px',
        }}
        id="inline-eVmyj74xSDEJe0nRu3Ao"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        title="Application"
      />
    </div>
  );
}
