import React from 'react';
import Header from './Header';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import { Link } from 'react-router-dom';
import InsurancePartners from './InsurancePartners';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <InsurancePartners />
            <div className="bg-teal-700 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Your Pain-Free Journey Starts Here</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Speak to our care navigators today. Zero obligation, 100% clarity.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* Phone Button */}
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="bg-white text-teal-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
                        >
                            Call Now: {PHONE_NUMBER}
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white hover:bg-teal-800 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
                        >
                            WhatsApp
                        </a>
                    </div>
                    <br />
                    <p>*Limited daily slots for personalized care*</p>
                </div>
            </div>

            <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* About */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Minimally Invasive Care Since 20XX</h3>
                            <p className="mb-4">
                                Pioneering image-guided treatments with compassion and cutting-edge technology.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Twitter
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Instagram
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Centers */}
                        <div>
                            <Link to="/centres">
                                <h3 className="text-white text-lg font-bold mb-4">Our Centers</h3>
                            </Link>
                            <ul className="space-y-2">
                                {["Mumbai", "Pune", "Mangalore"].map((city, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-4 w-4 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{city}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Supported Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {["English", "हिंदी", "मराठी", "ગુજરાતી", "മലയാളം"].map((language, index) => (
                                    <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Terms, Privacy & Copyright */}
                    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 text-center md:text-left gap-4">
                        <div className="space-x-4">
                            <Link to="/about" className="hover:text-white transition">About Us</Link>
                            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
                            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                            <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
                        </div>
                        <div>
                            © {new Date().getFullYear()} Docsy. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 