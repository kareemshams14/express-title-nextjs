import React from 'react';

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-4">How It Works</h1>
      <p className="text-cvTextDark">
        [Content for How It Works will be added here. User to provide text outlining the process.]
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-cvBgLight rounded-lg shadow"> {/* Using cvBgLight for slight contrast if body is pure white */}
          <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Step 1: Placeholder</h2>
          <p>Details about the first step...</p>
        </div>
        <div className="p-6 bg-cvBgLight rounded-lg shadow">
          <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Step 2: Placeholder</h2>
          <p>Details about the second step...</p>
        </div>
        <div className="p-6 bg-cvBgLight rounded-lg shadow">
          <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Step 3: Placeholder</h2>
          <p>Details about the third step...</p>
        </div>
      </div>
    </div>
  );
}
