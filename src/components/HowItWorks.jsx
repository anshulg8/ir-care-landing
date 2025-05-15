import React from "react";

const HowItWorks = () => {
    const howItWorks = [
        {
            title: "Free Consultation",
            desc: "Talk to a certified IR expert about your symptoms and options.",
            icon: "🩺",
            color: "bg-teal-500 text-white",
        },
        {
            title: "Diagnostic Imaging",
            desc: "Advanced scans to map your exact anatomy and problem areas.",
            icon: "🧠",
            color: "bg-blue-500 text-white",
        },
        {
            title: "Procedure Day",
            desc: "Minimally invasive treatment with same-day or next-day discharge.",
            icon: "💉",
            color: "bg-purple-500 text-white",
        },
        {
            title: "Recovery Support",
            desc: "24/7 guidance + follow-ups to ensure proper healing and results.",
            icon: "🤝",
            color: "bg-orange-500 text-white",
        },
        {
            title: "Ongoing Care",
            desc: "Annual checkups or repeat care if needed. We're always here.",
            icon: "🏥",
            color: "bg-pink-500 text-white",
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Your <span className="text-teal-600">Seamless Journey</span> to Relief
                </h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    From first consultation to full recovery - we handle every detail
                </p>

                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden overflow-x-auto -mx-4 px-4">
                    <div className="flex space-x-4">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative">
                                <div className="flex items-center justify-start mb-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md border-4 border-white ${step.color}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 ml-4">{step.title}</h3>
                                </div>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>


                        ))}
                    </div>
                </div>

                {/* Desktop: Timeline layout */}
                <div className="hidden md:block relative">
                    {/* Timeline bar */}
                    <div className="absolute top-16 left-16 right-16 h-1 bg-teal-200"></div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Step indicator */}
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md border-4 border-white ${step.color}`}>
                                    {step.icon}
                                </div>

                                {/* Content card */}
                                <div className="mt-8 pt-16 pb-6 px-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
