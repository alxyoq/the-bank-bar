import Hero from '@/components/ui/Hero';
import FeaturedSections from '@/components/ui/FeaturedSections';
import ReviewsSection from '@/components/ui/ReviewsSection';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturedSections />
      <ReviewsSection />
    </Layout>
  );
}
