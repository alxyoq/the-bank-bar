import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Facebook, Instagram, MapPin, Calendar, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social | Woodbury Station Cafe',
  description: 'See what our customers are saying about Woodbury Station Cafe. Check out our latest social media posts and customer reviews.',
};

// Helper component for star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={`star-${i}-${rating}`}
          size={18}
          fill={i < rating ? "currentColor" : "none"}
          className={i >= rating ? "text-gray-300" : ""}
        />
      ))}
    </div>
  );
};

export default function SocialPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">
            Social Media & Reviews
          </h1>

          <p className="text-xl text-center mb-12 text-cafe-lavender max-w-3xl mx-auto">
            See what's happening at Woodbury Station Cafe. Follow us on social media for the latest updates, daily specials, and events.
          </p>

          {/* Social Media Follow Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link
              href="https://www.facebook.com/woodburystation/"
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-blue-600 hover:text-white text-blue-600 px-6 py-3 rounded-md shadow-md transition-colors"
            >
              <Facebook /> Follow on Facebook
            </Link>
            <Link
              href="https://www.instagram.com/woodburystationcafe/"
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white text-pink-500 px-6 py-3 rounded-md shadow-md transition-colors"
            >
              <Instagram /> Follow on Instagram
            </Link>
          </div>

          {/* Featured Posts Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-medium text-cafe-lavender text-center mb-10">Recent Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/woodbury/woodburystationcafe_461963930_1904146096736019_3166042652813333833_n.jpg"
                    alt="Woodbury Station Cafe Special"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Facebook size={16} className="text-blue-600 mr-2" />
                    <span>Posted on Facebook</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} className="mr-1" />
                    <span>2 days ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Weekend Specials!</h3>
                  <p className="text-gray-600 mb-4">
                    Join us this weekend for our famous French Toast, topped with fresh berries and whipped cream. Perfect for a relaxing morning!
                  </p>
                  <Link
                    href="https://www.facebook.com/woodburystation/"
                    target="_blank"
                    className="text-cafe-rose hover:text-cafe-lavender transition-colors font-medium"
                  >
                    View on Facebook →
                  </Link>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/woodbury/woodburystationcafe_454114239_2491869811009338_1528767275774960495_n.jpg"
                    alt="Woodbury Station Cafe Breakfast"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Instagram size={16} className="text-pink-500 mr-2" />
                    <span>Posted on Instagram</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} className="mr-1" />
                    <span>5 days ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Morning Perfection</h3>
                  <p className="text-gray-600 mb-4">
                    Start your day right with our signature breakfast platters. Made with love and the freshest ingredients!
                  </p>
                  <Link
                    href="https://www.instagram.com/woodburystationcafe/"
                    target="_blank"
                    className="text-cafe-rose hover:text-cafe-lavender transition-colors font-medium"
                  >
                    View on Instagram →
                  </Link>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/woodbury/woodburystationcafe_448142181_775908024370345_6253197183225168611_n.jpg"
                    alt="Woodbury Station Cafe Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Facebook size={16} className="text-blue-600 mr-2" />
                    <span>Posted on Facebook</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} className="mr-1" />
                    <span>1 week ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Historic Charm</h3>
                  <p className="text-gray-600 mb-4">
                    We're proud to serve our community in this beautiful historic train station. Come experience the unique atmosphere while enjoying your meal.
                  </p>
                  <Link
                    href="https://www.facebook.com/woodburystation/"
                    target="_blank"
                    className="text-cafe-rose hover:text-cafe-lavender transition-colors font-medium"
                  >
                    View on Facebook →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-medium text-cafe-lavender text-center mb-10">Customer Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <StarRating rating={5} />
                <p className="italic text-gray-600 mb-4">
                  "The food is absolutely delicious! I love the atmosphere of dining in a historic train station. The staff is always friendly and attentive. Their breakfast options are the best in town."
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Sarah J.</div>
                  <div className="text-sm text-gray-500">Google Reviews</div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <StarRating rating={5} />
                <p className="italic text-gray-600 mb-4">
                  "What a gem! The building has so much character, and the food matches the wonderful atmosphere. Their pancakes are fluffy, and the coffee is always fresh. My family and I are regulars!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Michael T.</div>
                  <div className="text-sm text-gray-500">Facebook Reviews</div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <StarRating rating={4} />
                <p className="italic text-gray-600 mb-4">
                  "I love stopping by for lunch. Their sandwiches are made with fresh ingredients, and the portions are generous. The historic setting makes for a unique dining experience."
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Jennifer K.</div>
                  <div className="text-sm text-gray-500">Yelp</div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Feature */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="p-8 md:p-12">
              <div className="text-5xl text-cafe-rose font-serif mb-6">"</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                The Woodbury Station Cafe is one of South Jersey's hidden gems. Housed in a historic train station, it offers a truly unique dining experience with food that's worth traveling for. A must-visit for anyone in the area!
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="font-medium text-lg">- South Jersey Food Magazine</div>
                  <div className="text-cafe-lavender">Featured Review, 2024</div>
                </div>
                <Star size={40} fill="currentColor" className="text-yellow-400 mt-4 md:mt-0" />
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-cafe-lavender mb-6">Share Your Experience</h2>
            <p className="text-lg mb-8">
              Enjoyed your visit to Woodbury Station Cafe? We'd love to hear about it! Share your experience on social media and tag us, or leave a review on your favorite platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.facebook.com/woodburystation/reviews/"
                target="_blank"
                className="btn-primary px-6 py-3"
              >
                Write a Review
              </Link>
              <Link
                href="/contact"
                className="btn-outline px-6 py-3"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
