'use client';

import { Navbar } from '@/components/shared/navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:pt-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              About Better
            </h1>
            <p className="text-lg text-gray-600">
              We're making homeownership simpler, faster, and more accessible for all Americans.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We believe homeownership is the foundation of financial stability and generational wealth building. That's why we're on a mission to make it accessible and affordable for everyone.
              </p>
              <p className="text-lg text-gray-600">
                By leveraging technology and removing unnecessary fees, we're creating a more efficient, transparent, and inclusive housing finance system.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We leverage technology to reimagine the mortgage process."
              },
              {
                title: "Transparency",
                description: "We believe in clear communication and no hidden fees."
              },
              {
                title: "Accessibility",
                description: "We're making homeownership possible for more people."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}