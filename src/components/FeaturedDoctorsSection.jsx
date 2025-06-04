import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { featuredDoctors } from '../data.jsx';

const FeaturedDoctorsSection = () => {


    return (
        <section className="pt-6 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Meet Our <span className="text-teal-600">World-Class</span> Doctors
                </h2>
                <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Hand-picked department heads with an average of 22 years of experience, global fellowships, and a less than 1% major-complication rate across 5,000+ Interventional Radiology cases.
                </p>

                {/* Mobile View: Swiper */}
                <div className="md:hidden mb-12 -mx-4">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="px-4 !pb-8"
                    >
                        {featuredDoctors.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <div className="bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-xl">
                                    <div>
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-48 object-cover object-[center_top]"
                                        />
                                        {doctor.hospitalIcons?.length > 0 && (
                                            <div className="flex gap-3 px-4 py-2">
                                                {doctor.hospitalIcons.map((icon, i) => (
                                                    <img
                                                        key={i}
                                                        src={icon}
                                                        alt="Hospital"
                                                        className="h-6 w-auto object-contain"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                                        <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                                            {doctor.experience}+ Years Experience
                                        </p>

                                        <p className="text-teal-600 text-sm font-medium mb-2">{doctor.designation}</p>
                                        <ul className="space-y-1 text-sm mb-3">
                                            {doctor.credentials.map((cred, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg
                                                        className="h-4 w-4 text-green-500 mr-1 mt-0.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-700">{cred}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-teal-50 px-3 py-1 rounded-md">
                                            <p className="text-xs font-medium text-teal-800">
                                                Specializes in: {doctor.specialty}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-2 gap-10">
                    {featuredDoctors.slice(0, 4).map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full md:w-48 h-64 object-cover"
                                />
                                <div className="p-6 flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                                    <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                                        {doctor.experience}+ Years Experience
                                    </p>

                                    <p className="text-teal-600 font-medium mb-3">{doctor.designation}</p>
                                    <ul className="space-y-2 mb-4">
                                        {doctor.credentials.map((cred, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg
                                                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-gray-700">{cred}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-teal-50 px-4 py-2 rounded-lg inline-block">
                                        <p className="text-sm font-medium text-teal-800">
                                            Specializes in: {doctor.specialty}
                                        </p>
                                    </div>
                                    {doctor.hospitalIcons?.length > 0 && (
                                        <div className="flex gap-3">
                                            {doctor.hospitalIcons.map((icon, i) => (
                                                <img
                                                    key={i}
                                                    src={icon}
                                                    alt="Hospital"
                                                    className="h-6 w-auto object-contain"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-4 sm:mt-8 text-center">
                    <Link
                        to="/doctors"
                        className="inline-block text-teal-600 text-lg font-semibold hover:underline"
                    >
                        View All Doctors &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctorsSection;
