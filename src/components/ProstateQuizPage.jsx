import React, { useState } from 'react';
import ContactFloatingButton from './ContactFloatingButton';
import AppointmentModal from './AppointmentModal';

const ProstateQuizPage = () => {
    const handleRetakeQuiz = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setSubmitted(false);
    };

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
    });
    const handleConsult = (severity) => {
        setShowForm(true);
    };

    const quiz = {
        title: 'Prostate Symptom Quiz (IPSS)',
        questions: [
            'Incomplete Emptying - How often have you had the sensation of not emptying your bladder?',
            'Frequency - How often have you had to urinate less than every two hours?',
            'Intermittency - How often have you found you stopped and started again several times when you urinated?',
            'Urgency - How often have you found it difficult to postpone urination?',
            'Weak Stream - How often have you had a weak urinary stream?',
            'Straining - How often have you had to strain to start urination?',
            'Nocturia - How many times did you typically get up at night to urinate?',
        ],
        options: [
            { label: 'Not at All', value: 0 },
            { label: 'Less than 1 in 5 Times', value: 1 },
            { label: 'Less than Half the Time', value: 2 },
            { label: 'About Half the Time', value: 3 },
            { label: 'More than Half the Time', value: 4 },
            { label: 'Almost Always', value: 5 },
        ],
        specialOptions: {
            6: [
                { label: 'None', value: 0 },
                { label: '1 Time', value: 1 },
                { label: '2 Times', value: 2 },
                { label: '3 Times', value: 3 },
                { label: '4 Times', value: 4 },
                { label: '5 Times', value: 5 },
            ]
        },
        result: (score) => {
            if (score <= 7) {
                return {
                    severity: 'mild',
                    score,
                    title: "Your Prostate Symptoms Are Mild – Here's How to Keep Them That Way.",
                    body: `Your prostate symptoms currently reflect early-stage Benign Prostatic Hyperplasia (BPH)...`,
                    learn: `As you age, hormonal shifts (especially increased levels of DHT) cause prostate growth...`,
                    steps: `• Limit fluids before bed\n• Reduce caffeine/alcohol\n• Do pelvic floor exercises`,
                    cta: "📞 Schedule Your Free Annual Prostate Health Check-In",
                };
            } else if (score <= 19) {
                return {
                    severity: 'moderate',
                    score,
                    title: "Moderate Symptoms Detected – You Have Effective Options Beyond Medication.",
                    body: `Your responses suggest moderate BPH. Typical symptoms at this stage include frequent night-time urination...`,
                    learn: `The enlarged prostate presses on your urethra, straining your bladder...`,
                    steps: `• Alpha-blockers, 5AR inhibitors (temporary relief)\n• PAE – 80–90% improvement\n• Resume activities in 48 hrs`,
                    cta: "📞 Discuss if PAE is Right for You – Free Specialist Consult Today",
                };
            } else {
                return {
                    severity: 'severe',
                    score,
                    title: "Severe Prostate Symptoms Detected – Prompt Action Recommended.",
                    body: `Your symptoms indicate advanced BPH. Frequent urgency, weak stream, night awakenings are common.`,
                    learn: `Risk of complete urinary blockage or long-term bladder damage rises significantly (50% within 2 years)...`,
                    steps: `• PAE: Minimally invasive\n• No catheter, no incision\n• Discharge same day\n• Covered by insurance`,
                    cta: "⚡ Fast-Track Your Free Specialist Consultation – Speak to Our Doctor Immediately",
                };
            }
        },
    };

    const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

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
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{result.title}</h2>

                            <div className="text-sm mb-2">
                                <span
                                    className={`inline-block px-2 py-1 rounded font-medium ${result.severity === 'mild' ? 'bg-green-100 text-green-700' :
                                        result.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}
                                >
                                    Your Score: {result.score} / 35
                                </span>
                            </div>

                            <p className="text-gray-700 mb-4 whitespace-pre-line">{result.body}</p>

                            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-1">What’s Happening in Your Body</h3>
                            <p className="text-gray-700 whitespace-pre-line mb-4">{result.learn}</p>

                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Next Steps</h3>
                            <p className="text-gray-700 whitespace-pre-line mb-4">{result.steps}</p>

                            <div>
                                <button
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded"
                                    onClick={() => handleConsult(result.severity)}
                                >
                                    {result.cta}
                                </button>

                                {showForm && (
                                    <div className="mt-4 space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border border-gray-300 rounded px-4 py-2"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full border border-gray-300 rounded px-4 py-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="City"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="w-full border border-gray-300 rounded px-4 py-2"
                                        />
                                        <button
                                            onClick={() => {
                                                // Optional: send data to backend or log
                                                console.log('Form submitted:', formData);
                                                alert('Thank you! We’ll get in touch soon.');
                                            }}
                                            className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>


                            <button
                                className="mt-4 text-teal-600 underline text-sm"
                                onClick={handleRetakeQuiz}
                            >
                                Retake Quiz
                            </button>
                        </div>

                    )}

                    <div className="mt-10 border-t pt-6 text-sm text-gray-500">
                        <p>🩺 Trusted by leading urologists. NABH Accredited.</p>
                        <p className="text-sm text-gray-600">Know someone who may need a prostate check-up? Share this free tool</p>
                    </div>

                </div>
            </div>

            {/* <StickyButtons onBookAppointment={handleBook} onContactClick={handleContact} /> */}
            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={quiz.title}
            />
        </div>
    );
};

export default ProstateQuizPage;
