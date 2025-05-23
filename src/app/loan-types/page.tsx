import React from 'react';

export default function LoanTypesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-4">Loan Types</h1>
      <p className="text-cvTextDark">
        [Content for Loan Types will be added here. User to provide text describing different loan products offered.]
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-cvBgLight rounded-lg shadow">
          <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Placeholder Loan Type 1</h2>
          <p>Details about the first loan type...</p>
        </div>
        <div className="p-6 bg-cvBgLight rounded-lg shadow">
          <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Placeholder Loan Type 2</h2>
          <p>Details about the second loan type...</p>
        </div>
        {/* Add more loan types as needed */}
      </div>
    </div>
  );
}
