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
            <h2 className="text-3xl font-bold mb-8 text-center">How CIRISMedical Works</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  CIRISMedical is a modular extension of CIRISAgent that leverages existing 
                  domain routing capabilities to provide medical AI services. No core modifications 
                  were needed - just configuration and modules.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Designed for This</h3>
                <p className="mb-6">
                  CIRIS was architected from day one to enable specialized domain extensions like medical AI 
                  through its foundational capabilities:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Domain-aware LLM routing built into LLMBus by design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Metadata-based service filtering in ServiceRegistry from the start
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Capability-based WiseAuthority routing as a core feature
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Module loading system with manifest.json as the extension mechanism
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">CIRIS Framework</h3>
                <p className="mb-4 text-gray-600">
                  The Covenant-Integrated Responsible Intelligence System provides the ethical 
                  AI foundation with:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 21 core services with strict type safety</li>
                  <li>• 6 message buses for scalable routing</li>
                  <li>• No Dicts, No Strings, No Kings philosophy</li>
                  <li>• 4GB RAM, offline-capable design</li>
                  <li>• Zero attack surface architecture</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Domain Routing</h3>
                <p className="mb-4 text-gray-600">
                  Medical queries are automatically routed to specialized models through:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• LLMBus with domain parameter support</li>
                  <li>• Llama-3-70B-Medical via together.ai</li>
                  <li>• Complete isolation from general AI</li>
                  <li>• Metadata-driven service selection</li>
                  <li>• No code changes to routing logic</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Module System</h3>
                <p className="mb-4 text-gray-600">
                  CIRISMedical consists of lightweight modules:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• medical_enabler - Safety authorization</li>
                  <li>• medical_llm - Domain-specific LLM</li>
                  <li>• medical_triage_wa - ESI protocol</li>
                  <li>• Each module has manifest.json config</li>
                  <li>• Auto-registration on startup</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Wisdom Extension</h3>
                <p className="mb-4 text-gray-600">
                  The WiseAuthority system provides multi-source guidance:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Capability-based provider routing</li>
                  <li>• Medical domain prohibition in core</li>
                  <li>• Wisdom-Based Deferral (WBD)</li>
                  <li>• Liability disclaimers required</li>
                  <li>• Professional supervision flags</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Implementation</h2>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Service Architecture</h3>
                  <div className="bg-white rounded-lg p-4 mb-4 font-mono text-sm">
                    <pre>{`# Module manifest.json
{
  "services": [{
    "type": "LLM",
    "metadata": {
      "domain": "medical",
      "model": "Llama-3-70B-Medical",
      "provider": "together.ai"
    }
  }]
}`}</pre>
                  </div>
                  <p className="text-sm text-gray-600">
                    Services register with domain metadata, enabling automatic routing 
                    without custom code.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Domain Routing</h3>
                  <div className="bg-white rounded-lg p-4 mb-4 font-mono text-sm">
                    <pre>{`# Automatic domain routing
await llm_bus.call_llm_structured(
    messages=messages,
    response_model=MedicalResponse,
    domain="medical"  # Routes to medical LLM
)`}</pre>
                  </div>
                  <p className="text-sm text-gray-600">
                    The existing LLMBus automatically routes requests with domain="medical" 
                    to the appropriate specialized model.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Message Bus Architecture</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="mb-6">
                CIRIS uses 6 message buses to enable scalable, multi-provider services:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">CommunicationBus</h4>
                  <p className="text-sm">Multiple adapters (Discord, API, CLI)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 mb-2">LLMBus</h4>
                  <p className="text-sm">Multiple providers with domain routing</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">WiseBus</h4>
                  <p className="text-sm">Multiple wisdom sources with capabilities</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-700 mb-2">MemoryBus</h4>
                  <p className="text-sm">Multiple graph backends (Neo4j, ArangoDB)</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-700 mb-2">ToolBus</h4>
                  <p className="text-sm">Multiple tool providers from adapters</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-700 mb-2">RuntimeControlBus</h4>
                  <p className="text-sm">Multiple control interfaces</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Type Safety & Quality</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">No Dicts, No Strings, No Kings</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3">No Dicts</h4>
                  <p className="text-sm text-gray-600">
                    Zero Dict[str, Any] in production code. All data uses Pydantic models 
                    with full validation and type safety.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3">No Strings</h4>
                  <p className="text-sm text-gray-600">
                    Use enums and typed constants instead of magic strings. Every value 
                    has meaning and validation.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3">No Kings</h4>
                  <p className="text-sm text-gray-600">
                    No special cases or bypass patterns. Every service follows the same 
                    rules and protocols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Deployment Architecture</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">CIRISManager Configuration</h3>
              <p className="mb-6">
                Deployment uses CIRISManager with Tier 5 maximum stewardship:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Deployment Settings</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Tier 5 maximum human oversight</li>
                    <li>• Wisdom-Based Deferral (WBD) active</li>
                    <li>• 7-year audit retention (FDA requirement)</li>
                    <li>• Automatic rollback on errors</li>
                    <li>• Canary deployment strategy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Resource Constraints</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 4GB RAM maximum usage</li>
                    <li>• Offline-capable operation</li>
                    <li>• Edge deployment ready</li>
                    <li>• Low bandwidth optimization</li>
                    <li>• Battery-aware processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Testing & Validation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-700 mb-3">Test Coverage</h3>
                <p className="text-gray-700 mb-4">
                  92% test coverage achieved across all medical modules:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Unit tests: 45 tests</li>
                  <li>• Integration tests: 15 tests</li>
                  <li>• Domain routing validation</li>
                  <li>• Safety check verification</li>
                  <li>• Deferral logic testing</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-700 mb-3">Continuous Integration</h3>
                <p className="text-gray-700 mb-4">
                  Docker-based CI/CD pipeline ensures quality:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Automated testing on commit</li>
                  <li>• Type checking with mypy</li>
                  <li>• Code formatting with black</li>
                  <li>• Security scanning</li>
                  <li>• Performance benchmarking</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Open Source Foundation</h2>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">CIRISAgent Core</h3>
              <p className="mb-6">
                The non-medical foundation is fully open source under the CIRIS Covenant:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Public Repository</h4>
                  <p className="text-sm mb-3">
                    GitHub: CIRISAI/CIRISAgent
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• 21 core services</li>
                    <li>• 1,180+ tests</li>
                    <li>• Full documentation</li>
                    <li>• Example implementations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Live Deployments</h4>
                  <p className="text-sm mb-3">
                    Production systems running CIRISAgent:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• agents.ciris.ai - Discord moderation</li>
                    <li>• API endpoints for integrations</li>
                    <li>• Public transparency feeds</li>
                    <li>• Community deployments</li>
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