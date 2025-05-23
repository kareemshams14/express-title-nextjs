import React from 'react';

export default function FloridaDisclosuresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-4">Florida Disclosures</h1>
      <p className="text-cvTextDark">
        [Content for Florida-specific disclosures will be added here. User to provide text that complies with all relevant Florida regulations for consumer finance.]
      </p>
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-cvDarkBlue">Important Information for Florida Residents:</h2>
        <p>Placeholder text for specific Florida disclosure item 1...</p>
        <p>Placeholder text for specific Florida disclosure item 2...</p>
        {/* Add all necessary Florida-specific legal text here */}
      </div>
    </div>
  );
}
