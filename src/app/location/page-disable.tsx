import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LocationPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-12">
            Location
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-1 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-medium text-cafe-rose mb-6">
                Visit Woodbury Station Cafe
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={24} className="text-cafe-rose mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-gray-700">
                      101 Cooper St<br />
                      Woodbury Heights, NJ 08097
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-cafe-rose mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <p className="text-gray-700">
                      Tuesday-Sunday 8am - 3pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-cafe-rose mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <Link href="tel:856-384-6700" className="text-cafe-rose hover:underline">
                      856-384-6700
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="https://www.google.com/maps/place/Woodbury+Station+Cafe/@39.836383,-75.1499919,17z"
                  target="_blank"
                  className="btn-primary inline-flex items-center"
                >
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex-1 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Woodbury Station Cafe Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.6893205540096!2d-75.1499919!3d39.836382799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d001e36edf53%3A0x8d268ab516c9cdfc!2sWoodbury%20Station%20Cafe!5e0!3m2!1sen!2sus!4v1745296884943!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-medium text-cafe-rose mb-6">
              Parking Information
            </h2>
            <p className="text-gray-700 mb-4">
              Woodbury Station Cafe offers free street parking in front of the restaurant. Additionally, we provide free valet parking on Saturdays and Sundays from 9am to 3pm.
            </p>
            <p className="bg-cafe-lavender/20 p-4 rounded-md inline-block">
              <strong>Free Valet Parking</strong> on Sat & Sun 9am-3pm
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
