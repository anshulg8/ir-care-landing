import React, { useState } from 'react';
import { getUserCity } from '../utils/getUserCity';

const LocationButton = () => {
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGetLocation = async () => {
        setLoading(true);
        setError(null);
        try {
            const userCity = await getUserCity();
            setCity(userCity);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 text-center">
            <button
                onClick={handleGetLocation}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
            >
                📍 Use My Location
            </button>

            {loading && <p className="text-sm mt-2 text-gray-500">Detecting location...</p>}

            {city && (
                <p className="mt-2 text-green-700 text-sm">
                    You're near <strong>{city}</strong>
                </p>
            )}

            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </div>
    );
};

export default LocationButton;
