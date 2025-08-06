import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "For individuals and small teams getting started with AI marketing.",
    features: [
      "1 User Seat",
      "AI Content Generation (10k words/mo)",
      "Basic Analytics",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing businesses that need more power and automation.",
    features: [
      "5 User Seats",
      "AI Content Generation (50k words/mo)",
      "Predictive Analytics",
      "AI Ad Campaign Management",
      "Priority Email & Chat Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs and dedicated support.",
    features: [
      "Unlimited User Seats",
      "Unlimited AI Generation",
      "Advanced API Access",
      "Dedicated Account Manager",
      "Custom Onboarding & Training",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Find the Perfect Plan
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the plan that fits your needs. All plans come with a 14-day free trial. No credit card required.
                </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto grid max-w-md gap-8 pt-12 lg:max-w-5xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <AnimateOnScroll key={tier.name}>
              <Card className={`flex flex-col h-full ${tier.isPopular ? "border-primary shadow-primary/30" : ""}`}>
                <CardHeader className="pb-4">
                  {tier.isPopular && (
                    <Badge className="w-fit self-end bg-primary">Most Popular</Badge>
                  )}
                  <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-5xl font-extrabold mb-4">
                    {tier.price}
                    {tier.price.startsWith('$') && <span className="text-lg font-normal text-muted-foreground">/month</span>}
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                    {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
