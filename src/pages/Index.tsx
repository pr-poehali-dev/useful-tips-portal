import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TipsSection from '@/components/TipsSection';
import CategoriesSection from '@/components/CategoriesSection';
import SubscribeSection from '@/components/SubscribeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TipsSection />
        <CategoriesSection />
        <SubscribeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
