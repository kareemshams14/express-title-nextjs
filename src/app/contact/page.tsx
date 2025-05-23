import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-6 text-center">Contact Us</h1>
      <p className="text-cvTextDark text-center mb-8">
        We'd love to hear from you! Please fill out the form below to get in touch.
      </p>
      
      <div className="max-w-2xl mx-auto bg-white p-0 md:p-6 rounded-lg shadow-md overflow-hidden">
        {/* GHL Form Iframe */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/d7S7ThWyaFOt1fjmcgzP"
          style={{ width: '100%', height: '100%', border: 'none', minHeight: '652px' }} // minHeight from data-height
          id="inline-d7S7ThWyaFOt1fjmcgzP"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Auto Dealer Contact Us"
          data-height="652" // Used for minHeight in style
          data-layout-iframe-id="inline-d7S7ThWyaFOt1fjmcgzP"
          data-form-id="d7S7ThWyaFOt1fjmcgzP"
          title="Auto Dealer Contact Us"
        >
        </iframe>
        <script src="https://link.msgsndr.com/js/form_embed.js" defer></script>
      </div>

      <p className="text-cvTextDark text-center mt-8">
        Alternatively, you can reach out to us via our chat widget available on all pages.
      </p>
    </div>
  );
}
