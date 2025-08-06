"use client"; // <-- ADD THIS LINE

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote: "ADmyBRAND AI has completely transformed our marketing workflow. We're creating better content faster than ever before and our campaign ROI has skyrocketed.",
    name: "Sarah Johnson",
    title: "Marketing Director, Innovate Inc.",
    avatar: "https://placehold.co/100x100/64748b/ffffff?text=SJ",
  },
  {
    quote: "The predictive analytics feature is a game-changer. We can now anticipate market trends with incredible accuracy. It feels like having a crystal ball.",
    name: "Michael Chen",
    title: "CEO, DataDriven Co.",
    avatar: "https://placehold.co/100x100/64748b/ffffff?text=MC",
  },
  {
    quote: "As a small business, we need to be efficient. This suite automates so many tedious tasks, freeing us up to focus on strategy. Highly recommended!",
    name: "Jessica Rodriguez",
    title: "Founder, Creative Solutions",
    avatar: "https://placehold.co/100x100/64748b/ffffff?text=JR",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Loved by Marketers Worldwide
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our satisfied customers have to say about our platform.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto pt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between h-full p-6">
                        <blockquote className="text-lg italic border-l-2 border-primary pl-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center mt-6">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/1e293b/ffffff?text=??'; }}
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
