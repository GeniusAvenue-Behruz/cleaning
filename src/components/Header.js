import React from 'react';

const Header = () => {
    return (
        <header className="container">
            <nav className="nav">
                <a className="logo" href="#!">
                    <img src="logo.svg" alt="logo" /> NEO Cleaning
                </a>
                <ul className="nav-links">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">How it Works</a></li>
                    <li><a href="#!">Services</a></li>
                    <li><a href="#!">Locations</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </nav>
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
                    <img src="data.svg" alt="data" />
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
