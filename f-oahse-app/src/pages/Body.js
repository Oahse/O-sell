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
  return (
      <div id='_body' className="_body m-1">
        <SideNavBar/>
        <div className='main-content'>
          <LandingPage/>
        </div>
      </div>
  );
};

  
  export default Body;