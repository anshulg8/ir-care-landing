import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoogleFormSubmit from './GoogleFormSubmit';
import { docsyJourneySteps, proceduresMap } from '../data.jsx';
import FAQSection from './FAQSection.jsx';
import BenefitCarousel from './BenefitCarousel.jsx';
import AppointmentModal from './AppointmentModal';
import StickyButtons from './StickyButtons';
import ContactFloatingButton from './ContactFloatingButton.jsx';
import DocsyJourney from './DocsyJourney.jsx';
import HTMLBlockRenderer from './HTMLBlockRenderer.jsx';
import { useModal } from '../context/ModalContext.jsx';
import FeaturedDoctorsSection from './FeaturedDoctorsSection.jsx';
import TestimonialSection from './TestimonialSection.jsx';

const ProcedureDetailPage = () => {
    const { procedureId } = useParams();
    const [isMobile, setIsMobile] = useState(false);
    const [showStickyButtons, setShowStickyButtons] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const { openModal } = useModal();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowStickyButtons(true);
            } else {
                setShowStickyButtons(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="min-h-screen bg-gray-50 py-12 pt-4">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-8 pt-2">
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

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                            <p className="text-yellow-800 mb-4">
                                Unsure whether you have symptoms? Get answers in 2 mins with free, clinically validated test.
                            </p>
                            <Link
                                to={`/quiz/${procedure.slug}`}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                            >
                                Take the Quiz
                            </Link>
                        </div>

                        <div className="my-8">
                            <BenefitCarousel benefits={procedure.benefitDetails} />
                        </div>

                        <FeaturedDoctorsSection />

                        {/* Markdown Content Section */}
                        {/* <div className="my-8">
                            {loading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>
                            ) : (
                                <MarkdownRenderer content={markdownContent} />
                            )}
                        </div> */}

                        {/* <HTMLBlockRenderer type="blockA" /> */}
                        <div className="container my-8">
                            <HTMLBlockRenderer type={procedure.htmlPath} />
                        </div>

                        {procedure.testimonials?.length > 0 && (
                            <TestimonialSection testimonials={procedure.testimonials} />
                        )}

                        <DocsyJourney steps={docsyJourneySteps} />

                        {procedure.faqs?.length > 0 && (
                            <FAQSection faqs={procedure.faqs} />
                        )}
                    </div>
                </div>
            </div>

            <StickyButtons
                // onBookAppointment={() => openAppointmentModal(procedure?.title || procedure?.name)}
                onBookAppointment={() => openModal(procedure)}
                onContactClick={() => setShowContactModal(true)}
            // onContactClick={() => window.location.href = `/quiz/${procedure?.slug}`}
            />

            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal />

        </div>
    );
};

export default ProcedureDetailPage;