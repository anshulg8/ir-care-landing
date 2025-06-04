import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoogleFormSubmit from './GoogleFormSubmit';
import { proceduresMap } from '../data.jsx';
import FAQSection from './FAQSection.jsx';
import TestimonialSection from './TestimonialSection.jsx';
import MarkdownRenderer from './MarkdownRenderer'; // Your existing MarkdownRenderer
import BenefitCarousel from './BenefitCarousel.jsx';

const ProcedureDetailPage = () => {
    const { procedureId } = useParams();
    const [isMobile, setIsMobile] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const procedures = proceduresMap;
    const procedure = procedures[procedureId];

    useEffect(() => {
        if (procedure?.markdownPath) {
            setLoading(true);
            fetch(procedure.markdownPath)
                .then(response => response.text())
                .then(text => setMarkdownContent(text))
                .catch(err => {
                    console.error('Error loading markdown:', err);
                    setMarkdownContent('# Content Not Available\n\nDetailed content for this procedure is not currently available.');
                })
                .finally(() => setLoading(false));
        }
    }, [procedure]);

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
                        <p className="text-4xl font-bold text-gray-900 mb-4">{procedure.title || procedure.name}</p>
                        <p className="text-xl font-bold text-gray-900 mb-4">{procedure.headline}</p>

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

                        {/* Google Form */}
                        <GoogleFormSubmit procedure={procedure.name} />

                        <div className="my-8">
                            <b>Key Benefits</b>
                            <BenefitCarousel benefits={procedure.benefitDetails} />
                        </div>

                        {/* Markdown Content Section */}
                        <div className="my-8">
                            {loading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>
                            ) : (
                                <MarkdownRenderer content={markdownContent} />
                            )}
                        </div>
                        {procedure.testimonials?.length > 0 && (
                            <TestimonialSection testimonials={procedure.testimonials} />
                        )}
                        {procedure.faqs?.length > 0 && (
                            <FAQSection faqs={procedure.faqs} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcedureDetailPage;