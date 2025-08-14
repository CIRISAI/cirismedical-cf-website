"use client";
import Footer from "@/app/components/Footer";
import { FloatingNav } from "@/app/components/ui/floating/nav";
import navItems from "@/app/components/navitems";
import Image from "next/image";
import Link from "next/link";

export default function LicensingPage() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Why CIRISMedical Uses CML
            </h1>
            <p className="text-xl text-gray-600">
              CIRIS Medical License - Protecting Patients, Practitioners, and Progress
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <section className="mb-12 rounded-lg bg-red-50 border border-red-200 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                ⚠️ Critical: Medical Software Cannot Be Fully Open Source
              </h2>
              <p className="text-red-800">
                Unlike general AI, medical AI carries life-or-death responsibility. 
                Open source licenses like MIT or Apache cannot adequately address medical liability, 
                FDA compliance, or patient safety requirements. This is why we created the 
                CIRIS Medical License (CML).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">The Liability Challenge</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Why Standard Open Source Fails for Medical AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>No Liability Protection:</strong> MIT/Apache licenses disclaim all liability - 
                      impossible for medical software where errors can be fatal
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>No Supervision Requirements:</strong> Anyone could deploy it without 
                      physician oversight, creating massive risk
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>No Compliance Tracking:</strong> FDA requires 7-year audit trails - 
                      open source can't enforce this
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>No Usage Restrictions:</strong> Could be used for unauthorized 
                      autonomous diagnosis or prescription
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">The CML Solution</h2>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">CIRIS Medical License Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <div>
                      <strong>Mandatory Physician Supervision:</strong> Cannot operate without 
                      verified medical professional oversight
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <div>
                      <strong>Liability Assignment:</strong> Clear chain of responsibility from 
                      AI to supervisor to medical facility
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <div>
                      <strong>Audit Requirements:</strong> Enforces FDA-compliant logging and 
                      7-year retention
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <div>
                      <strong>Usage Restrictions:</strong> Prohibits autonomous diagnosis, 
                      requires human verification for critical decisions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <div>
                      <strong>Insurance Requirements:</strong> Deployments must have medical 
                      malpractice coverage
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">What This Means</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">✅ You CAN:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Deploy with proper medical supervision</li>
                    <li>• Use in clinical settings with oversight</li>
                    <li>• Modify for your medical facility's needs</li>
                    <li>• Integrate with existing medical systems</li>
                    <li>• Train local health workers to use it</li>
                    <li>• Deploy in humanitarian missions</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">❌ You CANNOT:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Deploy without physician supervision</li>
                    <li>• Use for autonomous diagnosis</li>
                    <li>• Remove safety checks or audit logs</li>
                    <li>• Claim it replaces doctors</li>
                    <li>• Use without liability insurance</li>
                    <li>• Deploy without regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">The Bigger Picture</h2>
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="mb-4">
                  <strong>CIRISAgent remains fully open source</strong> under the CIRIS Covenant 
                  for general AI applications. The medical capabilities are completely separated 
                  into CIRISMedical with CML licensing.
                </p>
                <p className="mb-4">
                  This separation ensures:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• General AI remains freely available to all</li>
                  <li>• Medical AI has proper safeguards</li>
                  <li>• Clear liability boundaries</li>
                  <li>• No medical code in the open source version</li>
                </ul>
                <p className="font-semibold">
                  We believe healthcare is a human right, but patient safety must come first. 
                  The CML ensures CIRISMedical saves lives without risking them.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Comparison Table</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left">Aspect</th>
                      <th className="px-6 py-3 text-left">Open Source (MIT/Apache)</th>
                      <th className="px-6 py-3 text-left">CML (CIRIS Medical License)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Liability</td>
                      <td className="px-6 py-4 text-red-600">Completely disclaimed</td>
                      <td className="px-6 py-4 text-green-600">Assigned to supervisor/facility</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Supervision</td>
                      <td className="px-6 py-4 text-red-600">Optional</td>
                      <td className="px-6 py-4 text-green-600">Mandatory physician oversight</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">FDA Compliance</td>
                      <td className="px-6 py-4 text-red-600">Not addressed</td>
                      <td className="px-6 py-4 text-green-600">Built-in requirements</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Audit Trail</td>
                      <td className="px-6 py-4 text-red-600">Optional</td>
                      <td className="px-6 py-4 text-green-600">7-year retention required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Insurance</td>
                      <td className="px-6 py-4 text-red-600">Not required</td>
                      <td className="px-6 py-4 text-green-600">Malpractice coverage required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Deployment</td>
                      <td className="px-6 py-4 text-red-600">Anyone, anywhere</td>
                      <td className="px-6 py-4 text-green-600">Licensed medical facilities only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Modifications</td>
                      <td className="px-6 py-4 text-blue-600">Unrestricted</td>
                      <td className="px-6 py-4 text-blue-600">Allowed with safety preservation</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Commercial Use</td>
                      <td className="px-6 py-4 text-blue-600">Allowed</td>
                      <td className="px-6 py-4 text-blue-600">Allowed with compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">For NGOs and Humanitarian Use</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="mb-4">
                  <strong>Special provisions exist for humanitarian deployments:</strong>
                </p>
                <ul className="space-y-2">
                  <li>• Reduced licensing fees for qualified NGOs</li>
                  <li>• Expedited approval for crisis response</li>
                  <li>• Support for training local health workers</li>
                  <li>• Partnership programs with medical schools</li>
                </ul>
                <p className="mt-4">
                  Contact <a href="mailto:humanitarian@cirismedical.ai" className="text-blue-600 underline">
                    humanitarian@cirismedical.ai
                  </a> for humanitarian licensing.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Legal Framework</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold mb-2">International Compliance</h3>
                  <p>CML is designed to meet requirements in multiple jurisdictions including 
                  FDA (USA), CE marking (EU), PMDC (Pakistan), and WHO guidelines.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold mb-2">Liability Chain</h3>
                  <p>1. AI provides recommendation → 2. Physician reviews → 3. Medical facility implements → 
                  4. Clear accountability at each step</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold mb-2">Insurance Requirements</h3>
                  <p>Deployments must maintain medical malpractice insurance appropriate to their 
                  jurisdiction and scope of practice.</p>
                </div>
              </div>
            </section>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Deploy Responsibly?</h2>
              <p className="mb-6 text-lg">
                Join medical facilities worldwide in bringing AI-assisted healthcare to those who need it most.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/partnership" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Apply for License
                </Link>
                <Link href="/docs/cml" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  Read Full CML
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}