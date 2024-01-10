import React, { useState, useEffect } from 'react';
import { Container,Navbar, Nav} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SideNavBar from '../components/MobileSideBar';
import LandingPage from '../pages/LandingPage';
import Btn from '../components/Button';
import Icon from '../components/Icon';
import logo from '../logo.svg';
import './Body.css';
const Body = () => {
  const linkstyles = {
      fontFamily: 'Open Sans, sans-serif'
  };
  return (
      <div id='_body' className="_body" style={{linkstyles}}>
        <SideNavBar/>
        <div className='main'>
          <LandingPage/>
        </div>
      </div>
  );
};

  
  export default Body;