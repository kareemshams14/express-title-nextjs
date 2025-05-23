export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string; // For simplicity, plain text content for now.
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-title-loans',
    title: 'Understanding Title Loans: A Comprehensive Guide',
    date: 'October 26, 2023',
    summary: 'Learn the ins and outs of title loans, how they work, and what you need to know before applying.',
    content: `
      <p>A title loan is a type of secured loan where you use your vehicle title as collateral. It's a way to get cash quickly, especially if you have a clear title on your car, truck, or motorcycle.</p>
      <p>The amount you can borrow typically depends on the value of your vehicle and state regulations. Interest rates can vary, so it's important to understand the terms fully.</p>
      <p><strong>Key things to consider:</strong></p>
      <ul>
        <li>Loan amount limits</li>
        <li>Interest rates and fees</li>
        <li>Repayment schedule</li>
        <li>What happens if you default</li>
      </ul>
      <p>At Express Title, we aim to make the process transparent and straightforward. Our team is here to answer any questions you might have.</p>
    `
  },
  {
    slug: 'benefits-of-choosing-express-title',
    title: 'Top 3 Benefits of Choosing Express Title for Your Loan',
    date: 'October 22, 2023',
    summary: 'Discover why Express Title is a preferred choice for title loans in Florida, focusing on speed, service, and transparency.',
    content: `
      <p>When you need funds quickly, choosing the right lender is crucial. Here are some reasons why Express Title stands out:</p>
      <p><strong>1. Fast Approval Process:</strong> We've streamlined our application and approval process so you can get your cash, often on the same day.</p>
      <p><strong>2. Customer-Centric Service:</strong> Our team is dedicated to providing friendly, professional, and respectful service. We're here to help you understand your options.</p>
      <p><strong>3. Transparent Terms:</strong> We believe in clear communication. All terms, fees, and conditions are explained upfront, so there are no surprises.</p>
      <p>We are committed to responsible lending and serving our Florida community.</p>
    `
  },
  {
    slug: 'maximizing-your-vehicle-value',
    title: 'Tips for Maximizing Your Vehicle\'s Value for a Title Loan',
    date: 'October 18, 2023',
    summary: 'A few simple steps can help ensure you get the best possible value assessment for your vehicle when applying for a title loan.',
    content: `
      <p>The value of your vehicle is a key factor in determining your title loan amount. Here’s how to potentially maximize it:</p>
      <p><strong>1. Maintenance Records:</strong> Keep your vehicle well-maintained and have records to show it. Regular oil changes and upkeep matter.</p>
      <p><strong>2. Cleanliness:</strong> A clean car, inside and out, makes a better impression and can indicate good care.</p>
      <p><strong>3. Minor Repairs:</strong> Fixing small cosmetic issues or minor mechanical problems can sometimes improve its appraised value.</p>
      <p>While these tips can help, our appraisers always aim to give you a fair and competitive valuation based on current market conditions.</p>
    `
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
