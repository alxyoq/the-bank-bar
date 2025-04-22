import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function CateringEventsPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-[#ab843f] mb-6">
              Catering & Events
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Looking to plan a special event? Celebrate these moments with friends and family in our cozy and historic restaurant – a custom menu selection is available for all catering and special events. Please email us at hello@woodburystationcafe.com or call 856-848-5282. We look forward to offering attentive service and accommodating your celebration requests.
            </p>
          </div>

          {/* Main Image */}
          <div className="rounded-lg overflow-hidden shadow-md mb-10 max-w-3xl mx-auto">
            <Image
              src="/images/woodbury/catering-2.jpg"
              alt="Woodbury Station Cafe Events and Catering"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="mailto:hello@woodburystationcafe.com"
              className="bg-[#ab843f] text-white hover:bg-opacity-90 rounded-full px-6 py-3 text-center font-medium transition-all"
            >
              Catering Menu
            </Link>
            <Link
              href="tel:856-848-5282"
              className="border border-[#ab843f] text-[#ab843f] hover:bg-[#ab843f] hover:text-white rounded-full px-6 py-3 text-center font-medium transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/catering-1.jpg"
                alt="Woodbury Station Cafe Catering"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/catering-4.jpg"
                alt="Woodbury Station Cafe Catering"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/catering-3.jpg"
                alt="Woodbury Station Cafe Catering"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
