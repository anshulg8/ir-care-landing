import React from 'react';
import GoogleFormWithProcedureInput from './GoogleFormWithProcedureInput';

const AppointmentModal = ({ show, onClose, procedure }) => {
    if (!show) return null;

    const handleBackdropClick = () => {
        onClose(); // close the modal if the backdrop is clicked
    };

    const stopPropagation = (e) => {
        e.stopPropagation(); // prevent modal clicks from closing it
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div
                onClick={stopPropagation}
                className="bg-white max-w-lg w-full mx-4 rounded-xl shadow-lg p-6 relative animate-fade-in"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                    &times;
                </button>

                {/* <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">
                    Explore Minimally Invasive Options for your condition
                </h2> */}

                {/* <GoogleFormWithProcedureInput procedure={procedure} /> */}
                <GoogleFormWithProcedureInput procedure={procedure} onClose={() => setShowModal(false)} />
            </div>
        </div>
    );
};

export default AppointmentModal;
