import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { cards } from '../data';
import AppointmentModal from './AppointmentModal'; // Import your modal component

const SwiperSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState('');

    const handlePrimaryCTA = (procedureTitle) => {
        setSelectedProcedure(procedureTitle);
        setShowModal(true);
    };

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
                        <section className="relative h-[32rem] w-full overflow-hidden">
                            <img
                                src={card.backgroundImage}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover object-[50%_30%] z-0"
                            />

                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />

                            <div className="relative z-20 px-6 sm:px-12 lg:px-24 py-24 text-center max-w-5xl mx-auto text-white h-full flex flex-col justify-center items-center">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{card.title}</h1>
                                <h2 className="text-xl md:text-2xl font-semibold mb-6">{card.subtitle}</h2>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button
                                        onClick={() => handlePrimaryCTA(card.title)}
                                        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                                    >
                                        {card.primaryCTA}
                                    </button>
                                    <Link to="/interventional-radiology">
                                        <button className="bg-white/80 text-teal-700 hover:bg-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md backdrop-blur-sm">
                                            {card.secondaryCTA}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal below swiper */}
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={selectedProcedure}
            />
        </div>
    );
};

export default SwiperSection;
