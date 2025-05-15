// components/CentersCarousel.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CentersCarousel = ({ centers }) => {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Explore Our <span className="text-teal-600">Centers</span>
                </h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {centers.map((center) => (
                        <SwiperSlide key={center.id}>
                            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={center.image}
                                    alt={center.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>
                                    <p className="text-sm text-gray-600">{center.city} – {center.area}</p>
                                    <p className="mt-2 text-sm text-gray-700 line-clamp-3">{center.description}</p>
                                    <Link
                                        to={`/centres/${center.id}`}
                                        className="inline-block mt-4 text-teal-600 hover:underline font-medium text-sm"
                                    >
                                        Learn more →
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CentersCarousel;
