import React from 'react';
import SurgeryComparisonTable from './SurgeryComparisonTable';
import IrTreatableConditions from './IrTreatableConditions';

const InterventionalRadiology = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                    What is <span className="text-teal-600">Interventional Radiology?</span>
                </h1>

                <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">
                    {/* Intro */}
                    <div>
                        <p className="text-lg">
                            <strong className="text-gray-900">Interventional Radiology (IR)</strong> is a medical subspecialty that uses real-time
                            imaging guidance—such as fluoroscopy, ultrasound, CT, and MRI—to perform procedures through tiny incisions or
                            natural body openings. This approach minimizes trauma and often eliminates the need for open surgery.
                        </p>
                    </div>

                    {/* Imaging Modalities */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Imaging Modalities Used</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Ultrasound:</strong> Real-time imaging, commonly used for biopsies and drainages.</li>
                            <li><strong>Fluoroscopy:</strong> Continuous X-ray guidance for vascular or GI procedures.</li>
                            <li><strong>CT:</strong> High-resolution cross-sectional imaging for precise targeting.</li>
                            <li><strong>MRI:</strong> Ideal for soft tissue or neurological guidance.</li>
                        </ul>
                    </div>

                    {/* How it Works */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">How the Procedure Works</h2>
                        <p>
                            Using image guidance, a radiologist inserts a catheter or needle through a small incision—usually in the groin or arm—
                            and navigates it to the target area. Treatments may include:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Blocking blood vessels (embolization)</li>
                            <li>Draining abscesses or cysts</li>
                            <li>Placing stents or removing clots</li>
                            <li>Destroying tumors using heat or cold (ablation)</li>
                            <li>Delivering drugs directly to tumors (chemoembolization)</li>
                        </ul>
                    </div>

                    {/* Conditions */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Conditions Treated</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Uterine fibroids</li>
                                <li>Spinal compression fractures</li>
                                <li>Liver tumors</li>
                                <li>Deep vein thrombosis (DVT)</li>
                            </ul>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Benign Prostatic Hyperplasia (BPH)</li>
                                <li>Peripheral artery disease (PAD)</li>
                                <li>Kidney/bile duct obstructions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Patient Prep */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Patient Preparation</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Blood tests for clotting and kidney function</li>
                            <li>Fasting for 4–6 hours before the procedure</li>
                            <li>Discontinue blood thinners if instructed</li>
                            <li>Review prior scans and medical history</li>
                        </ul>
                    </div>

                    {/* Aftercare */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Post-Procedural Care</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Keep access site clean and dry</li>
                            <li>Limit heavy activity for 24–48 hours</li>
                            <li>Monitor for fever, swelling, or bleeding</li>
                            <li>Attend follow-up as advised</li>
                        </ul>
                    </div>

                    {/* Why IR? */}
                    <div className="bg-white shadow-sm border border-teal-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-teal-700 mb-4">Why Choose Interventional Radiology?</h2>
                        <p>
                            IR blends advanced imaging with minimally invasive techniques to treat serious conditions without major surgery.
                            It’s ideal for high-risk patients and often offers quicker recovery, fewer complications, and improved outcomes.
                        </p>
                    </div>

                    <SurgeryComparisonTable />
                    <IrTreatableConditions />

                    {/* CTA */}
                    <div className="mt-10 text-center">
                        <a
                            href="/contact"
                            className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition"
                        >
                            Talk to an IR Specialist
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterventionalRadiology;
