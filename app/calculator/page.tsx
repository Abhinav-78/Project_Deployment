'use client';

import { useState } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export default function Calculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(3.5);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Mortgage Calculator</h1>
            <p className="text-lg text-gray-600">
              Estimate your monthly mortgage payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="homePrice">Home Price: ${homePrice.toLocaleString()}</Label>
                  <Slider
                    id="homePrice"
                    min={50000}
                    max={1000000}
                    step={1000}
                    value={[homePrice]}
                    onValueChange={(value) => setHomePrice(value[0])}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="downPayment">Down Payment: ${downPayment.toLocaleString()}</Label>
                  <Slider
                    id="downPayment"
                    min={0}
                    max={homePrice}
                    step={1000}
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="loanTerm">Loan Term (Years): {loanTerm}</Label>
                  <Slider
                    id="loanTerm"
                    min={15}
                    max={30}
                    step={15}
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
                  <Slider
                    id="interestRate"
                    min={2}
                    max={8}
                    step={0.1}
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Monthly Payment Breakdown</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="text-xl font-semibold">${calculateMonthlyPayment()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Property Taxes (est.)</span>
                  <span className="text-xl font-semibold">${(homePrice * 0.012 / 12).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Home Insurance (est.)</span>
                  <span className="text-xl font-semibold">${(homePrice * 0.003 / 12).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Monthly Payment</span>
                    <span className="text-2xl font-bold text-primary">
                      ${(
                        parseFloat(calculateMonthlyPayment()) +
                        (homePrice * 0.012 / 12) +
                        (homePrice * 0.003 / 12)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}