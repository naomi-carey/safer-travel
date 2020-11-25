import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);
   
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen);
    }

    const renderClasses = () => {
        let classes = 'NavbarLinks';

        if (navLinkOpen) {
            classes += 'active'
        } 
        return classes;
    };

  
    return (
            <nav className='Navbar'>
                <div>
                <img className='NavbarLogo' src='https://safetravel.id/img/ico.jpg' />
                </div>
                <div>
                    <ul className={renderClasses()}> 
                       <li className='link'><a href='@'>Home</a></li>
                       <li className='link'><a href='@'>Statistics</a></li>
                       <li className='link'><a href='@'>Travel</a></li>
                       <li className='link'><a href='@'>Attractions</a></li>
                    </ul>
                </div>
                <div onClick={handleNavLinksToggle} className="hamburger-toggle">
                        <i className='fas fa-bars fa-lg'></i>
                    </div>
            </nav>

        )
    }


export default Navbar;