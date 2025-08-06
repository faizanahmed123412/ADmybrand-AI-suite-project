import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for our Starter and Pro plans. No credit card is required to get started. You can explore all the features and see how our platform can benefit your business.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. Changes will be prorated accordingly.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans. Our Pro and Enterprise plans include priority email and live chat support. Enterprise customers also get a dedicated account manager and custom onboarding.",
  },
  {
    question: "Does the AI generate content in different languages?",
    answer: "Yes, our AI content generation tool supports over 25 languages, allowing you to create marketing materials for a global audience.",
  },
  {
    question: "How does the billing work?",
    answer: "Our plans are billed on a monthly or annual basis. You can choose the billing cycle that works best for you. We offer a discount for annual subscriptions.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl pt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
