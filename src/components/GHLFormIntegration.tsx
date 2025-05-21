'use client';

import React, { useEffect } from 'react';

export default function GHLFormIntegration() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    script.onload = () => {
      console.log('GHL embed script loaded');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-[1800px] w-full bg-gray-100 rounded-md">
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
