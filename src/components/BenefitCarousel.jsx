import React from 'react';

const BenefitsCarousel = ({ benefits }) => {
    return (
        <div className="benefits-grid">
            {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                    <div className="icon-wrapper">
                        {benefit.icon}
                    </div>
                    <h3><b>{benefit.title}</b></h3>
                    <p>{benefit.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BenefitsCarousel;
