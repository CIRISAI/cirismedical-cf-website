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
            <h2 className="text-3xl font-bold mb-8 text-center">Mixed Modality Support 🚧</h2>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Status: In Development</strong> - Architecture supports modality extensions through 
                  wisdom providers. Text processing implemented, other modalities in progress.
                </p>
              </div>
              <p className="text-lg mb-6">
                Planned support for multiple data types to create complete health picture:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 mb-2">Text (✅) & Voice (🚧)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✅ Text symptom descriptions</li>
                    <li>🚧 Voice transcription</li>
                    <li>🚧 Multi-language processing</li>
                    <li>✅ Medical history intake</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">Sensor Data 🚧</h4>
                  <ul className="text-sm space-y-1">
                    <li>🚧 Vital signs monitoring</li>
                    <li>🚧 IoT medical devices</li>
                    <li>🚧 Wearable health trackers</li>
                    <li>🚧 Environmental conditions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-indigo-700 mb-2">Visual Input 🚧</h4>
                  <ul className="text-sm space-y-1">
                    <li>🚧 Wound assessment photos</li>
                    <li>🚧 Rash identification</li>
                    <li>🚧 Swelling evaluation</li>
                    <li>🚧 Simple diagnostic imaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Offline-First Architecture 🚧</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Status: In Development</strong> - Core architecture supports 4GB RAM constraint, 
                  offline capabilities being implemented for medical deployment.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Planned Edge Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Local model execution on 4GB RAM</li>
                    <li>• Sync when connection available</li>
                    <li>• Battery-aware processing</li>
                    <li>• Works on basic hardware</li>
                    <li>• Solar-powered device compatible</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Planned Caching</h3>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Privacy & Data Protection</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Data Sanitization</h3>
              <p className="mb-6">
                Log sanitization and adaptive filtering protect sensitive information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">✅ Implemented</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Log sanitization for emails/usernames</li>
                    <li>• Control character removal</li>
                    <li>• Adaptive content filtering</li>
                    <li>• Secrets management system</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">🚧 In Development</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Full PII auto-redaction</li>
                    <li>• Medical record anonymization</li>
                    <li>• Geographic data masking</li>
                    <li>• Temporal shifting for dates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Audit Trail ✅</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Audit Retention</h3>
                  <p className="mb-4">
                    Every decision is logged with configurable retention:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• 90-day default retention (pilot)</li>
                    <li>• Complete decision chain</li>
                    <li>• AI reasoning process</li>
                    <li>• Human interventions</li>
                    <li>• Deferral decisions</li>
                    <li>• Version history</li>
                    <li>• Model used for each decision</li>
                    <li className="text-orange-600">• 7-year retention planned for FDA compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Immutable Records ✅</h3>
                  <p className="mb-4">
                    Cryptographically signed audit trail ensures accountability:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Ed25519 digital signatures</li>
                    <li>• Hash chain verification</li>
                    <li>• Tamper-evident storage</li>
                    <li>• Graph-based persistence</li>
                    <li>• Export capabilities (JSONL, CSV, SQLite)</li>
                    <li>• Third-party verification support</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">DSAR & Data Rights ✅</h2>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Data Subject Access Requests - Implemented</h3>
              <p className="mb-6">
                GDPR-compliant data rights management system with API endpoints:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-3">Available Rights ✅</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Access personal data</li>
                    <li>• Request corrections</li>
                    <li>• Export data</li>
                    <li>• Delete requests</li>
                    <li>• 14-day response time (3 for urgent)</li>
                    <li>• Ticket tracking system</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Processing Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• API endpoint: /v1/dsr</li>
                    <li>• Unique ticket IDs</li>
                    <li>• Status tracking</li>
                    <li>• Email notifications</li>
                    <li>• Audit logging</li>
                    <li>• In-memory storage (pilot)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Transparency & Accountability ✅</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="mb-6 text-center">Public transparency feed implemented at /v1/transparency</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">✅ Public Feed (No Auth)</h4>
                  <p className="text-sm mb-2">Live anonymized statistics:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Total interactions processed</li>
                    <li>• Action breakdown (SPEAK, DEFER, REJECT)</li>
                    <li>• Deferral statistics</li>
                    <li>• Safety metrics</li>
                    <li>• Response times</li>
                    <li>• DSAR request counts</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">✅ System Metrics</h4>
                  <p className="text-sm mb-2">Real-time health monitoring:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Uptime percentage</li>
                    <li>• Average response time (ms)</li>
                    <li>• Active agents count</li>
                    <li>• Rate limit triggers</li>
                    <li>• Emergency shutdown attempts</li>
                    <li>• Harmful requests blocked</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">EHR & Healthcare Integrations ✅</h2>
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-8">
              <p className="text-lg mb-6 text-center">
                Production-ready adapters for healthcare system integration, enabling seamless clinical data access under physician supervision.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">EMR</span>
                    </div>
                    <h4 className="font-bold text-teal-700">OpenEMR ✅</h4>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• OAuth2 authentication flow</li>
                    <li>• Patient search & read</li>
                    <li>• Encounter management</li>
                    <li>• Appointment queries</li>
                    <li>• Practitioner lookup</li>
                    <li>• Interactive config wizard</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg font-bold">FHIR</span>
                    </div>
                    <h4 className="font-bold text-cyan-700">FHIR R4 ✅</h4>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• SMART on FHIR OAuth2</li>
                    <li>• Resource search & read</li>
                    <li>• Patient summaries</li>
                    <li>• Capability discovery</li>
                    <li>• Multi-resource support</li>
                    <li>• Server auto-detection</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-lg font-bold">HL7</span>
                    </div>
                    <h4 className="font-bold text-blue-700">HL7 v2.x ✅</h4>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• ADT message parsing</li>
                    <li>• Message creation</li>
                    <li>• Structure validation</li>
                    <li>• Field extraction</li>
                    <li>• ORM/ORU/MDM support</li>
                    <li>• Legacy system bridge</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white/50 rounded-lg p-4">
                <p className="text-sm text-center text-gray-600">
                  <strong>Iris Medical Support Agent</strong> — Tier 5 stewardship template providing clinical data integration
                  through these adapters, always under direct physician supervision. Never autonomous clinical decisions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Emergency Response Protocol 🚧</h2>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6">
                <p className="text-sm">
                  <strong>Status: In Development</strong> - ESI triage framework planned, 
                  emergency protocols being designed with medical advisory board.
                </p>
              </div>
              <h3 className="text-2xl font-bold mb-4">Planned Emergency Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">ESI Triage (Planned)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 5-level severity assessment</li>
                    <li>• Automatic escalation protocols</li>
                    <li>• Emergency personnel alerts</li>
                    <li>• Transport coordination</li>
                    <li>• Location services integration</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">First Aid Guidance (Planned)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Step-by-step instructions</li>
                    <li>• CPR guidance</li>
                    <li>• Bleeding control</li>
                    <li>• Stabilization protocols</li>
                    <li>• Communication maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cultural & Language Support 🚧</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Status: In Development</strong> - Working with local communities and medical 
                  anthropologists to ensure culturally appropriate care.
                </p>
              </div>
              <p className="text-lg mb-6">
                Planned features for culturally sensitive healthcare:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 mb-2">Language Support 🚧</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Multi-language interface</li>
                    <li>• Local dialect adaptation</li>
                    <li>• Medical term translation</li>
                    <li>• Voice input support</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">Cultural Integration 🚧</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Traditional medicine respect</li>
                    <li>• Local healer collaboration</li>
                    <li>• Cultural practice awareness</li>
                    <li>• Community engagement</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">Religious Sensitivity 🚧</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Dietary considerations</li>
                    <li>• Gender preferences</li>
                    <li>• Prayer timing awareness</li>
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