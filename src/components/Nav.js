import React from 'react'

const Nav = () => {
  return (
    <nav className="nav">
                <a className="logo" href="#!">
                    <img src="logo.svg" alt="logo" /> NEO Cleaning
                </a>
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">How it Works</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/locations">Locations</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
  )
}

export default Nav