'use client';

import { useState } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Start() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "We'll be in touch with you shortly.",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get Started with Better</h1>
            <p className="text-lg text-gray-600">
              Tell us about your home buying plans
            </p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="purpose">What's your goal?</Label>
                    <select
                      id="purpose"
                      className="w-full mt-1 rounded-md border border-gray-300 p-2"
                    >
                      <option>I want to buy a home</option>
                      <option>I want to refinance</option>
                      <option>I'm just browsing</option>
                    </select>
                  </div>
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full"
                  >
                    Continue
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location">Where are you looking to buy?</Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Enter ZIP code"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeframe">When do you want to buy?</Label>
                    <select
                      id="timeframe"
                      className="w-full mt-1 rounded-md border border-gray-300 p-2"
                    >
                      <option>Within 3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button type="submit" className="w-full">
                      Submit Application
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}