import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Container,Navbar, Nav, Button} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes,faSearch} from '@fortawesome/free-solid-svg-icons';
import { faBell, } from '@fortawesome/free-regular-svg-icons';
import Btn from '../components/Button';
import Icon from '../components/Icon';
import Item from '../components/Item';
import logo from '../logo.svg';
import './Header.css';


const Header = (props) => {
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif'
    };
    const navbarheight = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        // Render the SideNavBar component into the body_container element
        const container = document.getElementById("sidebar");
        if (container.style.width === '70%'){
            container.style.width = '0%';
        }
        else{
            container.style.width = '70%';
        }
    };

    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        //if (navbarheight.current) {
        //    const height = navbarheight.current.getBoundingClientRect().height;
        //}
        const checkIfMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 767); // Adjust threshold as needed
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => {
        window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                    <Navbar className="header-bg" fixed='top' bg='light' expand="lg" ref={navbarheight} justify-content='between'>
                        <Navbar.Brand href="#home" style={linkstyles}>
                            <img alt="" src={logo} width="50" height="30" className="d-inline-block align-top"/>{' '}
                            Oahse
                        </Navbar.Brand>
                        <div className="ms-auto links">
                            <Icon name={faSearch} onClick={toggleSidebar} color='dark'/>
                            <Icon name={faBell} onClick={toggleSidebar} color='dark'/>
                            {isOpen ? (<Icon name={faTimes} onClick={toggleSidebar} color='dark'/>):(<Icon name={faBars} onClick={toggleSidebar} color='dark'/>) }
                        </div>
                    </Navbar>
                ) : (
                    <Navbar className="header-bg" fixed='top' bg='light' expand="lg" ref={navbarheight}  justify-content='between'>
                        <Navbar.Brand href="#home" style={linkstyles}>
                            <img alt="" src={logo} width="50" height="30" className="d-inline-block align-top"/>{' '}
                            Oahse
                        </Navbar.Brand>
                        <div className="ms-auto links">
                            
                            <Nav.Link href="#home" className="header-link" style={linkstyles}>Home</Nav.Link>
                            <Nav.Link href="#about" className="header-link" style={linkstyles}>About</Nav.Link>
                            <Nav.Link href="#services" className="header-link" style={linkstyles}>Services</Nav.Link>
                            <Nav.Link href="#contact" className="header-link" style={linkstyles}>Contact Us</Nav.Link>

                            <Nav.Link href="#contact" className="search-icon" style={linkstyles}>
                                <Icon name={faSearch} onClick={toggleSidebar} color='dark'/>
                            </Nav.Link>
                            <Nav.Link href="#contact" className="notification-icon" style={linkstyles}>
                                <Icon name={faBell} onClick={toggleSidebar} color='dark'/>
                                <span className="badge"></span>
                            </Nav.Link>
                            
                            <Btn href="#signup" text="Login" />
                            <Btn href="#signup" text="Sign Up" />
                        </div>
                    </Navbar>
              )}
        </div>
    );
};

  
  export default Header;