import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Ensure this is the correct path to your CSS file
import IconButton from './Iconbutton';
import Icon from './Icon';
import google from '../assets/google_play.png';
import apple from '../assets/apple.png'
import {faGooglePlay, faAppStore, faApple} from '@fortawesome/free-brands-svg-icons'
function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-4'>
      <Container>
        <Row>
            <Col className='py-3'>
                <h3>Oahse</h3>
            </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <ul className='footer-list list-unstyled text-left'>
              <li><h4 className='text-white footer-listitem'>Company</h4></li>
              <li><a href='/' className='text-white footer-listitem'>About Us</a></li>
              <li><a href='/' className='text-white footer-listitem'>Careers</a></li>
              <li><a href='/' className='text-white footer-listitem'>News room</a></li>
              <li><a href='/' className='text-white footer-listitem'>Blog</a></li>
              <li><a href='/' className='text-white footer-listitem'>Investors</a></li>
            </ul>
          </Col>

          <Col>
            <ul className='footer-list list-unstyled text-left'>
              <li><h4 className='text-white footer-listitem'>Partnership</h4></li>
              <li><a href='/' className='text-white footer-listitem'>Vendors</a></li>
              <li><a href='/' className='text-white footer-listitem'>Tradespersons</a></li>
              <li><a href='/' className='text-white footer-listitem'>Engineers</a></li>
              <li><a href='/' className='text-white footer-listitem'>Engineering Companies</a></li>
              <li><a href='/' className='text-white footer-listitem'>Franchise</a></li>
              <li><a href='/' className='text-white footer-listitem'>Influencers</a></li>
            </ul>
          </Col>

          <Col>
            <ul className='footer-list list-unstyled text-left'>
                <li><h4 className='text-white footer-listitem'>Products</h4></li>
                <li><a href='/' className='text-white footer-listitem'>Supply</a></li>
                <li><a href='/' className='text-white footer-listitem'>E-Commerce</a></li>
                <li><a href='/' className='text-white footer-listitem'>Consultancy</a></li>
                <li><a href='/' className='text-white footer-listitem'>Maintenance</a></li>
                <li><a href='/' className='text-white footer-listitem'>Engineering</a></li>
            </ul>
            </Col>


          <Col>
            <div className='footer-list'>
                <div className='store-list-item'>
                    <a className='store' href="https://www.google.com" target="_blank" rel="noopener noreferrer" >
                        <img src={google}/>Google Play
                    </a>
                </div>
                <div className='store-list-item'>
                    <a className='store' href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <img src={apple}/> Apple Store  
                    </a>
                </div>
            </div>

          </Col>
        </Row>

        <hr />

        <Row>
          <Col className='col-12 text-center'><small> 
            <span className='bottom text-center'>© </span>
            COPYRIGHT {currentYear} Oahse (COMPANY NO. 08145843) 44 CRANTOCK ROAD, LONDON, SE6 2QP </small>
          </Col>

          <Col className='text-center'>
            <small><a href='/' className='bottom'>Legal & Compliance</a></small>
            <small><a href='/' className='bottom'>Cookies</a></small>
            <small><a href='/' className='bottom'>Security</a></small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
