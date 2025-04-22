'use client';

import { useState } from 'react';

const NewsletterSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');

      // Reset success message after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="bg-cafe-cream py-12">
      <div className="cafe-container text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-cafe-rose mb-4">
          Join Our List
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get exclusives on upcoming seasonal menus and more.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-2 border border-cafe-lavender/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-cafe-lavender/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-outline w-32 py-2 mx-auto block"
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </button>

          {isSuccess && (
            <p className="text-green-600 mt-4">
              Thanks for joining! We'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
