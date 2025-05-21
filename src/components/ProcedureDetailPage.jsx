import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoogleFormSubmit from './GoogleFormSubmit';
import { proceduresMap } from '../data.jsx';
import FAQSection from './FAQSection.jsx';

const ProcedureDetailPage = () => {
    const { procedureId } = useParams();
    const [isMobile, setIsMobile] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const procedures = proceduresMap;

    const procedure = procedures[procedureId];

    if (!procedure) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Procedure Not Found</h1>
                        <Link to="/procedures" className="text-teal-600 hover:text-teal-700">
                            Return to Procedures
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/procedures" className="text-teal-600 hover:text-teal-700 flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Procedures
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{procedure.name}</h1>

                        <p className="text-xl text-gray-600 mb-4">
                            {isMobile && !showFullDescription ? (
                                <>
                                    {procedure.description.slice(0, 120)}...
                                    <button
                                        onClick={() => setShowFullDescription(true)}
                                        className="ml-1 text-teal-600 font-medium underline inline"
                                    >
                                        See more
                                    </button>
                                </>
                            ) : (
                                procedure.description
                            )}
                        </p>

                        {/* <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6"> */}
                        <GoogleFormSubmit procedure={procedure.name} />

                        {/* </div> */}

                        {/* Comparison Table */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison with Traditional Surgery</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Parameter
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider">
                                                IR Procedure
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Traditional Surgery
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {procedure.comparison.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {item.parameter}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600">
                                                    {item.ir}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {item.traditional}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                                <ul className="space-y-3">
                                    {procedure.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-6 w-6 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Process</h2>
                                <ol className="space-y-3">
                                    {procedure.process.map((step, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mr-2">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-700">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery</h2>
                                <p className="text-gray-700">{procedure.recovery}</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Potential Risks</h2>
                                <ul className="space-y-3">
                                    {procedure.risks.map((risk, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-6 w-6 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span className="text-gray-700">{risk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {procedure.faqs?.length > 0 && (
                            <div className="mt-16">
                                <FAQSection faqs={procedure.faqs} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcedureDetailPage;
