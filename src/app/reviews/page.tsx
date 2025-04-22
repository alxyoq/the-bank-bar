import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Woodbury Station Cafe',
  description: 'See what our customers are saying about their experience at Woodbury Station Cafe in Woodbury Heights, NJ.',
};

const reviews = [
  {
    name: 'Cory K.',
    date: 'November 22, 2024',
    content:
      'Wow!!! It had been a couple years since I had eaten at the Woodbury Station Cafe. I took my mom for a Saturday lunch. The cafe was busy, but we were seated quickly. The chicken salad a sweet...',
    source: 'Yelp',
    link: 'https://www.yelp.com/biz/woodbury-station-cafe-woodbury',
  },
  {
    name: 'Andrew K.',
    date: 'October 16, 2024',
    content:
      'I drive an hour to get food here, there is no where that can compete with them, in my opinion. The service is amazing the food is big for the cost, also the food is fresh at the perfect...',
    source: 'Yelp',
    link: 'https://www.yelp.com/biz/woodbury-station-cafe-woodbury',
  },
  {
    name: 'Michael N.',
    date: 'April 30, 2024',
    content:
      "Who doesn't love a 19th century train station that can scare up a very tasty omelette. You pay for the privilege of not having to endure the cookie cutter sameness that define Denny's and the like...",
    source: 'Yelp',
    link: 'https://www.yelp.com/biz/woodbury-station-cafe-woodbury',
  },
  {
    name: 'Jonathan L.',
    date: 'May 14, 2024',
    content:
      "We've come here a few times over the years and always had good experiences. Lately though we've really connected with the staff and they treat us like royalty. Yes we always leave a heavy tip and...",
    source: 'Yelp',
    link: 'https://www.yelp.com/biz/woodbury-station-cafe-woodbury',
  },
];

export default function ReviewsPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">
            Reviews
          </h1>

          <p className="text-xl text-center mb-12 text-cafe-lavender max-w-3xl mx-auto">
            See what our customers are saying about their experience at Woodbury Station Cafe.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700 mb-4">"{review.content}"</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-800">{review.name}</span> · {review.date} ·{' '}
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cafe-rose hover:text-cafe-lavender transition-colors"
                  >
                    {review.source}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Woodbury+Station+Cafe/@39.8363828,-75.7597331,10z/data=!4m12!1m2!2m1!1sstation+cafe!3m8!1s0x89c6d001e36edf53:0x8d268ab516c9cdfc!8m2!3d39.8363828!4d-75.1499919!9m1!1b1!15sCgxzdGF0aW9uIGNhZmVaDiIMc3RhdGlvbiBjYWZlkgEEY2FmZeABAA!16s%2Fg%2F1tf6n4vf?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block px-6 py-2"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
