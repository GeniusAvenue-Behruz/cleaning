import React from 'react'

const Services = () => {
    return (
        <section className="services-section">
            <div className='steps__header' style={{ marginTop: '-130px' }}>
                <h3 style={{ color: '#21B7E2', textTransform: 'uppercase', fontFamily: 'Grandstander', fontWeight: '400', fontSize: '24px' }}>Services</h3>
                <h1 style={{ color: '#263238', fontSize: '60px', fontFamily: 'Outfit', fontWeight: '500' }}>Services & Packages</h1>

            </div>
            <div className="packages-grid">
                <div className="package-card">
                    <div className='package-card__header'>
                        <img src='imgs/singleSize.svg' alt='Single Size' />
                        <div className='package-card__header-title'>
                            <h3 className="package-title">SINGLE SIZE</h3>
                            <p className="package-description">Perfect for people who live alone</p>
                        </div>
                    </div>
                    <p className='included'>What's included</p>
                    <ul className="package-features">
                        <li>2 loads per week</li>
                        <li>up to 10 lbs per load</li>
                    </ul>
                    <p className="package-price">10 dollars /per month</p>
                    <button className="choose-btn">Choose</button>
                </div>

                <div className="package-card highlight">
                <div className='package-card__header'>
                        <img src='imgs/coupleSize.svg' alt='Single Size' />
                        <div className='package-card__header-title'>
                            <h3 className="package-title">COUPLES SIZE</h3>
                            <p className="package-description">Perfect for people who live alone</p>
                        </div>
                    </div>
                    <p className='included'>What's included</p>
                    <ul className="package-features">
                        <li>4 loads per week</li>
                        <li>up to 12 lbs per load</li>
                        <li>Special garments</li>
                        <li>Pickup & drop off</li>
                    </ul>
                    <p className="package-price">20 dollars /per month</p>
                    <button className="choose-btn">Choose</button>
                </div>

                <div className="package-card">
                <div className='package-card__header'>
                        <img src='imgs/familySize.svg' alt='Single Size' />
                        <div className='package-card__header-title'>
                            <h3 className="package-title">Family SIZE</h3>
                            <p className="package-description">Perfect for people who live alone</p>
                        </div>
                    </div>
                    <p className='included'>What's included</p>
                    <ul className="package-features">
                        <li>6 loads per week</li>
                        <li>up to 15 lbs per load</li>
                        <li>Special garments</li>
                        <li>Pickup & drop off</li>
                        <li>Free detergent samples</li>
                    </ul>
                    <p className="package-price">30 dollars /per month</p>
                    <button className="choose-btn">Choose</button>
                </div>
            </div>
        </section>
    );

}

export default Services