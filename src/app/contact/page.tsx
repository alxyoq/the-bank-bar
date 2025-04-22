import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Woodbury Station Cafe',
  description: 'Get in touch with Woodbury Station Cafe in Woodbury Heights, NJ. Contact us for reservations, catering inquiries, or feedback.',
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">
            Contact Us
          </h1>

          <p className="text-xl text-center mb-12 text-cafe-lavender max-w-3xl mx-auto">
            Have a question or comment? We'd love to hear from you! Use the form below to get in touch with us.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-8">
                  <h2 className="text-2xl font-medium text-cafe-lavender mb-6">Contact Information</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <MapPin className="text-cafe-rose mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Address</h3>
                        <address className="not-italic">
                          101 Cooper St<br />
                          Woodbury Heights, NJ 08097
                        </address>
                        <Link
                          href="https://maps.google.com/?q=Woodbury+Station+Cafe+Woodbury+Heights+NJ"
                          target="_blank"
                          className="text-cafe-rose hover:text-cafe-lavender transition-colors text-sm"
                        >
                          Get Directions →
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="text-cafe-rose mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <Link
                          href="tel:856-384-6700"
                          className="hover:text-cafe-rose transition-colors"
                        >
                          856-384-6700
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="text-cafe-rose mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <Link
                          href="mailto:info@woodburystationcafe.com"
                          className="hover:text-cafe-rose transition-colors"
                        >
                          info@woodburystationcafe.com
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-cafe-rose mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Hours</h3>
                        <p>Tuesday - Sunday: 8am - 3pm</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/images/woodbury/exterior.jpg"
                    alt="Woodbury Station Cafe Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-medium text-cafe-lavender mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation</option>
                      <option value="catering">Catering</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-rose"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center btn-primary w-full py-3"
                  >
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-medium text-cafe-rose text-center mb-8">Find Us</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
              <iframe
                title="Map to Woodbury Station Cafe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.6893205540096!2d-75.1499919!3d39.836382799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d001e36edf53%3A0x8d268ab516c9cdfc!2sWoodbury%20Station%20Cafe!5e0!3m2!1sen!2sus!4v1745296884943!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
