"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Send, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }
    if (!email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!message) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      // Here you would typically send the form data to a server/API
      console.log("Form Submitted:", { name, email, message });
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSubmitted(false), 5000); // Reset form after 5 seconds
    }
  };

  return (
    <footer id="contact" className="w-full py-12 md:py-20 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Get in Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Have a question or want to work together? Drop us a line.
              </p>
            </div>
            {isSubmitted ? (
              <div className="mt-8 p-4 rounded-md bg-green-500/20 text-green-300 border border-green-500/30">
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-card/50 backdrop-blur-lg"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-card/50 backdrop-blur-lg"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-card/50 backdrop-blur-lg"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <div className="mb-8">
              <h3 className="text-xl font-bold">ADmyBRAND AI Suite</h3>
              <p className="text-muted-foreground">AI-Powered Marketing Platform</p>
            </div>
            <div className="flex space-x-4 mb-8">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github/></a>
            </div>
            <div className="space-y-2">
                <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
                <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
                <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ADmyBRAND Inc. All rights reserved.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
