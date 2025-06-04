'use client';

import React from 'react';
import Script from 'next/script';

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  value: number;
  loanAmount: number;
  imageUrl: string | null;
}

export default function GHLFormIntegration({ vehicleInfo }: { vehicleInfo: VehicleInfo | null }) {

  return (
    <div className="min-h-[1800px] w-full">
      <Script src="https://link.msgsndr.com/js/form_embed.js" />
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/eVmyj74xSDEJe0nRu3Ao"
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
