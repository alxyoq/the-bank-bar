import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | Woodbury Station Cafe',
  description: 'Explore our historic train station cafe and delicious food through our photo gallery.',
};

export default function GalleryPage() {
  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">
            Our Gallery
          </h1>

          <p className="text-center text-lg text-cafe-lavender max-w-2xl mx-auto mb-10">
            Step through our historic train station and explore the charm of Woodbury Station Cafe.
            Browse through photos of our delicious food, unique atmosphere, and special moments.
          </p>

          <GalleryClient />
        </div>
      </div>
    </Layout>
  );
}
