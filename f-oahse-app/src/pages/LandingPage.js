import React, { useState, useEffect } from 'react';
import { Container,Navbar, Nav} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Btn from '../components/Button';
import Icon from '../components/Icon';
import logo from '../logo.svg';
import imageSrc from '../assets/test-gb.png'; // Import the image file

import './LandingPage.css';
const LandingPage = () => {
  return (
    <div id='_body' className="_body m-1">
      <div className='maincontent mt-4 mb-0'>
        <img src={imageSrc} alt="Description" className='maincontentimage mt-5 rounded' />
      </div>
      <div className='get-started-btn mt-0'>
        <Btn href="#signup" text="Get Started" className="" />
      </div>
      <div className='grid-services'>
         dd
      </div>
        
    </div>

  );
};

  
  export default LandingPage;