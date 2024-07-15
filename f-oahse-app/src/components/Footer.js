import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import google from '../assets/google_play.png';
import apple from '../assets/apple.png';

const { Footer } = Layout;

const FooterComponent = ({ name }) => {
  return (
    <Footer className='footer'>
      <h3 className='footer-title'>{name}</h3>
      <Row gutter={[20, 8]} justify="center">
       
        <Col xs={12} sm={24} md={6} lg={6} xl={6}>
          <ul className='footer-list'>
            <li><h3 className='footer-list-header'>Company</h3></li>
            <li><Link to='/about/' className='text-white footer-listitem'>About Us</Link></li>
            <li><Link href='/' className='text-white footer-listitem'>Careers</Link></li>
            <li><Link href='/' className='text-white footer-listitem'>News room</Link></li>
            <li><Link href='/' className='text-white footer-listitem'>Blog</Link></li>
            <li><Link href='/' className='text-white footer-listitem'>Investors</Link></li>
            {/* Add more links as needed */}
          </ul>
        </Col>
        <Col xs={12} sm={24} md={6} lg={6} xl={6}>
          <ul className='footer-list'>
              <li><h4 className='footer-list-header'>Partnership</h4></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Vendors</Link></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Tradespersons</Link></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Engineers</Link></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Engr Companies</Link></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Franchise</Link></li>
              <li><Link to='/find/' className='text-white footer-listitem'>Influencers</Link></li>
            {/* Add more links as needed */}
          </ul>
        </Col>
        <Col xs={12} sm={24} md={6} lg={6} xl={6}>
          <ul className='footer-list'>
            <li><h4 className='footer-list-header'>Products</h4></li>
            <li><Link to='/find/' className='text-white footer-listitem'>Supply</Link></li>
            <li><Link to='/find/' className='text-white footer-listitem'>E-Commerce</Link></li>
            <li><Link to='/find/' className='text-white footer-listitem'>Consultancy</Link></li>
            <li><Link to='/find/' className='text-white footer-listitem'>Maintenance</Link></li>
            <li><Link to='/find/' className='text-white footer-listitem'>Engineering</Link></li>
            {/* Add more links as needed */}
          </ul>
          
        </Col>
        <Col xs={12} sm={24} md={6} lg={6} xl={6} className='p-0'>
          <div className='mb-2 mr-2'>
            
            <Link className='store' to="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="Google Play" width={40} /> Google
            </Link>
          </div>
          
            <div className='mt-2'>
              <Link className='store' to="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <img src={apple} alt="App Store" width={40} />
                <span>Apple</span>
              </Link>
            </div>
        </Col>
      </Row>
      <hr />
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="bottom-col">
          <small>
            <span className='bottom'>© </span>
            COPYRIGHT {new Date().getFullYear()} {name} (COMPANY NO. 08145843) 44 CRANTOCK ROAD, LONDON, SE6 2QP
          </small>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="bottom-col">
          <small>
            <Link to='/' className='bottom'>Legal & Compliance</Link>
            <Link to='/' className='bottom'>Cookies</Link>
            <Link to='/' className='bottom'>Security</Link>
          </small>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
