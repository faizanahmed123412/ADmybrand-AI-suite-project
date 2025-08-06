import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 flex flex-col items-center text-center">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Supercharge Your Marketing with AI
          </h1>
          <p className="max-w-[700px] mx-auto text-lg text-muted-foreground md:text-xl mt-4">
            ADmyBRAND AI Suite is the all-in-one platform to automate your campaigns,
            generate content, and analyze performance with unparalleled precision.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">
              Start Your Free Trial
              <MoveRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="mt-16 relative">
            {/* Placeholder for Hero Image/Video */}
            <div className="relative rounded-xl border border-white/10 bg-card/50 backdrop-blur-lg shadow-2xl shadow-primary/30 p-2">
               <img 
                 src="https://placehold.co/1200x600/1e293b/ffffff?text=AI+Dashboard+View" 
                 alt="AI Dashboard" 
                 className="rounded-lg" // Changed from rounded-xl to fit inner container
                 width={1200}
                 height={600}
               />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
