"use client";
import Footer from "@/app/components/Footer";
import { FloatingNav } from "@/app/components/ui/floating/nav";
import navItems from "@/app/components/navitems";

export default function TechnologyPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              The Technology
            </h1>
            <p className="text-xl text-gray-600">
              Domain-routed medical AI built on the proven CIRIS framework
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">One Line of Custom Code</h2>
              <p className="text-lg mb-4">
                CIRISMedical's entire medical implementation consists of a single line that clears 
                medical prohibition when all safety requirements are met. Everything else is pure 
                configuration using CIRISAgent's existing capabilities.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 font-mono">
                WiseBus.PROHIBITED_CAPABILITIES = set()  # The ONE line
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Wisdom-Based Deferral (WBD)</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-red-600">Automatic Escalation to Humans</h3>
              <p className="text-lg mb-6">
                CIRISMedical automatically defers uncertain or high-risk decisions to medical professionals. 
                The AI knows what it doesn't know and actively seeks human guidance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Immediate Deferral Triggers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• ESI-1 or ESI-2 triage levels</li>
                    <li>• Confidence below 80% threshold</li>
                    <li>• Conflicting medical indicators</li>
                    <li>• Pediatric or pregnancy cases</li>
                    <li>• Medication interactions detected</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Deferral Process</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• AI flags case for review</li>
                    <li>• Notifies on-call physician</li>
                    <li>• Provides full context and reasoning</li>
                    <li>• Waits for human decision</li>
                    <li>• Logs entire decision chain</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Mixed Modality Support</h2>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <p className="text-lg mb-6">
                CIRISMedical processes multiple data types simultaneously, creating a complete picture 
                of patient health from diverse inputs.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 mb-2">Text & Voice</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Patient symptom descriptions</li>
                    <li>• Voice transcription with accent support</li>
                    <li>• Multi-language processing</li>
                    <li>• Medical history intake</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">Sensor Data</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Vital signs monitoring</li>
                    <li>• IoT medical devices</li>
                    <li>• Wearable health trackers</li>
                    <li>• Environmental conditions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-indigo-700 mb-2">Visual Input</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Wound assessment photos</li>
                    <li>• Rash identification</li>
                    <li>• Swelling evaluation</li>
                    <li>• Simple diagnostic imaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Offline-First Architecture</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Edge Deployment</h3>
                  <p className="mb-4">
                    Designed to work in remote areas with limited or no internet connectivity:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Local model execution on 4GB RAM</li>
                    <li>• Sync when connection available</li>
                    <li>• Battery-aware processing</li>
                    <li>• Works on basic hardware</li>
                    <li>• Solar-powered device compatible</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Smart Caching</h3>
                  <p className="mb-4">
                    Intelligent local storage ensures critical data is always available:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical protocols cached locally</li>
                    <li>• Common medication database</li>
                    <li>• Triage decision trees</li>
                    <li>• Emergency procedures</li>
                    <li>• Regional disease patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Privacy & Redaction</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Automatic PII Protection</h3>
              <p className="mb-6">
                All patient data is automatically redacted and protected throughout the system:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">Real-time Redaction</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Names replaced with IDs</li>
                    <li>• Locations anonymized</li>
                    <li>• Dates shifted for privacy</li>
                    <li>• Contact info removed</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">Contextual Preservation</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Medical relevance retained</li>
                    <li>• Age ranges preserved</li>
                    <li>• Regional patterns maintained</li>
                    <li>• Temporal relationships kept</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">Audit-Safe Logging</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Redacted logs only</li>
                    <li>• Tokenized references</li>
                    <li>• Encrypted at rest</li>
                    <li>• Access controlled</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Audit Trail</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-600">7-Year Retention</h3>
                  <p className="mb-4">
                    Every medical decision is logged and retained per FDA requirements:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete decision chain</li>
                    <li>• AI reasoning process</li>
                    <li>• Human interventions</li>
                    <li>• Deferral decisions</li>
                    <li>• Outcome tracking</li>
                    <li>• Version history</li>
                    <li>• Model used for each decision</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Immutable Records</h3>
                  <p className="mb-4">
                    Cryptographically signed audit trail ensures accountability:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Ed25519 signatures</li>
                    <li>• Blockchain-ready format</li>
                    <li>• Tamper-evident storage</li>
                    <li>• Chain of custody</li>
                    <li>• Legal compliance</li>
                    <li>• Export for investigations</li>
                    <li>• Third-party verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">DSAR & Data Rights</h2>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Data Subject Access Requests</h3>
              <p className="mb-6">
                Full GDPR and HIPAA compliance with automated data rights management:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-3">Patient Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Access all personal data</li>
                    <li>• Request corrections</li>
                    <li>• Export medical records</li>
                    <li>• Delete non-medical data</li>
                    <li>• Consent management</li>
                    <li>• Processing restrictions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Automated Processing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 14-day response time</li>
                    <li>• Self-service portal</li>
                    <li>• Ticket tracking system</li>
                    <li>• Automated redaction</li>
                    <li>• Secure data delivery</li>
                    <li>• Audit of access requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Transparency & Accountability</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-700 mb-2">Public Feed</h4>
                  <p className="text-sm mb-2">Anonymized statistics available publicly:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Total consultations</li>
                    <li>• Deferral rates</li>
                    <li>• Response times</li>
                    <li>• Safety metrics</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">Professional Dashboard</h4>
                  <p className="text-sm mb-2">Physicians can monitor:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Active cases</li>
                    <li>• Pending deferrals</li>
                    <li>• Quality metrics</li>
                    <li>• Pattern analysis</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">Regulatory Access</h4>
                  <p className="text-sm mb-2">Compliance officers can review:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Full audit trails</li>
                    <li>• Incident reports</li>
                    <li>• Safety violations</li>
                    <li>• Compliance status</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Emergency Response Protocol</h2>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Immediate Action for Critical Cases</h3>
              <p className="text-lg mb-6">
                When seconds count, CIRISMedical activates emergency protocols instantly:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">ESI-1 Response</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Alert ALL available medical personnel</li>
                    <li>• Activate emergency transport</li>
                    <li>• Provide step-by-step first aid</li>
                    <li>• Maintain open communication channel</li>
                    <li>• GPS location to emergency services</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">Stabilization Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Real-time vital sign monitoring</li>
                    <li>• CPR guidance with audio cues</li>
                    <li>• Bleeding control instructions</li>
                    <li>• Shock prevention protocols</li>
                    <li>• Airway management guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cultural & Language Support</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg mb-6">
                Healthcare that respects and incorporates local knowledge and languages:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 mb-2">100+ Languages</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Real-time translation</li>
                    <li>• Local dialect support</li>
                    <li>• Medical terminology mapping</li>
                    <li>• Voice and text input</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">Traditional Medicine</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Respect for local practices</li>
                    <li>• Herb interaction checking</li>
                    <li>• Cultural sensitivity</li>
                    <li>• Healer collaboration</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">Religious Considerations</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Dietary restrictions</li>
                    <li>• Gender preferences</li>
                    <li>• Prayer timing respect</li>
                    <li>• End-of-life customs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Built for Scale, Designed for Safety</h2>
            <p className="mb-6 text-lg">
              CIRISMedical combines proven AI technology with rigorous safety protocols, 
              creating a medical AI system that's both powerful and responsible.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/safety" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Explore Safety Architecture
              </a>
              <a href="/partnership" className="inline-block bg-white/20 backdrop-blur text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}