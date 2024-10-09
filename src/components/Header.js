import React from 'react';
import Nav from './Nav.js'
const Header = () => {
    return (
        <header className="container">
            <Nav/>
            <div className="hero">
                <div className="hero-text">
                    <span className="discount-banner">
                        20% Discount for 1 Month Subscription
                    </span>
                    <h1 className="hero-heading">
                        Laundry today or Naked tomorrow.
                    </h1>
                    <p className="hero-description">
                        Suds Laundry service will wash, dry, and fold your laundry at an
                        affordable price. Pickup and drop-off options available!
                    </p>
                    <button className="cta-button">How it works</button>
                    
                    <div className='hero-datas'>
                        <div className='hero-data customers'>
                            <span className='numbers'>18m+</span>
                            <span className='text'>Happy<br/>Customers</span>
                        </div>
                        <div className='hero-data experience'>
                            <span className='numbers'>10+</span>
                            <span className='text'>Years of<br/>Experience</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="hero.svg" alt="Hero" className="hero-image" />
                    <img src="bubbles.svg" alt="Bubbles" className="bubbles top-0" />
                    <img src="bubbles.svg" alt="Bubbles" className="bubbles top-1-2" />
                    <img src="bubbles.svg" alt="Bubbles" className="bubbles bottom-0" />
                </div>
            </div>
        </header>
    );
};

export default Header;
