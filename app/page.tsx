import Hero from '@/components/Hero';
import FeaturedSections from '@/components/FeaturedSections';
import ProductShowcase from '@/components/ProductShowcase';
import BlogPreview from '@/components/BlogPreview';
import Newsletter from '@/components/Newsletter';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSections />
      <ProductShowcase />
      <BlogPreview />
      <Newsletter />
    </>
  );
}