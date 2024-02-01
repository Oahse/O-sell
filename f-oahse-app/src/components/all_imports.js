import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Container,Navbar, Nav, Button, Col, Row} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBell, } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faList ,faBars, faTimes , faCaretDown, faCaretLeft, faCaretRight, faEye, faCommentAlt,faMapMarkerAlt, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.svg';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import Carousel_img1 from '../assets/carousel_img1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


export {
  React,
  useState,
  useEffect,
  useRef,
  faSearch,
  faList,
  faBell,
  faBars,
  faTimes,
  faCaretDown,
  faEye, faCommentAlt,
  Button,
  FontAwesomeIcon,
  logo,
  faGooglePlay,
  faAppStore,
  CIPAC_cover_photo,
  Carousel_img1,
  Swiper,
  SwiperSlide,
  Container,
  Navigation,
  Navbar, 
  Nav,
  Col,
  Row,
  Router, 
  Route ,
  Link,
  createRoot,
  ReactDOM, faCaretLeft, faCaretRight,faMapMarkerAlt,faCartShopping
};
