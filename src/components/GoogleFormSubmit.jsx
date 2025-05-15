import React, { useState } from 'react';

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScAdQu56kMCUdU5oflF58MIg4x4jsRdKh0-m-E6Clqqvtnyyg/formResponse';
const FIELD_NAME_ID = 'entry.1612902465';
const FIELD_PHONE_ID = 'entry.321206955';
const FIELD_CITY_ID = 'entry.560018661';
const FIELD_DISEASE_ID = 'entry.1952828092';

const GoogleFormSubmit = ({ procedure }) => {
    console.log('procedureprocedure', procedure)
    const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formBody = new FormData();
        formBody.append(FIELD_NAME_ID, formData.name);
        formBody.append(FIELD_PHONE_ID, formData.phone);
        formBody.append(FIELD_CITY_ID, formData.city);
        formBody.append(FIELD_DISEASE_ID, procedure);

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody,
        })
            .then(() => setStatus('Appointment request submitted!'))
            .catch(() => setStatus('Submission failed. Try again.'));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
            <h2 className="text-xl font-bold">Book Free Appointment</h2>
            <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
            />
            <input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                pattern="[0-9]{10}"
                required
            />
            <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
            />
            <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
            >
                Submit
            </button>
            {status && <p className="text-sm text-teal-700">{status}</p>}
        </form>
    );
};

export default GoogleFormSubmit;
