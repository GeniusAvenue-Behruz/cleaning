import React, { useState } from 'react';
import NavBar from '../components/Nav.js'
import Footer from '../components/Footer.js'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        newsletter: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission here
    };

    return (
        <div className="">
            <div className="container">
                <NavBar />
                <div className='contact-container'>
                    <div className="contact-left">
                        <h2>Contact <span>us</span></h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                />
                                I would like to receive the newsletter.
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="contact-right">
                        <p>
                            If you have any more questions, or is you feel to speak someone, we are always happy to see you in our company...
                        </p>
                        <div className="contact-info">
                            <img src="imgs/map-placeholder.svg" alt="Map" />
                            <div className="contact-details">
                                <p><strong>IceBlue</strong><br />315 W 36th St.<br />NY 10018</p>
                                <p><span role="img" aria-label="location">📍</span> NYC, United States</p>
                                <p><span role="img" aria-label="phone">📞</span> +998 93 604 94 73</p>
                                <p><span role="img" aria-label="email">✉️</span> contact@iceblue.uz</p>
                            </div>
                            <div className="social-icons">
                                {/* Replace '#' with actual links */}
                                <a href="#!"><i className="fab fa-instagram"></i></a>
                                <a href="#!"><i className="fab fa-twitter"></i></a>
                                <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a href="#!"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
