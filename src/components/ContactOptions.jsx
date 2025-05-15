
// components/ContactOptions.js
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const ContactOptions = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Request Callback */}
                    <div className="bg-teal-50 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-teal-100 p-3 rounded-full mr-4">
                                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Request Callback</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Give a missed call to</p>
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-teal-600 bg-white px-4 py-2 rounded-lg shadow-xs border border-teal-200">
                                {PHONE_NUMBER}
                            </span>
                        </div>
                    </div>

                    {/* Speak Now */}
                    <div className="bg-green-50 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Speak Now</h3>
                        </div>
                        <p className="text-gray-600 mb-6">24/7 WhatsApp & Phone Support</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={WHATSAPP_LINK}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c...z" /> {/* WhatsApp icon path trimmed for brevity */}
                                </svg>
                                WhatsApp
                            </a>
                            <div className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                                <svg className="h-5 w-5 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28..." />
                                </svg>
                                {PHONE_NUMBER}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;
