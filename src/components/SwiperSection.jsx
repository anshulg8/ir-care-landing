import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { cards } from '../data';

const SwiperSection = () => {
    return (
        <div className="w-full relative z-10">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <section
                            className="w-full bg-cover bg-center px-6 sm:px-12 lg:px-24 py-24 text-center relative"
                            style={{
                                backgroundImage: `url(${card.backgroundImage})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        >
                            {/* Dark overlay */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-0"></div>

                            {/* Foreground content */}
                            <div className="relative z-10 max-w-5xl mx-auto text-white">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    {card.title}
                                </h1>
                                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                                    {card.subtitle}
                                </h2>
                                <p className="text-lg max-w-4xl mx-auto mb-8">
                                    {card.description}
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link to="/contact">
                                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                                            Book Free Doctor Consultation
                                        </button>
                                    </Link>
                                    <Link to="/interventional-radiology">
                                        <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors">
                                            Know more about IR
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSection;
