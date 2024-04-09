import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Body from '../components/Body';
import {faGooglePlay, faAppStore} from '@fortawesome/free-brands-svg-icons'
import SideNavBar from '../components/MobileSideBar';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo.jpg';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Icon from '../components/Icon';
import Footer from '../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import cover from '../assets/coverphoto.jpg'
import photo1 from '../assets/photo1.jpg'
import rocket from '../assets/rocket.jpg'
import metalogo from '../assets/Meta-Logo2.png'
import abblogo from '../assets/ABB-LOGO.png'
import ericsson from '../assets/ericsson-logo.jpg'
import chevron from '../assets/chevron-logo.png' 
import { calc } from 'antd/es/theme/internal';

function About() {
    const name = "Home"
    
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [bgimageheight, setBgImageHeight] = useState(162);
    const [isMobile, setIsMobile] = useState(false);
    const [imgheight, SetImgHeight] = useState('40vh');
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 20; // Adjust the threshold as needed

        if (scrollY > scrollThreshold) {
        setNavbarBg('white');
        setIconColor('black');
        setMargin('0px');

        } else {
        setNavbarBg('transparent');
        setIconColor('white');
        setMargin('20px');
        
        }
    };
    const checkIfMobile = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 767); // Adjust threshold as needed
    };
    const handleResize = () => {
        var bgimg = document.getElementById('bgimage');
        setBgImageHeight(bgimg.height-30);
        
        checkIfMobile();
    };
    const setHeights = () => {
        const windowWidth = window.outerWidth;
        let imgHeight;
        if (windowWidth <= 240) {
          imgHeight = '215vh';
        } else if (windowWidth <= 330) {
          imgHeight = '93vh';
        }else if (windowWidth <= 360) {
          imgHeight = '72vh';
        } else if (windowWidth <= 375) {
          
          if (window.outerHeight <= 670) {
            imgHeight = '74vh';
          }else if(window.outerHeight <= 813) {
            imgHeight = '60vh';
          }
        } else if (windowWidth <= 390) {
          imgHeight = '60vh';
        } else if (windowWidth <= 416) {
          imgHeight = '56vh';
          if (window.outerHeight <= 800) {
            imgHeight = '64vh';
          }
        }else if (windowWidth <= 430) {
          imgHeight = '53vh';
        } else if (windowWidth <= 459) {
          imgHeight = '66vh';
        } else if (windowWidth <= 574) {
          imgHeight = '67vh';
          
        } else if (windowWidth <= 720) {
          
          imgHeight = '60vh';
        }else if (windowWidth <= 768) {
          imgHeight = '38vh';
        } else if (windowWidth <= 820) {
          imgHeight = '30vh';
        }else if (windowWidth <= 912) {
          imgHeight = '30vh';
        } else if (windowWidth <= 1024) {
          if (window.outerHeight <= 1200) {
            
            imgHeight = '62vh';
          }else{
            imgHeight = '28vh';
          }
        } else if (windowWidth <= 1400) {
          console.log(window.outerHeight+'------===-------')
          
          if (window.outerHeight <= 720) {
            imgHeight = '60vh';
          }else if (window.outerHeight <= 820) {
            imgHeight = '50vh';
          }else{
            imgHeight = '34vh';
          }
        }else {
          imgHeight = '40vh';
        }
        
      
        SetImgHeight(imgHeight);
        setIsMobile(window.innerWidth < 768);
      };

    useEffect(() => {
        
        setHeights();
    
        window.addEventListener('resize', setHeights);
        window.addEventListener('load', setHeights);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize()

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize); 
            window.removeEventListener('resize', setHeights);
          window.removeEventListener('load', setHeights);
        };

    },  []);
    
  
    return (
        <div className='about'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} margin={margin} />
            <SideNavBar iconColor={iconColor}/>
            <div >
                <div >
                    <img src={cover} alt="showcase" width="100%" id='bgimage'  />
                </div>
              {isMobile ? 
                  (<div className='' style={{position: 'absolute', color: 'white', top: '12%',right:'10%',left:'10%', bottom:'15%'}}>
                        <div className='text-center'>
                            <h2>Your Engineering Services <br/>
                                Made Easier,
                                Made Better,
                            </h2>
                        </div>
                    </div>
                  ):
                  (<div className='image-text row px-4'>
                      <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  float-left'>
                        <h1>Your Engineering Services <br/>
                            Made Easier,
                            Made Better,
                        </h1>
                        <p>
                            At the Comfort of your space,  get in-touch with  <br/>
                            professional engineers in seconds, <br/>
                            Get easier access to tradespersons around you in minutes  <br/>
                            for your on-time delivery of services; <br/>
                            and skip the traffic to get your technical supplies delivered  <br/>
                            to you at your door-step <br/>
                        </p>
                    </div>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float-right' style={{marginTop:'100px'}}>
                      <IconButton icon={faGooglePlay} to="#" text="Google Play" className='m-1' />
                      <IconButton icon={faAppStore} to="#" text="App Store" className='m-1' />
                    </div>
                  </div>
                  )
              }
              

              <Container >
                <Row className='py-5' lg={2} md={2} sm={1} xs={1}>
                    <Col>
                        <div><img src={photo1} alt='about' width='100%'/></div> 
                    </Col>
                    <Col className='p-3'>
                        <h2>Who are we</h2>
                        <hr/>
                        <p>
                            At the Comfort of your space,  get in-touch with  <br/>
                            professional engineers in seconds, <br/>
                            Get easier access to tradespersons around you in minutes  <br/>
                            for your on-time delivery of services; <br/>
                            and skip the traffic to get your technical supplies delivered  <br/>
                            to you at your door-step <br/>
                        </p>
                    </Col>
                </Row>

                <Row className='py-3'>
                    <Col lg={8}>
                        <h2>What we do</h2>
                        <hr/>
                        <h4>
                            We Bring Engineering and Technical Services
                            closer to Businesses, and Individuals.
                            Skip the hassle of procurement and focus on what really matters
                        </h4>

                        <p>
                            At the Comfort of your space,  get in-touch with  <br/>
                            professional engineers in seconds, <br/>
                            Get easier access to tradespersons around you in minutes  <br/>
                            for your on-time delivery of services; <br/>
                            and skip the traffic to get your technical supplies delivered  <br/>
                            to you at your door-step <br/>
                        </p>

                    </Col>

                    <Col lg={12}>
                    <Row>
                            <Col lg={12}> 
                                <h4>Our Services</h4>
                                <hr/>
                            </Col>
                        <Col className='p-3 mb-3'>
                                <h1><i class="bi bi-tools"></i></h1>
                                <h4>Engineering Services</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-box-seam"></i></h1>
                                <h4>Supply and Delivery</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-gear"></i></h1>
                                <h4>Technical Support</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-people"></i></h1>
                                <h4>Maintainence Services</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className='py-3'>
                    <Col lg={6}>
                        <div><img src={rocket} alt='takeoff' width='100%'/></div>
                    </Col>

                    <Col className='py-3'>
                        <Col className='mb-5'>
                            <h2>The Vison</h2>
                            <hr/>
                            <p>
                                To Bring Engineering and Technical Services closer to Businesses and Individuals
                            </p>

                        </Col>

                        <Col className='mb-5'>
                            <h2>The Mission</h2>
                            <hr/>
                            <p>
                                At the Comfort of your space,  get in-touch with  <br/>
                            professional engineers in seconds, <br/>
                            Get easier access to tradespersons around you in minutes  <br/>
                            for your on-time delivery of services; <br/>
                            and skip the traffic to get your technical supplies delivered  <br/>
                            to you at your door-step <br/>
                            </p>
                        </Col>

                        <Col>
                            <h2>Our Core Values</h2>
                            <hr/>
                            <Row className='text-center'>
                            <Col className='p-3 mb-3'>
                                <h1><i class="bi bi-shield-shaded"></i></h1>
                                <h4>Integrity</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-brilliance"></i></h1>
                                <h4>Innovation</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-rocket"></i></h1>
                                <h4>Reliability</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-people"></i></h1>
                                <h4>Professionalism</h4>
                            </Col>

                            <Col  className='p-3 mb-3'>
                                <h1><i class="bi bi-briefcase"></i></h1>
                                <h4>Competence</h4>
                            </Col>
                            </Row>
                        </Col>
                    </Col>
         
                </Row>

                <Row className='py-3 '>
                    <Col>
                        <h2>Quality Policy Statement</h2>
                        <hr/>
                        <p>
                           At SPAWN, we are dedicated to delivering only the best products and services <br/>
                            with multiple access channels and built-in back-up services at every point of connection, <br/>
                            our technical operators undergo rigorous background checks and verifications <br/> 
                            to give you all the assurances you need. <br/>

                        
                        </p>
                    </Col>
                </Row>

                <Row className='py-3 text-center'>
                    <Col className='text-center py-3 mb-3' lg={12} md={12} sm={12}>
                        <h1>Our Clients</h1>
                    </Col>


                    <Col className='mb-3'>
                        <img src={metalogo} alt='meta logo'/>
                    </Col>

                    <Col className='mb-3'>
                        <img src={abblogo} alt='meta logo' />
                    </Col>

                    <Col className='mb-3'>
                        <img src={ericsson} alt='meta logo' />
                    </Col>

                    <Col className='mb-3'>
                        <img src={chevron} alt='meta logo' />
                    </Col>

                </Row>

                <Row className='text-center' >
                    <Col lg={12} md={12} sm={12} className='text-center pt-3'>
                        <h3>Connect with us on Social Media </h3>
                        <hr/>
                    </Col>
                    
                    <Row lg={6} md={5} sm={4} xs={3} className='mb-3'>
                        
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.linkedin.com/in/kosisochukwu-okeke-505490242/" target="_blank" rel="noreferrer"><h1><i class="bi bi-linkedin"></i></h1></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://twitter.com/iamkosy11" target="_blank" rel="noreferrer"><h1><i class="bi bi-twitter-x"></i></h1></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://wa.me/message/WRQORB5TZLP2O1" target="_blank" rel="noreferrer"><h1><i class="bi bi-whatsapp"></i></h1></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.instagram.com/iamkosy11/" target="_blank" rel="noreferrer"><h1><i class="bi bi-instagram"></i></h1></a></Col>
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><h1><i class="bi bi-facebook"></i></h1></a></Col> 
                        <Col  sm={4} md={3} lg={2} className='py-3'><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><h1><i class="bi bi-youtube"></i></h1></a></Col> 
                    </Row>
                       
                    
                </Row>
              </Container>
        </div>
            <Footer className='footer'/>
        </div>
    );
};

export default About;