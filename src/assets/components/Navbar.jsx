import React, { useEffect, usestate } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = usestate(false);
  const [isSticky, setIsSticky] = usestate(false);

   // set toggle Menu
   const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
   } 
  useEffect(() => {
      const handleScroll = () => {
          if(Window.scrollY > 100){
               setIsSticky(true);
          }
          else{
               setIsSticky(false);
          }
        };
        window.addEventListener('scroll', handSroll);
      
        return () => {

        }
    })
    window.addEventListener('scroll', handleScroll);
  
    // navitems array
    const navitems =[
        {link: "Home", patch: "home"},
        {link: "Service", patch: "service"},
        {link: "About", patch: "about"},
        {link: "Product", patch: "product"},
        {link: "Testimonial", patch: "testimonial"},
        {link: "FAQ", patch: "faq"},
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav>
                <div>
                    <a href="" className='text-2x1 font-semibold flex items-center space-x-3'><img className=' text-[#263238]
                    '>NEXCENT</span></a>
              
                     {/* nav items for large devices */}
                     <ul className='md:flex space-x12 hidden'>
                         {
                            navitems.map()
                         }
                     </ul
                </div>
            </nav>
        </header>
    )
        
   
   
}

export default Navbar