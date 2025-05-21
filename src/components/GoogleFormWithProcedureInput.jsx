import React, { useEffect, useState } from 'react';
import { FaCrosshairs } from 'react-icons/fa6';
import axios from 'axios';
import {
    FIELD_CITY_ID,
    FIELD_DISEASE_ID,
    FIELD_NAME_ID,
    FIELD_PHONE_ID,
    GOOGLE_FORM_ACTION_URL,
    PHONE_NUMBER,
} from '../constants';
import { proceduresArray } from '../data';

const procedures = proceduresArray.map(proc => proc.name);

const GoogleFormWithProcedureInput = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        procedure: '',
    });

    const [status, setStatus] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [nearbyCities, setNearbyCities] = useState([]);
    const [isLoadingCities, setIsLoadingCities] = useState(false);

    // Fetch nearby cities using IP + Overpass API
    useEffect(() => {
        const fetchNearbyCities = async () => {
            setIsLoadingCities(true);
            try {
                const res = await axios.get('https://ipapi.co/json/');
                const { latitude, longitude, city } = res.data;

                const overpassQuery = `
                    [out:json];
                    (
                        node["place"~"city|town|village"](around:50000,${latitude},${longitude});
                    );
                    out body;
                `;

                const response = await axios.post(
                    'https://overpass-api.de/api/interpreter',
                    overpassQuery,
                    {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    }
                );

                const cityNames = response.data.elements
                    .map((el) => el.tags?.name)
                    .filter(Boolean);

                const uniqueCities = Array.from(new Set([city, ...cityNames]));
                setNearbyCities(uniqueCities.slice(0, 3));
            } catch (error) {
                console.error('Failed to fetch nearby cities:', error);
            } finally {
                setIsLoadingCities(false);
            }
        };

        fetchNearbyCities();
    }, []);

    // Get city from browser GPS
    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                try {
                    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            format: 'json',
                        },
                    });

                    const city =
                        response.data.address.city ||
                        response.data.address.town ||
                        response.data.address.village;

                    if (city) {
                        setFormData((prev) => ({ ...prev, city }));
                    } else {
                        alert('Unable to detect city. Try entering it manually.');
                    }
                } catch (err) {
                    console.error(err);
                    alert('Failed to fetch location data.');
                }
            },
            (error) => {
                console.error(error);
                alert('Location access denied or unavailable.');
            }
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === 'procedure') {
            const matches = procedures.filter((proc) =>
                proc.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(matches);
            setShowDropdown(true);
        }
    };

    const handleSelectProcedure = (value) => {
        setFormData((prev) => ({ ...prev, procedure: value }));
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formBody = new FormData();
        formBody.append(FIELD_NAME_ID, formData.name);
        formBody.append(FIELD_PHONE_ID, formData.phone);
        formBody.append(FIELD_CITY_ID, formData.city);
        formBody.append(FIELD_DISEASE_ID, formData.procedure);

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody,
        })
            .then(() => setStatus('Appointment request submitted!'))
            .catch(() => setStatus('Submission failed. Try again.'));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4 relative"
        >
            <input
                name="name"
                type="text"
                placeholder="Patient Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
            />

            <input
                name="phone"
                type="tel"
                placeholder="Enter 10 Digit Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                pattern="[0-9]{10}"
                required
            />

            <div className="flex items-center gap-2">
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
                    type="button"
                    onClick={handleGetLocation}
                    className="text-white bg-teal-600 hover:bg-teal-700 p-2 rounded"
                    title="Use my location"
                >
                    <FaCrosshairs size={16} />
                </button>
            </div>


            {/* Nearby Cities */}
            {isLoadingCities ? (
                <p className="text-sm text-gray-500 mt-2">Detecting nearby cities...</p>
            ) : (
                nearbyCities.length > 0 && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-600">Nearby Cities:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {nearbyCities.map((city, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({ ...prev, city }))
                                    }
                                    className="px-3 py-1 text-sm bg-teal-100 text-teal-800 rounded hover:bg-teal-200"
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            )}

            {/* Procedure Auto-Complete */}
            <div className="relative">
                <input
                    name="procedure"
                    type="text"
                    placeholder="Select Disease"
                    value={formData.procedure}
                    onChange={handleChange}
                    onFocus={() => setShowDropdown(true)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                />
                {showDropdown && filtered.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto">
                        {filtered.map((option, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSelectProcedure(option)}
                                className="px-4 py-2 hover:bg-teal-50 cursor-pointer text-sm"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Submit Button + Banner */}
            <div className="relative w-full">
                <div className="absolute -top-3 right-4 transform -skew-x-12 bg-green-600 text-white text-xs px-4 py-1 shadow-sm z-10">
                    <div className="transform skew-x-12">Free Consultation</div>
                </div>

                <button
                    type="submit"
                    className="bg-[#ff8300] text-white py-3 px-6 rounded font-semibold w-full"
                >
                    Book Free Appointment
                </button>
            </div>

            {/* Call Link */}
            <a
                href={`tel:${PHONE_NUMBER}`}
                className="block text-lg text-center font-medium text-teal-600 hover:underline"
            >
                Call Us 📞 {PHONE_NUMBER}
            </a>

            {/* Status Message */}
            {status && <p className="text-sm text-teal-700">{status}</p>}
        </form>
    );
};

export default GoogleFormWithProcedureInput;
