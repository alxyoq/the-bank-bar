import Image from 'next/image';
import Link from 'next/link';

const reviews = [
  {
    id: 1,
    name: 'Frank K.',
    rating: 5,
    date: '1/12/2023',
    text: 'Amazing food and service. Love their Benedict selection. Coffee was perfect. My favorite brunch spot!'
  },
  {
    id: 2,
    name: 'Dimiana A.',
    rating: 5,
    date: '2/3/2023',
    text: 'The food, the staff, everything is so welcoming! Such a cute place and the food was amazing. Will definitely be back!'
  },
  {
    id: 3,
    name: 'Cassidy P.',
    rating: 5,
    date: '3/20/2023',
    text: 'Amazing food and lovely staff. Portions are generous, food is fresh and delicious. Highly recommend for brunch. Try the avocado toast!'
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-12 bg-cafe-cream">
      <div className="cafe-container">
        <h2 className="text-3xl font-medium text-cafe-rose mb-10 text-center">
          Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md border border-cafe-lavender/10"
            >
              <div className="flex items-center mb-3">
                {/* Stars */}
                <div className="flex text-yellow-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <p className="mb-4 italic text-gray-700">{review.text}</p>

              <div className="flex items-center">
                <Image
                  src="https://ext.same-assets.com/1917026812/2259157180.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span className="font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/reviews" className="btn-outline inline-block">
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
