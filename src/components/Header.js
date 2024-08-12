import React from 'react'
import DropDown from './DropDown'

const Header = () => {
    const Services = [
        { id: 1, text: 'Action', href: '#/action-1' },
        { id: 2, text: 'Another action', href: '#/action-2' },
        { id: 3, text: 'Something else', href: '#/action-3' }
    ];


    return (
        <header className='container mx-auto'>
            <nav className='flex justify-between'>
                <a className='flex items-center text-4xl text-[#21B7E2]'><img src='logo.svg'></img> NEO Cleaning</a>
                <ul className='flex justify-between items-center space-x-10'>
                    <li><a>Home</a></li>
                    <li><a>How it Wroks</a></li>
                    <li><DropDown title='Services' items={Services} /></li>
                    <li><a>Locations</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </nav>
            <div className='hero flex justify-between items-center'>
                <div className='hero-text'>
                    <span className='bg-[#D0F6FF] mb-[38px] inline-block h-10 w-80 font-bold text-center px-2 py-2 rounded-3xl font-inter'>20% Discount fro 1Month Supscription</span>
                    <h1 className='mb-[41px] h-35 text-6xl w-[547px] font-light'>Laundry today or
                        Naked tomorrow.</h1>
                    <p className='text-[#00334C] mb-[47px] text-base font-inter max-w-[570px]'>Suds Laundry service will wash, dry, and fold your laundry at an
                        affordable price. Pickup and drop-off options available!</p>
                    <button className='bg-[#D0F6FF] mb-[49px] hover:bg-blue-200 h-[50px] w-[300px] text-center  text-black font-inter font-medium py-2 rounded-[40px]'>How it works</button>
                    <img src='data.svg' />
                </div>

                <div className='relative'>
                    <img src='hero.svg' alt='Hero Image' className='w-full h-auto' />
                    <img src='bubbles.svg' alt='Bubbles' className='absolute top-0 left-0 h-auto' />
                    <img src='bubbles.svg' alt='Bubbles' className='absolute top-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 h-auto' />
                    <img src='bubbles.svg' alt='Bubbles' className='absolute bottom-0 right-0 h-auto' />
                </div>


            </div>
        </header>
    )
}

export default Header
