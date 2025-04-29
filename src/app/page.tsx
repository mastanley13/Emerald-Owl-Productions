
import Header from '../components/shared/Layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import AmericaBanner from '../components/home/AmericaBanner';
import VideoHighlight from '../components/home/VideoHighlight';
import ServiceHighlights from '../components/home/ServiceHighlights';
import FeaturedSlider from '../components/home/FeaturedSlider';
import Newsletter from '../components/shared/UI/Newsletter';
import Footer from '../components/shared/Layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <AmericaBanner />
        <VideoHighlight />
        <ServiceHighlights />
        <FeaturedSlider />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
