import React, { useState, useEffect } from 'react';
import { Container,Navbar, Nav} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import Icon from '../components/Icon';
import logo from '../logo.svg';
import './Body.css';
const Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
      <div id='_body' className="_body">
        <SideNavBar/>
        <div>
            hellocsvsfvfvfsf\n
        </div>
      </div>
  );
};

  
  export default Body;