import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination styles

// import { Pagination } from 'swiper'; // Import the Swiper Pagination module
import { Pagination } from 'swiper/modules';

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW5OScHHANGJme3MCakwWOWPy7D9A_kh1kedMy1-zMC8MvpJyCp=s120-c-rp-mo-br100", // Replace with actual image URL
        name: "John Doe",
        city: "New York",
        message: "The procedure changed my life! I was able to resume normal activities in just a few days, and the recovery was faster than I ever expected."
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXxhEeZtGikowQN-XKzdtj2crfaC9aXpN7b57tRCscO7ADrRi35=s120-c-rp-mo-br100", // Replace with actual image URL
        name: "Jane Smith",
        city: "Los Angeles",
        message: "I was really nervous, but the team was so supportive. The whole experience was comfortable, and I feel amazing after the procedure."
    },
    {
        id: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXxhEeZtGikowQN-XKzdtj2crfaC9aXpN7b57tRCscO7ADrRi35=s120-c-rp-mo-br100", // Replace with actual image URL
        name: "Sarah Lee",
        city: "Chicago",
        message: "Highly recommend this treatment. I had immediate relief, and the recovery was quick. The doctors were very professional."
    },
    {
        id: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW5OScHHANGJme3MCakwWOWPy7D9A_kh1kedMy1-zMC8MvpJyCp=s120-c-rp-mo-br100", // Replace with actual image URL
        name: "Michael Clark",
        city: "San Francisco",
        message: "From start to finish, the entire process was smooth. The team explained everything to me, and I felt well-cared-for throughout."
    },
];

const TestimonialSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        What Our <span className="text-teal-600">Patients</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from our patients about their life-changing experiences with our minimally invasive procedures.
                    </p>
                </div>

                {/* Swiper Testimonials */}
                <Swiper
                    modules={[Pagination]}  // Enable pagination module
                    spaceBetween={20}
                    slidesPerView={1} // Show one slide at a time
                    loop={true} // Infinite loop
                    pagination={{
                        clickable: true, // Make pagination clickable
                        type: 'bullets', // Use dot pagination
                    }}
                    grabCursor={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }} // Optional: Automatically change slides
                    className="px-4 !pb-8"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-xl shadow-lg p-6 mx-auto w-full max-w-lg">
                                <div className="flex items-center space-x-4 mb-6">
                                    {/* Patient's Image */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{testimonial.city}</p>
                                    </div>
                                </div>

                                {/* Testimonial Message */}
                                <p className="text-gray-700 text-base">
                                    "{testimonial.message}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
