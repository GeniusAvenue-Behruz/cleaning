import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content container'>
                <a className="logo" href="#!">
                    <img src="logo.svg" alt="logo" /> NEO Cleaning
                </a>
                <table>
                    <tr className='th'>
                        <th>About Us</th>
                        <th>Company</th>
                        <th>Services</th>
                        <th>Check us Out</th>
                    </tr>
                    <tr>
                        <td>About Us</td>
                        <td>Our team</td>
                        <td>Pickup</td>
                        <td className='social-media'>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Creators</td>
                        <td>Terms</td>
                        <td>Drop offs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Contact us</td>
                        <td>How it works?</td>
                        <td>Laundry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Blog</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Footer