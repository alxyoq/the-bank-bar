import Image from 'next/image';
import Link from 'next/link';

const FeaturedSections = () => {
  return (
    <div className="py-10 bg-cafe-cream">
      {/* Intro Block Like Sweet Cafe without logo */}
      <section className="cafe-container text-center mb-16">
        <div className="inline-block border-2 border-black px-6 py-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#ab843f]">
              WOODBURY STATION CAFE
            </h1>
            <p className="mt-1 text-sm md:text-base tracking-wide font-medium text-black">
              Railroad Burgers and Bourbon Street Breakfasts await
            </p>
          </div>
        </div>

        <h2 className="mt-6 text-lg md:text-xl font-semibold text-[#ab843f]">
          Breakfast and Brunch Woodbury
        </h2>
        <p className="text-sm md:text-base font-medium text-gray-700 mt-1">
          Open from Tues–Sunday 8 AM–3 PM
        </p>

        <hr className="my-6 border-t border-[#ab843f]" />

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="border border-[#ab843f] text-[#ab843f] hover:bg-[#ab843f] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            Menu
          </Link>
          <Link
            href="/location"
            className="border border-[#ab843f] text-[#ab843f] hover:bg-[#ab843f] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            Location
          </Link>
          <Link
            href="/order-online"
            className="border border-[#ab843f] text-[#ab843f] hover:bg-[#ab843f] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            Order Online
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="cafe-container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-medium text-[#ab843f] mb-4">
              Welcome To Woodbury Station Cafe
            </h2>
            <p className="mb-4 text-gray-700">
              Woodbury Station Cafe opened as a charming European-style cafe and
              restaurant in the historic Woodbury train station. We serve
              delicious, perfectly-prepared classic Southern French feel
              breakfast and brunch in a cozy and historic atmosphere that’s
              perfect for both family meals and casual dining with friends.
            </p>
            <p className="mb-4 text-gray-700">
              We look forward to welcoming you in!
            </p>
          </div>
          <div className="order-1 md:order-2 mt-6 md:mt-12">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/burger-home-page.jpg"
                alt="Woodbury Station Cafe Interior"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast and Lunch Section */}
      <section className="cafe-container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/breakfast-1.jpg"
                alt="Woodbury Station Cafe Menu Items"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-[#ab843f] mb-4">
              Breakfast, Lunch and Brunch starting at 6:30 AM
            </h2>
            <p className="mb-4 text-gray-700">
              In addition to a classic American menu, Woodbury Station Cafe
              offers a coffee bar, fresh squeezed juices, freshly baked
              pastries, sandwiches, hearty breakfast classics, and a custom bar
              for catering and special events.
            </p>
            <Link
              href="/menu"
              className="bg-[#ab843f] text-white hover:bg-opacity-90 rounded-full px-5 py-2 text-sm font-medium transition-all inline-block -mt-2 md:mt-2"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Events and Parties Section */}
      <section className="cafe-container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-medium text-[#ab843f] mb-4">
              Events & Parties
            </h2>
            <p className="mb-4 text-gray-700">
              Celebrate special moments with friends and family in our cozy and
              historic restaurant – a custom menu selection is available for
              all catering and special events. Please email us or call us to
              discuss your needs.
            </p>
            <p className="mb-4 text-gray-700">
              We look forward to offering attentive service and accommodating
              your celebration requests.
            </p>
            <Link
              href="/catering-events"
              className="bg-[#ab843f] text-white hover:bg-opacity-90 rounded-full px-5 py-2 text-sm font-medium transition-all inline-block mt-2"
            >
              Book Your Event
            </Link>
          </div>
          <div className="order-1 md:order-2 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/woodbury/event-1.jpg"
                alt="Woodbury Station Cafe Events and Catering"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSections;
