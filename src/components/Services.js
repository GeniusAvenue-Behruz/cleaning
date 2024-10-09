import React, {useState} from 'react'
import PackageCard from './PackageCard.js'
const Services = () => {
    const [activeCard, setActiveCard] = useState(1);

    const handleClick = (index) => {
        setActiveCard(index);
    };

    // Package data
    const packages = [
        {
            title: 'SINGLE SIZE',
            description: 'Perfect for people who live alone',
            features: ['2 loads per week', 'up to 10 lbs per load'],
            price: '10 dollars',
            imgSrc: 'imgs/singleSize.svg',
        },
        {
            title: 'COUPLES SIZE',
            description: 'Perfect for couples or roommates',
            features: ['4 loads per week', 'up to 12 lbs per load', 'Special garments', 'Pickup & drop off'],
            price: '20 dollars',
            imgSrc: 'imgs/coupleSize.svg',
        },
        {
            title: 'FAMILY SIZE',
            description: 'Perfect for families',
            features: ['6 loads per week', 'up to 15 lbs per load', 'Special garments', 'Pickup & drop off', 'Free detergent samples'],
            price: '30 dollars',
            imgSrc: 'imgs/familySize.svg',
        },
    ];

    return (
        <section className="services-section">
            <div className='steps__header' style={{ marginTop: '-130px' }}>
                <h3 style={{ color: '#21B7E2', textTransform: 'uppercase', fontFamily: 'Grandstander', fontWeight: '400', fontSize: '24px' }}>Services</h3>
                <h1 style={{ color: '#263238', fontSize: '60px', fontFamily: 'Outfit', fontWeight: '500' }}>Services & Packages</h1>
            </div>
            <div className="packages-grid">
                {packages.map((pkg, index) => (
                    <PackageCard
                        key={index}
                        isActive={activeCard === index}
                        onClick={() => handleClick(index)}
                        imgSrc={pkg.imgSrc}
                        title={pkg.title}
                        description={pkg.description}
                        features={pkg.features}
                        price={pkg.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services