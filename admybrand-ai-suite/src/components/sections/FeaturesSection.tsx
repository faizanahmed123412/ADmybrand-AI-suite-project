import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { BrainCircuit, Megaphone, BarChart3, Bot, Zap, LineChart } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit size={40} className="text-primary" />,
    title: "AI-Powered Ad Campaigns",
    description: "Automatically generate and optimize ad campaigns across multiple platforms for maximum ROI.",
  },
  {
    icon: <Megaphone size={40} className="text-primary" />,
    title: "Content Generation",
    description: "Create compelling marketing copy, blog posts, and social media updates in seconds.",
  },
  {
    icon: <BarChart3 size={40} className="text-primary" />,
    title: "Predictive Analytics",
    description: "Forecast market trends and customer behavior with our advanced predictive models.",
  },
  {
    icon: <Bot size={40} className="text-primary" />,
    title: "Automated Chatbots",
    description: "Deploy intelligent chatbots to engage visitors and capture leads 24/7.",
  },
  {
    icon: <Zap size={40} className="text-primary" />,
    title: "Workflow Automation",
    description: "Connect your marketing tools and automate repetitive tasks to save time and reduce errors.",
  },
  {
    icon: <LineChart size={40} className="text-primary" />,
    title: "Performance Tracking",
    description: "Get real-time insights into your campaign performance with a unified, intuitive dashboard.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI suite is packed with powerful features designed to streamline your marketing,
                boost engagement, and drive growth.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index}>
                <Card className="h-full transform-gpu transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/30">
                    <CardHeader className="flex flex-col items-center text-center p-6">
                        {feature.icon}
                        <CardTitle className="mt-4 text-xl font-bold">{feature.title}</CardTitle>
                        <CardDescription className="mt-2 text-base text-muted-foreground">
                        {feature.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
