import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/shared/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:pt-36 bg-gradient-to-b from-[#f8fdfe] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#1d4044]">
                A better way to buy a home
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get a mortgage with lower rates, faster closing, and a completely digital process
              </p>
              <div className="flex gap-4">
                <Link href="/start">
                  <Button size="lg" className="bg-[#00adbb] hover:bg-[#008c98] text-lg px-8">
                    Get Started
                  </Button>
                </Link>
                <Link href="/calculator">
                  <Button variant="outline" size="lg" className="border-[#00adbb] text-[#00adbb] hover:bg-[#00adbb] hover:text-white text-lg px-8">
                    Calculate Payment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Modern home"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-[#00adbb] font-semibold">Average savings</p>
                <p className="text-3xl font-bold text-[#1d4044]">$8,200</p>
                <p className="text-sm text-gray-600">in closing costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8fdfe]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1d4044]">Why Choose Better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Online Process",
                description: "Complete your mortgage application entirely online, from anywhere."
              },
              {
                title: "Lower Rates",
                description: "Save thousands with better rates and zero lender fees."
              },
              {
                title: "Fast Closing",
                description: "Close on your schedule with our streamlined process."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#1d4044]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}