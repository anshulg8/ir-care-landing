import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizData } from '../data/quizData';
import StickyButtons from './StickyButtons';
import ContactFloatingButton from './ContactFloatingButton';
import AppointmentModal from './AppointmentModal';

const GenericQuizPage = () => {
    const getScoreColorClass = (score) => {
        if (score <= 7) return 'text-green-600';
        if (score <= 19) return 'text-yellow-600';
        return 'text-red-600';
    };

    const { quizId } = useParams();
    const quiz = quizData[quizId];

    const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    if (!quiz) {
        return <div className="text-center text-xl py-12">Quiz Not Found</div>;
    }

    const total = quiz.questions.length;
    const isAnswered = answers[currentQuestionIndex] !== null;
    const isLast = currentQuestionIndex === total - 1;

    const options =
        quiz.specialOptions && quiz.specialOptions[currentQuestionIndex]
            ? quiz.specialOptions[currentQuestionIndex]
            : quiz.options;

    const handleOptionChange = (value) => {
        const updated = [...answers];
        updated[currentQuestionIndex] = value;
        setAnswers(updated);
    };

    const handleNext = () => {
        if (!isAnswered) return;
        if (isLast) {
            setSubmitted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleBook = () => setShowModal(true);
    const handleContact = () => setShowContactModal(true);

    const score = answers.reduce((sum, v) => sum + (v ?? 0), 0);
    const result = quiz.result(score);
    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="mb-6">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div
                                className="bg-teal-600 h-2 rounded transition-all"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-right">
                            Question {currentQuestionIndex + 1} of {total}
                        </p>
                    </div>

                    {!submitted ? (
                        <>
                            <h1 className="text-xl font-semibold text-gray-800 mb-4">
                                {quiz.questions[currentQuestionIndex]}
                            </h1>
                            <div className="space-y-3">
                                {options.map((opt) => (
                                    <label key={opt.value} className="flex items-center space-x-3">
                                        <input
                                            type="radio"
                                            name={`q-${currentQuestionIndex}`}
                                            checked={answers[currentQuestionIndex] === opt.value}
                                            onChange={() => handleOptionChange(opt.value)}
                                            className="form-radio text-teal-600"
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between mt-8">
                                <button
                                    onClick={handleBack}
                                    disabled={currentQuestionIndex === 0}
                                    className="text-teal-600 font-medium disabled:text-gray-400"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!isAnswered}
                                    className={`px-6 py-2 text-white rounded-lg font-semibold ${isAnswered
                                        ? 'bg-teal-600 hover:bg-teal-700'
                                        : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    {isLast ? 'Submit' : 'Next →'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{result.title}</h2>

                            <p className="text-md text-gray-600 mb-4 font-medium">
                                Your Score:{" "}
                                <span className={`${getScoreColorClass(score)} font-semibold`}>
                                    {score} / {quiz.questions.length * 5}
                                </span>
                            </p>

                            <p className="text-lg text-gray-700 mb-6">{result.body}</p>
                            <button
                                onClick={handleBook}
                                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md text-lg font-semibold"
                            >
                                {result.cta}
                            </button>
                            <br /><br />
                            <button
                                onClick={() => {
                                    setAnswers(Array(quiz.questions.length).fill(null));
                                    setCurrentQuestionIndex(0);
                                    setSubmitted(false);
                                }}
                                className="border border-teal-600 text-teal-600 hover:bg-teal-50 py-3 px-6 rounded-md text-lg font-semibold"
                            >
                                Re-take Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <StickyButtons onBookAppointment={handleBook} onContactClick={handleContact} />
            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={quiz.title}
            />
        </div>
    );
};

export default GenericQuizPage;
