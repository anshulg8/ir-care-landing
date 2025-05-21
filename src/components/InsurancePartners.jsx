import React from 'react';
import { PHONE_NUMBER } from '../constants';

const logos = [
    'https://images.seeklogo.com/logo-png/24/1/national-insurance-company-india-logo-png_seeklogo-241702.png',
    'https://images.seeklogo.com/logo-png/30/2/hdfc-life-logo-png_seeklogo-304905.png',
    'https://images.seeklogo.com/logo-png/30/1/icici-prudential-life-insurance-logo-png_seeklogo-307031.png',
    'https://images.seeklogo.com/logo-png/38/1/aditya-birla-group-logo-png_seeklogo-385778.png',
    'https://images.seeklogo.com/logo-png/38/1/aditya-birla-group-logo-png_seeklogo-385778.png',
];

const InsurancePartners = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    <span className="text-teal-600">Cashless Treatment</span> with Major Insurers
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-xs flex items-center justify-center h-20"
                        >
                            <img
                                src={logo}
                                alt="Insurance Partner"
                                className="max-h-12 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8 text-gray-600">
                    Don&apos;t see your insurer? We accept all major policies –{' '}
                    <a href={`tel:${PHONE_NUMBER}`} className="text-teal-600 font-medium">
                        Call {PHONE_NUMBER} to verify
                    </a>
                </p>

            </div>
        </section>
    );
};

export default InsurancePartners;
