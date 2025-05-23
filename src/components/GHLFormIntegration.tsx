'use client';

import React, { useEffect, useState } from 'react';

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  value: number;
  loanAmount: number;
  imageUrl: string | null;
  vin: string;
}

const BASE_URL = "https://api.leadconnectorhq.com/widget/form/eVmyj74xSDEJe0nRu3Ao";

export default function GHLFormIntegration({ vehicleInfo }: { vehicleInfo: VehicleInfo | null }) {
  const [iframeSrc, setIframeSrc] = useState(BASE_URL);

  useEffect(() => {
    if (vehicleInfo) {
      const params = new URLSearchParams();
      if (vehicleInfo.vin) params.append('contact.vin_numner', vehicleInfo.vin);
      if (vehicleInfo.year) params.append('contact.vehicle_year', vehicleInfo.year);
      if (vehicleInfo.make) params.append('contact.vehicle_make', vehicleInfo.make);
      if (vehicleInfo.model) params.append('contact.vehicle_model', vehicleInfo.model);
      if (vehicleInfo.value) params.append('contact.vehicle_value', String(vehicleInfo.value));
      if (vehicleInfo.loanAmount) params.append('contact.loan_amount', String(vehicleInfo.loanAmount));
      
      const queryString = params.toString();
      if (queryString) {
        setIframeSrc(`${BASE_URL}?${queryString}`);
      } else {
        setIframeSrc(BASE_URL);
      }
    } else {
      setIframeSrc(BASE_URL);
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
  }, []);

  return (
    <div className="min-h-[1800px] w-full">
      <iframe
        src={iframeSrc}
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
