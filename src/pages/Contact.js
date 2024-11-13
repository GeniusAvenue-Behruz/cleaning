import React, { useState } from 'react';
import NavBar from '../components/Nav.js';
import Footer from '../components/Footer.js';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
            Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}
        `;

        const telegramURL = `https://api.telegram.org/bot7369038811:AAEME4DpJjryAkuC1xxI2KOrGFpICScufek/sendMessage`;

        try {
            await fetch(telegramURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: 1314633804,
                    text: message,
                }),
            });
            alert("Form submitted and sent to Telegram!");
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    };

    return (
        <div className="">
            <div className="container">
                <NavBar />
                <div className="contact-container">
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
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
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
                            If you have any more questions, or if you feel like speaking to someone, we are always happy to see you in our company...
                        </p>
                        <div className="contact-info">
                            <img src="imgs/map-placeholder.svg" alt="Map" />
                            <div className="contact-details">
                                <p><strong>IceBlue</strong><br />Laundry<br /> Service</p>
                                <p><span role="img" aria-label="location">📍</span> Tashkent, Uzbekistan</p>
                                <p><span role="img" aria-label="phone">📞</span> +998 93 604 94 73</p>
                                <p><span role="img" aria-label="email">✉️</span> upcoder0@gmail.com</p>
                            </div>
                            <div className="social-icons">
                                <a href="#!"><i className="fab fa-instagram"></i></a>
                                <a href="#!"><i className="fab fa-twitter"></i></a>
                                <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a href="#!"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
