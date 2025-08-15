"use client";
import Footer from "@/app/components/Footer";
import { FloatingNav } from "@/app/components/ui/floating/nav";
import navItems from "@/app/components/navitems";
import Link from "next/link";

export default function PartnershipPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Join the Mission
            </h1>
            <p className="text-xl text-gray-600">
              Partner with us to bring ethical AI healthcare to billions of underserved people worldwide
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Healthcare is a Human Right</h2>
              <p className="text-lg mb-4">
                Every 4 seconds, someone dies from lack of basic healthcare. Together, we can change this. 
                CIRISMedical represents a new paradigm: ethical AI working alongside local healers and 
                global physicians to deliver quality healthcare to everyone, everywhere.
              </p>
              <p className="text-lg">
                We need partners who share our vision of democratizing healthcare access through 
                responsible, physician-supervised AI technology.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Partnership Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-4">Government Partners</h3>
                <p className="mb-6 text-gray-600">
                  Integrate CIRISMedical into national health systems to expand rural healthcare access, 
                  reduce urban hospital burden, and provide 24/7 medical triage for all citizens.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    National health system integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Sovereign deployment options
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Population health analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Regulatory compliance support
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-4">NGO Partners</h3>
                <p className="mb-6 text-gray-600">
                  Deploy CIRISMedical in field operations to provide medical support in refugee camps, 
                  disaster zones, and remote communities where healthcare infrastructure is limited.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Field deployment support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Reduced licensing fees
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Training and capacity building
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Offline-capable deployments
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-bold mb-4">Medical Professionals</h3>
                <p className="mb-6 text-gray-600">
                  Supervise AI consultations remotely, multiply your impact by serving patients globally, 
                  and contribute to training the next generation of medical AI.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Remote supervision platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Flexible time commitment
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Continuing education credits
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Global impact opportunity
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-4">Healthcare Organizations</h3>
                <p className="mb-6 text-gray-600">
                  Extend your reach to underserved populations, optimize resource allocation, 
                  and participate in the largest healthcare democratization effort in history.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    White-label deployment options
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Integration with existing EMR/EHR
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Custom training on protocols
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Revenue sharing models
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The CIRIS Ecosystem</h2>
            <div className="bg-gray-100 rounded-2xl p-8">
              <p className="mb-8 text-lg text-center">
                CIRISMedical is part of the broader CIRIS initiative - building ethical, 
                autonomous AI systems that augment human capabilities while maintaining 
                human oversight and values.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="https://ciris.ai" target="_blank" rel="noopener noreferrer" 
                   className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-2 text-blue-600">CIRIS Main Project</h3>
                  <p className="text-gray-600 mb-4">
                    The core CIRIS framework for ethical AI development and deployment.
                  </p>
                  <span className="text-blue-500 hover:underline">Visit ciris.ai →</span>
                </a>

                <a href="https://agents.ciris.ai" target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-2 text-purple-600">Live Agent Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    See CIRIS agents in action with live Discord moderation pilots.
                  </p>
                  <span className="text-purple-500 hover:underline">Visit agents.ciris.ai →</span>
                </a>

                <a href="https://github.com/CIRISAI/CIRISAgent" target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-2 text-green-600">CIRISAgent Repository</h3>
                  <p className="text-gray-600 mb-4">
                    Open source core of the CIRIS autonomous agent framework.
                  </p>
                  <span className="text-green-500 hover:underline">View on GitHub →</span>
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Get Started</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">1. Initial Contact</h3>
                  <p className="text-gray-600 mb-4">
                    Reach out to discuss your needs and explore partnership models that align 
                    with your organization's mission and capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">2. Pilot Program</h3>
                  <p className="text-gray-600 mb-4">
                    Start with a small-scale pilot to demonstrate impact and refine the 
                    deployment model for your specific context.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">3. Training & Setup</h3>
                  <p className="text-gray-600 mb-4">
                    We provide comprehensive training for your team and help configure 
                    CIRISMedical to meet your regulatory and operational requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">4. Scale & Impact</h3>
                  <p className="text-gray-600 mb-4">
                    Expand deployment based on pilot results, with ongoing support and 
                    continuous improvement based on real-world outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Rural Pakistan Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Working with local health workers to provide 24/7 medical triage in villages 
                  where the nearest doctor is hours away. ESI-5 cases handled locally, 
                  ESI-1 cases immediately escalated for emergency transport.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Impact:</span> 10,000+ consultations, 
                  87% resolved without hospital visit
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Refugee Camp Support</h3>
                <p className="text-gray-700 mb-4">
                  Deployed with international NGOs to provide medical screening and triage 
                  in refugee camps, helping prioritize limited medical resources for those 
                  who need them most.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Impact:</span> 50,000+ screenings, 
                  3x improvement in resource allocation
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="mb-6 text-lg">
              Join us in democratizing healthcare access. Every partnership brings us closer 
              to a world where quality healthcare is available to everyone, everywhere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="mailto:info@ciris.ai" 
                 className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Contact Us: info@ciris.ai
              </a>
              <span className="text-white/80">or</span>
              <a href="https://github.com/CIRISAI/CIRISAgent" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-white/20 backdrop-blur text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
                Explore the Technology
              </a>
            </div>
          </div>

          <section className="mt-16">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                Important Medical Disclaimer
              </h3>
              <p className="text-gray-700">
                CIRISMedical requires physician supervision and is not a replacement for 
                professional medical care. All deployments must comply with local medical 
                regulations and maintain appropriate liability insurance. The CML license 
                ensures proper oversight and accountability in all medical applications.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}