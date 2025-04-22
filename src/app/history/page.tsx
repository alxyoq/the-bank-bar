import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History | Woodbury Station Cafe',
  description: 'Learn about the rich history of the Woodbury Station building, home to our cafe in Woodbury Heights, New Jersey.',
};

export default function HistoryPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">
            Our Historic Train Station
          </h1>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <Image
              src="/images/woodbury/woodburystationcafe_448142181_775908024370345_6253197183225168611_n.jpg"
              alt="Woodbury Station Cafe Exterior"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-medium text-cafe-lavender mb-6">A Rich Railway Heritage</h2>
              <p className="mb-4 text-lg">
                The Woodbury Station Cafe occupies the historic Woodbury train station building, a charming piece of New Jersey's railway history. Built in 1883 at the junction of Station Road and Cooper Street, this structure served as a critical transportation hub for the community for many decades.
              </p>
              <p className="mb-4 text-lg">
                The station was part of the West Jersey Railroad, later known as the West Jersey and Seashore Railroad, which connected the communities of South Jersey and provided vital transportation links for both passengers and freight throughout the region.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Image
                src="/images/woodbury/woodburystationcafe_463404804_1211910303248618_3806204036573601432_n.jpg"
                alt="Historic Train Station Interior"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <Image
                src="/images/woodbury/woodburystationcafe_455114879_1028654515638396_4902749197555600695_n.jpg"
                alt="Train Station Memorabilia"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-medium text-cafe-lavender mb-6">Preservation & Restoration</h2>
              <p className="mb-4 text-lg">
                By the late 20th century, as rail travel declined, the station fell into disuse. However, recognizing its historical significance, the Woodbury Old-City Restoration Committee together with the New Jersey Historic Trust undertook a complete restoration of the building to preserve this important landmark.
              </p>
              <p className="mb-4 text-lg">
                The restoration was meticulously carried out, maintaining the authenticity of the original architecture while updating the building for modern use. Many of the station's original features were preserved, including its distinctive exterior, high ceilings, and wooden details.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-medium text-cafe-lavender mb-6">From Trains to Tasty Treats</h2>
              <p className="mb-4 text-lg">
                Today, the Woodbury Station Cafe brings new life to this historic building. While trains no longer stop here, the cafe maintains the station's tradition of bringing the community together. The historical ambiance creates a unique dining experience that celebrates the building's past while serving delicious food to today's patrons.
              </p>
              <p className="mb-4 text-lg">
                Throughout the cafe, you'll find railway memorabilia and historic photographs that pay homage to the building's origins. Some of the original architectural elements remain intact, allowing diners to step back in time while enjoying their meals.
              </p>
            </section>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mb-12">
              <h2 className="text-3xl font-medium text-cafe-rose mb-6 text-center">Did You Know?</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>The station was built in 1883 as part of the expanding railroad network in South Jersey.</p>
                    </li>
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>The building is listed on the National Register of Historic Places.</p>
                    </li>
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>During its peak, dozens of trains would pass through daily, connecting Woodbury to Philadelphia and the Jersey Shore.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>The station's distinctive architectural style reflects the Victorian influence of the late 19th century.</p>
                    </li>
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>The restoration project was completed in the early 2000s, ensuring this landmark would be preserved for future generations.</p>
                    </li>
                    <li className="flex">
                      <span className="text-cafe-rose mr-2">•</span>
                      <p>Some customers report that on quiet mornings, they can almost hear the echo of train whistles from decades past.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="text-center">
              <h2 className="text-3xl font-medium text-cafe-lavender mb-6">Visit Our Historic Cafe</h2>
              <p className="mb-8 text-lg">
                We invite you to experience the charm and history of Woodbury Station Cafe for yourself. Come enjoy a delicious meal in this unique historic setting and become part of the station's continuing story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/menu" className="btn-primary px-6 py-3">
                  View Our Menu
                </Link>
                <Link href="/location" className="btn-outline px-6 py-3">
                  Get Directions
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
