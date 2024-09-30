import { Link } from 'react-scroll';
import React, { useEffect, useState } from "react";
import Icon from "../assets/Icon.png";
import { FaX  } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);


    }


    useEffect(() => {
        const handleScroll = () => {
            if(Window.scrollY > 100) {   
                setSticky(true)
            }
            else {
                setSticky(false);

            }
        
        };
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.addEventListener('scroll', handleScroll);
            
        }
   
     });

     // navitems array
     const naviItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "paq"},
     ]



     return(
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav>
                <div>
                    <a href="" className='text-2x1 font-semibold flex items-center space-x-3'><img src={Icon} alt="" className='w-10 inline block items-center' /><span className='text-[#263238]
                    '>NEXCENT</span></a>
                </div>
           
               {/* nav items for large devices */}
               
               <ul className='md:flex space-x-12 hidden'>
                {
                    naviItems.map(({link, path}) =><link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-grey900 hover:text-brandPrimary first:font-medium'></link>) 
                }
              
               </ul>
           
               {/* btm for large devices */}
               <div className='space-x-12 hidden lg:flex items-center'>
                   <a href="/" className='hidden lg:flex item-center text-brandPrimary hover:text-grey900'></a>
                   <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey '>Sign up</button>
               </div>
               <div>
                {/* menu btn for only mobile devices */}
               </div>
                    <FaX />
            </nav>
        </header>
           
     )





}








export default Navbar