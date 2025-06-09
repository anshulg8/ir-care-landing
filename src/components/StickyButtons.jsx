import React, { useEffect, useState } from 'react';
import { FaLightbulb, FaCalendarCheck } from 'react-icons/fa';

const StickyButtons = ({ onBookAppointment, onContactClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-80 bg-white border-t border-gray-200 p-4 flex justify-between space-x-4 md:hidden shadow-md">
            <button
                className="flex-1 text-center bg-[#ff8300] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                onClick={onContactClick}
            >
                <FaLightbulb className="text-sm" />
                Take the Quiz
            </button>
            <button
                className="flex-1 text-center bg-teal-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                onClick={onBookAppointment}
            >
                <FaCalendarCheck className="text-sm" />
                Book Appointment
            </button>
        </div>
    );
};

export default StickyButtons;
