import React from 'react'

const PackageCard = ({ isActive, onClick, imgSrc, title, description, features, price }) => {
    return (
        <div className={`package-card ${isActive ? 'highlight' : ''}`} onClick={onClick}>
            <div className='package-card__header'>
                <img src={imgSrc} alt={title} />
                <div className='package-card__header-title'>
                    <h3 className="package-title">{title}</h3>
                    <p className="package-description">{description}</p>
                </div>
            </div>
            <p className='included'>What's included</p>
            <ul className="package-features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <p className="package-price">{price} /per month</p>
            <button className="choose-btn" onClick={() => window.location.href = 'tel:+998943669473'}>Contact</button>
        </div>
    );
};

export default PackageCard