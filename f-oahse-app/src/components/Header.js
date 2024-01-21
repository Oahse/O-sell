import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Container,Navbar, Nav, Button} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes,faSearch, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faBell, } from '@fortawesome/free-regular-svg-icons';
import Btn from './Button';
import Icon from './Icon';
import DropDown from './DropDown';
import SearchBar from './Search';
import logo from '../logo.svg';
import './Header.css';


const Header = (props) => {
    const {iconColor, navbarBg, linkstyles, margin}=props;

    const navbarheight = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        // Render the SideNavBar component into the body_container element
        const container = document.getElementById("sidebar");
        if (container.style.width === '70%'){
            container.style.width = '0%';
            container.style.transition ='2';
        }
        else{
            container.style.width = '70%';
            container.style.transition ='2';
        }
    };

    const updatenotificationwidth = () =>{
        var nwidth = document.getElementById('badge')
        console.log(nwidth);
    }

    useEffect(() => {
        const checkIfMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 767); // Adjust threshold as needed
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        const checkIfSmallMobile = () => {
            const width = window.innerWidth;
            setIsSmallMobile(width <= 330); // Adjust threshold as needed
        };
        checkIfSmallMobile();
        window.addEventListener('resize', checkIfSmallMobile);

        return () => {
        window.removeEventListener('resize', checkIfMobile);
        window.removeEventListener('resize', checkIfSmallMobile);
        };

        
    }, []);

    return (
        <div>
            {isMobile ? (
                    <Navbar className="header-bg" bg={navbarBg} variant="light" fixed='top' expand="lg" ref={navbarheight} justify-content='between' style={{margin:margin, padding:'8px', backgroundColor:navbarBg}}>
                        <Navbar.Brand href="#home" style={linkstyles}>
                            <img alt="" src={logo} width="50" height="30" className="d-inline-block align-top"/>{' '}
                            {isSmallMobile ? (<span> </span>):(<span style={{'color':iconColor, 'fontWeight':'bold'}}>Oahse</span>)}
                        </Navbar.Brand>
                        <div className="ms-auto d-flex align-items-center">
                            <Nav.Link href="#contact" className="notification-icon mt-1" style={linkstyles}>
                                <Icon name={faBell} onClick={() => toggleSidebar('notify')} color={iconColor}/>
                                <span id ='badge'className="badge">10+</span>

                            </Nav.Link>
                            {isOpen ? (<Icon name={faTimes} onClick={() => toggleSidebar()} color={iconColor}/>):(<Icon name={faBars} onClick={() => toggleSidebar()} color={iconColor}/>) }

                        </div>
                        
                    </Navbar>
                ) : (
                    <Navbar className="header-bg" bg={navbarBg} variant="light" fixed='top' expand="lg" ref={navbarheight}  justify-content='between' style={{margin:margin, padding:'8px'}}>
                        <Navbar.Brand href="#home" style={linkstyles}>
                            <img alt="" src={logo} width="50" height="30" className="d-inline-block align-top"/>{' '}
                            <span style={{'color':iconColor,'fontWeight':'bold'}}>Oahse</span>
                        </Navbar.Brand>
                        <div className="ms-auto links">
                            <Nav.Link href="/" className="header-link" style={linkstyles}>Home</Nav.Link>
                            <Nav.Link href="#about" className="header-link" style={linkstyles}>About</Nav.Link>
                            <Nav.Link href="/services/" className="header-link" style={linkstyles}>Services</Nav.Link>
                            <Nav.Link href="#contact" className="header-link" style={linkstyles}>Contact Us</Nav.Link>
                            <Btn href="#signup" text="Login" />
                            <Btn href="#signup" text="Sign Up" />
                        </div>
                    </Navbar>
              )}
        </div>
    );
};

  
  export default Header;