import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/sections/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
       <AnimateOnScroll>
      <FeaturesSection />
       </AnimateOnScroll>
      <AnimateOnScroll> 
      <PricingSection />
       </AnimateOnScroll>
      <AnimateOnScroll>  
      <TestimonialsSection />
        </AnimateOnScroll>
      <AnimateOnScroll>  
      <FaqSection />
       </AnimateOnScroll>
      <AnimateOnScroll> 
      <Footer />
       </AnimateOnScroll>
    </main>
  );
}