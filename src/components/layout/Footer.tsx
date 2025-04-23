import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cafe-lavender text-white">
      <div className="cafe-container py-8 px-2 sm:px-4">
        {/* Mobile layout: stacked with logo to right */}
        <div className="block md:hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 space-y-6 pr-4">
              {/* Visit Us */}
              <div>
                <h3 className="text-lg font-medium mb-2">Visit Us</h3>
                <div className="flex items-start mb-2">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <address className="not-italic text-sm">
                    101 Cooper St<br />
                    Woodbury, NJ 08096
                  </address>
                </div>
                <Link
                  href="https://maps.google.com/?q=Woodbury+Station+Cafe+Woodbury+Heights+NJ"
                  target="_blank"
                  className="inline-flex items-center text-cafe-cream hover:text-white transition-colors mt-1 text-sm"
                >
                  Get Directions <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Restaurant Hours */}
              <div>
                <h3 className="text-lg font-medium mb-2">Restaurant Hours</h3>
                <p className="mb-1 text-sm">Tuesday–Sunday: 8am – 3pm</p>
                <Link
                  href="/order-online"
                  className="bg-cafe-cream text-cafe-lavender hover:bg-opacity-90 rounded-md px-3 py-1.5 inline-flex items-center font-medium transition-all text-sm"
                >
                  Order Online
                </Link>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                <div className="flex items-center mb-2">
                  <Mail size={16} className="mr-2 flex-shrink-0" />
                  <Link
                    href="mailto:info@woodburystationcafe.com"
                    className="hover:text-cafe-cream transition-colors text-sm"
                  >
                    Email Us
                  </Link>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <Link
                    href="tel:856-384-6700"
                    className="hover:text-cafe-cream transition-colors text-sm"
                  >
                    Call Us 856-384-6700
                  </Link>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="ml-4 mt-2 shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/images/logo/woodbury-station-cafe-logo.png"
                alt="Woodbury Station Cafe Logo"
                width={120}
                height={120}
                className="object-contain w-[120px] h-[120px]"
              />
            </div>
          </div>
        </div>

        {/* Desktop layout: 4-column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 items-start text-sm">
          {/* Logo Column */}
          <div className="flex justify-start pl-10 md:pl-35 mb-4 md:mb-0">
            <div className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/images/logo/woodbury-station-cafe-logo.png"
                alt="Woodbury Station Cafe Logo"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Visit Us Column */}
          <div>
            <h3 className="text-lg font-medium mb-3">Visit Us</h3>
            <div className="flex items-start mb-3">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <address className="not-italic">
                101 Cooper St<br />
                Woodbury, NJ 08096
              </address>
            </div>
            <Link
              href="https://maps.google.com/?q=Woodbury+Station+Cafe+Woodbury+Heights+NJ"
              target="_blank"
              className="inline-flex items-center text-cafe-cream hover:text-white transition-colors mt-1"
            >
              Get Directions <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* Restaurant Hours Column */}
          <div>
            <h3 className="text-lg font-medium mb-3">Restaurant Hours</h3>
            <p className="mb-1">Tuesday–Sunday: 8am – 3pm</p>
            <Link
              href="/order-online"
              className="bg-cafe-cream text-cafe-lavender hover:bg-opacity-90 rounded-md px-3 py-1.5 inline-flex items-center font-medium transition-all text-sm"
            >
              Order Online
            </Link>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-medium mb-3">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2 flex-shrink-0" />
              <Link
                href="mailto:info@woodburystationcafe.com"
                className="hover:text-cafe-cream transition-colors"
              >
                Email Us
              </Link>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 flex-shrink-0" />
              <Link
                href="tel:856-384-6700"
                className="hover:text-cafe-cream transition-colors"
              >
                Call Us 856-384-6700
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/20 text-center">
          <div className="text-sm text-cafe-cream">
            © 2025 Woodbury Station Cafe. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
