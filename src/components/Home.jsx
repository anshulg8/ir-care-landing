import React from 'react';
import WhyChooseUsSection from './WhyChooseUsSection';
import FeaturedDoctorsSection from './FeaturedDoctorsSection';
import DiseaseIconsGrid from './DiseaseIconsGrid';
import DiseaseSearch from './DiseaseSearch';
import HowItWorks from './HowItWorks';
import ProcedureSection from './ProcedureSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import SwiperSection from './SwiperSection';
import InsurancePartners from './InsurancePartners';
import ContactFloatingButton from './ContactFloatingButton';
import CentersCarousel from './CentersCarousel';
import { centers, generalFaqs } from '../data.jsx';

const Home = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            <SwiperSection />
            <DiseaseIconsGrid />
            <DiseaseSearch />
            <ContactFloatingButton />
            <FeaturedDoctorsSection />
            <CentersCarousel centers={centers} />
            <WhyChooseUsSection />
            <HowItWorks />
            <ProcedureSection />
            <TestimonialSection />
            <FAQSection faqs={generalFaqs} />

            {/* Comparison Modal - Add near Procedures section */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden" id="comparisonModal">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-900" id="modalHeader">
                            PAE vs Traditional TURP
                        </h3>
                        <button onClick="closeModal()" className="text-gray-500 hover:text-gray-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                        {/* Hero Comparison */}
                        <div className="bg-teal-50 rounded-xl p-6 mb-8">
                            <h4 className="text-xl font-bold text-teal-800 mb-2" id="comparisonTagline">
                                Avoid TURP - Risky Prostate Surgery
                            </h4>
                            <p className="text-teal-600" id="comparisonSubheader">
                                PAE: Higher success rate than traditional surgery | FDA-approved since 2018
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 text-left w-1/3 font-medium text-gray-700">Parameter</th>
                                        <th className="p-4 text-center font-medium text-teal-600" id="irProcedureName">PAE</th>
                                        <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Traditional TURP</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200" id="comparisonTableBody">
                                    {/* Rows will be inserted by JS */}
                                </tbody>
                            </table>
                        </div>

                        {/* Doctor Testimonial */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start">
                                <svg className="h-8 w-8 text-teal-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                <div>
                                    <p className="italic text-gray-700 mb-3" id="doctorTestimonial">
                                        "In my 12 years as a urologist, PAE has been revolutionary - preserving sexual function while solving urinary obstruction."
                                    </p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-3">
                                            AK
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900" id="doctorName">Dr. Arvind Kulkarni</p>
                                            <p className="text-sm text-gray-600" id="doctorCredentials">MS (Uro), Lilavati Hospital</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="sticky bottom-0 bg-white border-t p-6 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-600 mb-4 sm:mb-0">
                            <span className="font-medium" id="successRate">92%</span> of patients choose IR after seeing this comparison
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick="closeModal()"
                                className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-lg font-medium"
                            >
                                Close
                            </button>
                            <button
                                onClick="bookConsultation()"
                                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium"
                            >
                                Book Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <InsurancePartners />
        </div >
    );
};

export default Home;