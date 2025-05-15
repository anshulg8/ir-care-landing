// src/utils/getUserCity.js

export const getUserCity = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocation is not supported by this browser.");
        }

        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                const { latitude, longitude } = coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();
                    const city =
                        data?.address?.city ||
                        data?.address?.town ||
                        data?.address?.village ||
                        data?.address?.state ||
                        "Unknown Location";

                    resolve(city);
                } catch (err) {
                    reject("Failed to fetch city from coordinates.");
                }
            },
            (error) => {
                reject("Location access denied or unavailable.");
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    });
};
