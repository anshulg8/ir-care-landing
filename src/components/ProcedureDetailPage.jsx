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
                            <BenefitCarousel benefits={procedure.benefitDetails} />
                        </div>

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

                        {/* Symptom Quiz CTA Section */}
                        {/* <div className="bg-teal-50 border border-teal-100 rounded-lg p-6 my-10 shadow-sm transition hover:shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                🩺 Not sure how serious your symptoms are?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Take our quick symptom checker to understand your condition better. Get a personalized score and see how urgent your situation might be — it only takes a minute.
                            </p>
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-lg transition"
                            >
                                Check My Score
                            </Link>
                        </div> */}

                        {/* <div className="bg-teal-50 border border-teal-100 rounded-lg p-6 my-10 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wondering if it's serious?</h3>
                            <p className="text-gray-600 mb-4">
                                Take a quick, private quiz to check your symptoms. Get a severity score and see if you should speak to a doctor.
                            </p>
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded-lg transition"
                            >
                                Check My Symptom Score
                            </Link>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 my-10 shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">🩺 Know your risk. Act early.</h3>
                            <p className="text-blue-800 mb-4">
                                Take our symptom checker to get a medical-grade insight into the severity of your condition.
                            </p>
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
                            >
                                Start Symptom Check
                            </Link>
                        </div> */}

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                            <p className="text-yellow-800 mb-4">
                                Take this short quiz to understand how serious your symptoms might be — and what to do next.
                            </p>
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                            >
                                Take the Quiz
                            </Link>
                        </div>

                        {/* <div className="bg-white border border-gray-200 rounded-lg p-6 my-10 text-center shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Assess Your Symptoms</h3>
                            <p className="text-gray-600 mb-4">
                                Take a quick clinical quiz. See how your symptoms score — and whether you may need treatment.
                            </p>
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-md text-sm font-semibold transition"
                            >
                                Start Assessment
                            </Link>
                        </div> */}


                        {/* <p className="text-gray-700 text-base mt-8 mb-6">
                            Curious how severe your symptoms are?{' '}
                            <Link
                                to={`/quiz/${procedureId}`}
                                className="text-teal-600 font-medium underline hover:text-teal-800"
                            >
                                Take our 1-minute symptom quiz
                            </Link>{' '}
                            and get an instant clarity score.
                        </p> */}

                        <DocsyJourney steps={docsyJourneySteps} />
                        {/* {procedure.testimonials?.length > 0 && (
                            <TestimonialSection testimonials={procedure.testimonials} />
                        )} */}
                        {procedure.faqs?.length > 0 && (
                            <FAQSection faqs={procedure.faqs} />
                        )}
                    </div>
                </div>
            </div>

            <StickyButtons
                onBookAppointment={() => openModal(procedure)}
                onContactClick={() => window.location.href = `/quiz/${procedure?.slug}`}
            />

            {/* {showContactModal && (
                <ContactFloatingButton onClose={() => setShowContactModal(false)} />
            )} */}

            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal />


        </div>
    );
};

export default ProcedureDetailPage;