"use client";
import Footer from "@/app/components/Footer";
import { FloatingNav } from "@/app/components/ui/floating/nav";
import navItems from "@/app/components/navitems";

export default function ModelsPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Medical LLM Options
            </h1>
            <p className="text-xl text-gray-600">
              Two viable paths for CIRIS-compliant medical AI deployment
            </p>
          </div>

          {/* Requirements Overview */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">CIRIS Requirements</h2>
              <p className="text-lg mb-6">
                Medical LLMs must meet strict requirements for clinical deployment under the CIRIS framework.
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">32K+</div>
                  <div className="text-sm">Context Window</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">JSON</div>
                  <div className="text-sm">Structured Output</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">12-70</div>
                  <div className="text-sm">Tool Calls/Request</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm">Provider Fallback</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">HIPAA</div>
                  <div className="text-sm">Compliance Ready</div>
                </div>
              </div>
            </div>
          </section>

          {/* Model Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Viable Medical Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Meditron3 - Recommended */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden ring-2 ring-blue-500">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Meditron3-70B</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Recommended</span>
                  </div>
                  <p className="mt-2 text-blue-100">Llama 3.1 medical fine-tune (EPFL/Yale)</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Context</div>
                      <div className="text-xl font-bold text-blue-600">128K tokens</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Parameters</div>
                      <div className="text-xl font-bold text-blue-600">70B</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Structured Output</div>
                      <div className="text-xl font-bold text-blue-600">vLLM</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Est. Cost</div>
                      <div className="text-xl font-bold text-blue-600">~$0.20/M</div>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">Performance</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>Outperforms GPT-4, MedPaLM-2, Meditron 1/2</li>
                    <li>128K context (full CIRIS compliance)</li>
                    <li>Humanitarian & low-resource focus</li>
                    <li>Released March 2025 (latest)</li>
                  </ul>
                  <h4 className="font-bold mb-2">Model ID</h4>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">OpenMeditron/Meditron3-70B</code>
                </div>
              </div>

              {/* OpenBioLLM */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">OpenBioLLM-70B</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Open Source</span>
                  </div>
                  <p className="mt-2 text-teal-100">Llama 3 biomedical fine-tune (Saama)</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Context</div>
                      <div className="text-xl font-bold text-teal-600">32K tokens</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Parameters</div>
                      <div className="text-xl font-bold text-teal-600">70B</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Structured Output</div>
                      <div className="text-xl font-bold text-teal-600">vLLM</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Est. Cost</div>
                      <div className="text-xl font-bold text-teal-600">~$0.20/M</div>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">Performance</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>86% avg across 9 medical datasets</li>
                    <li>Strong biomedical NER/QA</li>
                    <li>Available on Azure AI Foundry</li>
                  </ul>
                  <h4 className="font-bold mb-2">Limitation</h4>
                  <p className="text-sm text-gray-600">32K context (95% of requests)</p>
                </div>
              </div>

              {/* GPT-5.2 Healthcare */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">GPT-5.2 Healthcare</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Proprietary</span>
                  </div>
                  <p className="mt-2 text-purple-100">OpenAI HIPAA-compliant API</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Context</div>
                      <div className="text-xl font-bold text-purple-600">128K+ tokens</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">BAA</div>
                      <div className="text-xl font-bold text-purple-600">Available</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Structured Output</div>
                      <div className="text-xl font-bold text-purple-600">Native</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Est. Cost</div>
                      <div className="text-xl font-bold text-purple-600">~$15/M</div>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">Performance</h4>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>Best on HealthBench</li>
                    <li>Native JSON Schema</li>
                    <li>Zero-retention PHI endpoints</li>
                  </ul>
                  <h4 className="font-bold mb-2">Limitation</h4>
                  <p className="text-sm text-gray-600">~75x more expensive</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Not Others */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Other Medical LLMs Don't Qualify</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Model</th>
                      <th className="text-center py-3 px-4">Context</th>
                      <th className="text-center py-3 px-4">32K Req</th>
                      <th className="text-center py-3 px-4">Structured</th>
                      <th className="text-center py-3 px-4">Multi-Provider</th>
                      <th className="text-left py-3 px-4">Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">Me-LLaMA 70B</td>
                      <td className="text-center py-3 px-4">4K</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-yellow-600">~</td>
                      <td className="text-center py-3 px-4 text-green-600">*</td>
                      <td className="py-3 px-4 text-red-600">Context too small (avg request 19K)</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">Meditron 1/2 (Llama 2)</td>
                      <td className="text-center py-3 px-4">4K</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-yellow-600">~</td>
                      <td className="text-center py-3 px-4 text-green-600">*</td>
                      <td className="py-3 px-4 text-red-600">Superseded by Meditron3 (Llama 3.1)</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">Google MedLM</td>
                      <td className="text-center py-3 px-4">?</td>
                      <td className="text-center py-3 px-4 text-yellow-600">?</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="py-3 px-4 text-red-600">Vertex-only, no structured output</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">Hippocratic Polaris</td>
                      <td className="text-center py-3 px-4">-</td>
                      <td className="text-center py-3 px-4 text-yellow-600">-</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="py-3 px-4 text-red-600">Proprietary, voice-only focus</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">BioGPT</td>
                      <td className="text-center py-3 px-4">~1K</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="text-center py-3 px-4 text-red-600">X</td>
                      <td className="py-3 px-4 text-red-600">Text mining focus, tiny context</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Self-hostable provides multi-provider via different cloud deployments
              </p>
            </div>
          </section>

          {/* Hosting Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Deployment Options</h2>

            {/* Self-Hosted */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Option 1: Self-Hosted (OpenBioLLM-70B)</h3>
              <p className="mb-6">
                Maximum control, lowest cost per token, HIPAA compliance under your infrastructure.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3 text-teal-400">Hardware Requirements</h4>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <div className="font-mono text-sm mb-2">Recommended: 2x H100 80GB SXM</div>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>Output: ~800-1000 tok/s</li>
                      <li>Prefill: ~25-30K tok/s</li>
                      <li>VRAM: 160GB total</li>
                      <li>Est. cost: ~$6-8/hr cloud</li>
                    </ul>
                  </div>
                  <h4 className="font-bold mb-3 text-teal-400">Budget Alternative</h4>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-mono text-sm mb-2">4x A100 80GB or 4x A6000 48GB</div>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>Output: ~450-1100 tok/s</li>
                      <li>Est. cost: ~$4-8/hr cloud</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-teal-400">vLLM Configuration (Meditron3)</h4>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`vllm serve OpenMeditron/Meditron3-70B \\
  --tensor-parallel-size 2 \\
  --max-model-len 131072 \\
  --gpu-memory-utilization 0.95 \\
  --enable-chunked-prefill \\
  --quantization fp8 \\
  --guided-decoding-backend outlines`}</pre>
                  </div>
                  <h4 className="font-bold mt-4 mb-3 text-teal-400">Cloud GPU Providers</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white/10 rounded px-3 py-2">Lambda Labs ~$5.50/hr</div>
                    <div className="bg-white/10 rounded px-3 py-2">CoreWeave ~$5.00/hr</div>
                    <div className="bg-white/10 rounded px-3 py-2">RunPod ~$6.00/hr</div>
                    <div className="bg-white/10 rounded px-3 py-2">AWS p5 ~$8.00/hr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managed Providers */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Azure */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">Az</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Azure AI Foundry</h3>
                    <p className="text-sm text-gray-500">OpenBioLLM-70B hosted</p>
                  </div>
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    OpenBioLLM-70B in model catalog
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    HIPAA BAA available
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    Managed infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">~</span>
                    Pay-per-token pricing
                  </li>
                </ul>
                <a href="https://ai.azure.com/catalog/models/aaditya-llama3-openbiollm-70b"
                   className="text-blue-600 text-sm hover:underline">
                  View in Azure AI Catalog
                </a>
              </div>

              {/* OpenAI */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">OAI</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">OpenAI Healthcare API</h3>
                    <p className="text-sm text-gray-500">GPT-5.2 with BAA</p>
                  </div>
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    128K+ context window
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    Native structured outputs
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">*</span>
                    BAA for HIPAA compliance
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">!</span>
                    ~$15.75/M tokens (75x open source)
                  </li>
                </ul>
                <a href="https://openai.com/index/openai-for-healthcare/"
                   className="text-blue-600 text-sm hover:underline">
                  OpenAI for Healthcare
                </a>
              </div>
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cost Comparison</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-center mb-6 text-gray-600">
                Based on typical CIRISMedical usage: ~19K input tokens, ~330 output tokens per request
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Deployment</th>
                      <th className="text-center py-3 px-4">Model</th>
                      <th className="text-right py-3 px-4">Per 1M Tokens</th>
                      <th className="text-right py-3 px-4">Monthly (100K req)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-blue-50">
                      <td className="py-3 px-4 font-medium">Self-hosted (2x H100)</td>
                      <td className="text-center py-3 px-4">Meditron3-70B</td>
                      <td className="text-right py-3 px-4">~$0.20</td>
                      <td className="text-right py-3 px-4 text-blue-600 font-bold">~$400 + infra</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-3 px-4 font-medium">Self-hosted (2x H100)</td>
                      <td className="text-center py-3 px-4">OpenBioLLM-70B</td>
                      <td className="text-right py-3 px-4">~$0.20</td>
                      <td className="text-right py-3 px-4 text-green-600 font-bold">~$400 + infra</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Azure AI Foundry</td>
                      <td className="text-center py-3 px-4">OpenBioLLM-70B</td>
                      <td className="text-right py-3 px-4">~$1-2</td>
                      <td className="text-right py-3 px-4">~$2,000</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="py-3 px-4 font-medium">OpenAI Healthcare API</td>
                      <td className="text-center py-3 px-4">GPT-5.2</td>
                      <td className="text-right py-3 px-4">~$15.75</td>
                      <td className="text-right py-3 px-4 text-red-600 font-bold">~$30,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center">
                Self-hosted infrastructure cost (~$4,500/mo for 2x H100) included in monthly estimate.
                Meditron3 recommended for 128K context; OpenBioLLM for 32K fallback.
              </p>
            </div>
          </section>

          {/* Recommendation */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Our Recommendation</h2>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                For CIRISMedical deployments, we recommend <strong>self-hosted Meditron3-70B</strong> as the primary
                model with <strong>OpenBioLLM-70B on Azure</strong> as a fallback provider. This provides full 128K
                context compliance, state-of-the-art medical performance, and multi-provider redundancy at ~$0.20/M tokens.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://huggingface.co/OpenMeditron/Meditron3-70B" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Meditron3 on HuggingFace
                </a>
                <a href="/partnership" className="inline-block bg-white/20 backdrop-blur text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
                  Partner With Us
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
