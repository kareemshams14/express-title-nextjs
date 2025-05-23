import React from 'react';

interface TestimonialCardProps {
  stars: number;
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ stars, quote, author, location }) => {
  const renderStars = () => {
    const filledStars = '★'.repeat(stars);
    const emptyStars = '☆'.repeat(5 - stars);
    return `${filledStars}${emptyStars}`;
  };

  return (
    <div className="bg-light shadow-lg rounded-lg p-6 border border-border-neutral flex flex-col h-full"> {/* Updated colors */}
      <div className="text-accent text-xl mb-2" aria-label={`${stars} out of 5 stars`}> {/* Updated text-yellow-500 to text-accent */}
        {renderStars()}
      </div>
      <p className="text-body italic mb-4 flex-grow">"{quote}"</p> {/* Updated text-gray-700 to text-body */}
      <p className="text-body opacity-90 text-sm font-semibold">— {author}, {location}</p> {/* Updated text-gray-600 to text-body opacity-90 */}
    </div>
  );
};

export default TestimonialCard;
