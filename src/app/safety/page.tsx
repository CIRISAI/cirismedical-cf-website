"use client";
import Footer from "@/app/components/Footer";
import { FloatingNav } from "@/app/components/ui/floating/nav";
import navItems from "@/app/components/navitems";
import Image from "next/image";

export default function SafetyPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Safety First, Always
            </h1>
            <p className="text-xl text-gray-600">
              Multiple layers of protection ensure every medical decision prioritizes patient safety
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Safety Commitment</h2>
              <p className="text-lg">
                "First, do no harm" - this ancient medical principle guides every line of code, 
                every algorithm, and every decision in CIRISMedical. We've built the most 
                comprehensive safety system ever created for medical AI.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Five Layers of Safety</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3">1. Medical Prohibition</h3>
                <p className="text-gray-600">
                  Medical capabilities are completely blocked in public CIRISAgent. 
                  Only authorized medical deployments can access medical functions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
                <div className="text-3xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-bold mb-3">2. Physician Supervision</h3>
                <p className="text-gray-600">
                  Every deployment requires a licensed physician supervisor. 
                  High-risk decisions must be approved before implementation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3">3. Domain Routing</h3>
                <p className="text-gray-600">
                  Medical queries only go to medical-trained AI models. 
                  Complete separation from general AI prevents contamination.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">4. Wisdom-Based Deferral</h3>
                <p className="text-gray-600">
                  AI automatically defers uncertain or high-risk cases to humans. 
                  Never makes critical decisions autonomously.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">5. Audit & Compliance</h3>
                <p className="text-gray-600">
                  Every decision logged for 7 years per FDA requirements. 
                  Complete transparency and accountability.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Safety Architecture</h2>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">The ONE Line of Custom Code</h3>
                  <div className="bg-white rounded-lg p-4 font-mono text-sm mb-4">
                    WiseBus.PROHIBITED_CAPABILITIES = set()
                  </div>
                  <p className="text-gray-700">
                    CIRISMedical's entire custom logic is one line that clears medical prohibition 
                    only when all safety requirements are met. Everything else is configuration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Safety Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      NO_PUBLIC_DEPLOYMENT marker must exist
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Medical license file verified
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Supervisor credentials validated
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Liability acceptance confirmed
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Insurance coverage active
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">ESI Triage Protocol</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="mb-6 text-lg">
                CIRISMedical uses the Emergency Severity Index (ESI), the gold standard 
                for medical triage used in emergency departments worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 font-bold mr-4">ESI-1</span>
                  <div>
                    <strong>Immediate</strong> - Life-threatening condition requiring immediate intervention
                    <div className="text-sm text-gray-600 mt-1">AI immediately alerts all available medical personnel</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <span className="text-orange-600 font-bold mr-4">ESI-2</span>
                  <div>
                    <strong>Emergent</strong> - High risk situation, time-critical
                    <div className="text-sm text-gray-600 mt-1">Physician consultation required within 10 minutes</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-600 font-bold mr-4">ESI-3</span>
                  <div>
                    <strong>Urgent</strong> - Stable but requires multiple resources
                    <div className="text-sm text-gray-600 mt-1">Medical evaluation within 1 hour</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold mr-4">ESI-4</span>
                  <div>
                    <strong>Less Urgent</strong> - Stable, single resource needed
                    <div className="text-sm text-gray-600 mt-1">Can be safely managed by trained health workers</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold mr-4">ESI-5</span>
                  <div>
                    <strong>Non-Urgent</strong> - Stable, no immediate resources needed
                    <div className="text-sm text-gray-600 mt-1">Routine care or health education appropriate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tier 5 Stewardship</h2>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Maximum Human Oversight</h3>
              <p className="mb-6">
                CIRISMedical operates at Tier 5 - the highest level of human stewardship 
                in the CIRIS framework. This means:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    All decisions reviewable by humans
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Critical decisions require approval
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Continuous physician monitoring
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Automatic deferral of edge cases
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Human veto power always active
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Staged deployment with validation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Compliance & Standards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-bold mb-2">FDA 21 CFR Part 820</h3>
                <p className="text-sm text-gray-600">Quality System Regulation compliance</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-gray-600">Full patient data protection</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold mb-2">ISO 13485</h3>
                <p className="text-sm text-gray-600">Medical device quality management</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">⚕️</div>
                <h3 className="font-bold mb-2">IEC 62304</h3>
                <p className="text-sm text-gray-600">Medical device software lifecycle</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-bold mb-2">WHO Guidelines</h3>
                <p className="text-sm text-gray-600">Global health standards</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-bold mb-2">PMDC Verified</h3>
                <p className="text-sm text-gray-600">Pakistan Medical & Dental Council</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What CIRISMedical Will Never Do</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">❌</span>
                  <div>
                    <strong>Make autonomous medical decisions</strong>
                    <p className="text-gray-600">Every decision requires human review for critical cases</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">❌</span>
                  <div>
                    <strong>Replace physicians</strong>
                    <p className="text-gray-600">We extend medical reach, not replace medical professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">❌</span>
                  <div>
                    <strong>Prescribe medications independently</strong>
                    <p className="text-gray-600">All prescriptions require physician authorization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">❌</span>
                  <div>
                    <strong>Operate without supervision</strong>
                    <p className="text-gray-600">Continuous physician oversight is mandatory</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-4">❌</span>
                  <div>
                    <strong>Hide or alter medical information</strong>
                    <p className="text-gray-600">Complete transparency in all recommendations</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-16 p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Safety Through Design</h2>
            <p className="mb-6 text-lg">
              Every feature, every decision, every line of code prioritizes patient safety. 
              This isn't just our promise - it's built into the architecture.
            </p>
            <a href="/licensing" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn About CML License
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}