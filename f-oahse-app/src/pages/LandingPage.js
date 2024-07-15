import {React, useState, useEffect, useRef,faGooglePlay, faAppStore,} from 'react';
import './LandingPage.css';
import '../setting/opensanregular.css'
import {Row, Col, Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo.jpg';
import Search from '../components/Search';
import {Card} from 'react-bootstrap';
import {Button} from 'antd';
import metalogo from '../assets/Meta-Logo2.png'
import abblogo from '../assets/ABB-LOGO.png'
import ericsson from '../assets/ericsson-logo.jpg'
import chevron from '../assets/chevron-logo.png' 
import AppScreen from '../assets/localhost_3000_O-sell(iPhone 6_7_8 Plus).png'


function LandingPage (props){
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [index, setIndex] = useState(0);
    const [bgimageheight, setBgImageHeight] =useState(162);
    const [isMobile, setIsMobile] = useState(false);
    const [imgheight, SetImgHeight] = useState('40vh');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
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
        setMargin('0px');
        
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
        // window.addEventListener('resize', handleResize);

        // handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('resize', handleResize); 
            window.removeEventListener('resize', setHeights);
          window.removeEventListener('load', setHeights);
        };

    }, []);

  
    return (
        <div className='service'>
            <div className='showcase-pic' >
            <Container >
            <Row className='showcase' style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Col className='' lg={8} md={12} sm={12}>
                    <h3>Your Engineering Services <br/>
                        Made Easier,
                        Made Better
                    </h3>
                    <br/>
                    <p>
                        At the Comfort of your space,  get in-touch with  <br/>
                        professional engineers in seconds, <br/>
                        Get easier access to tradespersons around you in minutes  <br/>
                        for your on-time delivery of services; <br/>
                        and skip the traffic to get your technical supplies delivered  <br/>
                        to you at your door-step <br/>
                    </p>
                </Col>
                <Col className='' lg={8} md={12} sm={24}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button icon={<i className="fa-brands fa-google-play"></i>} className='m-0 text-dark' >Google Play</Button>
                        <span className='m-2'></span>
                        <Button icon={<i className="fa-brands fa-app-store"></i>} className='m-0 text-dark'>App Store</Button>
                    </div>
                </Col>

            </Row>

            </Container>
            </div>

            <Container>

                <Row className='py-3 ' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row className='my-2'>
                        <Col className='text-center'><h1>Our Services</h1></Col>
                    </Row>

                    <Row >
                        <Col className='mb-3 d-flex justify-content-center align-items-center'>
                            <Card style={{ width: '18rem', height: '320px', margin:'8px' }} >
                                <Card.Body>
                                    <Card.Title>Engineering Services</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Work with top 
                                        professional and
                                        experienced engineers
                                        in handling your engineering
                                        projects ranging from 
                                        consultation and design
                                        to supervision to 
                                        completion with standard
                                        quality.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='mb-3 d-flex justify-content-center align-items-center' >
                            <Card style={{ width: '18rem', height: '320px',margin:'8px' }}>
                                <Card.Body>
                                    <Card.Title>Supply/Delivery</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Order your materials from
                                        our online store and 
                                        experience and on-time
                                        supply/ delivery of your 
                                        quality materials. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='mb-3 d-flex justify-content-center align-items-center'>
                            <Card style={{ width: '18rem', height: '320px',margin:'8px'}}>
                                <Card.Body>
                                    <Card.Title>Maintainence Services</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Find and Request for 
                                        services from highly skilled 
                                        and experienced 
                                        tradespersons and 
                                        technicians around you. 
                                        Get them at the comfort 
                                        of your home and experience 
                                        service at its best.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>

                </Row>

                <Row className='py-3 text-center' style={{ display: 'flex', justifyContent: 'center' }}>
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

                <Row className='mb-5'style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col className='py-3 text-center' lg={12} md={12} sm={12}>
                        <h1>Earn with us </h1>
                    </Col>

                    <Col className='text-center' lg={6}  sm={12}>
                        <div className='p-3'>
                            <img src='https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='engineer' width='100%'/> 
                        </div>
                       
                    </Col>

                    <Col className='py-3'> 
                        <h2 className='mb-3'>Become an Engineering Consultant</h2>
                        <p>
                            Work with experienced engineers in handling your projects 
                            ranging from consultation and design to supervision to completion with standard quality.
                        </p>

                        <p>
                        Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.
                        </p>

                        <p>
                            Order your materials from our online store and experience 
                            and on-time supply/ delivery of your quality materials.
                        </p>

                        <Button className='rounded-2 py-1'>Learn More</Button>
                    </Col>
                </Row>

                <Row style={{backgroundColor: 'grey', color: 'whitesmoke',display: 'flex', justifyContent: 'center' }} className='rounded-4 text-center mx-3'>
                    <Col className='py-3 text-center' lg={12} md={12} sm={12}>
                        <h2>What do you need? Let's supply it</h2>
                    </Col>

                    <Col>
                        <div>
                            <img src='https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' width='100%'/>
                           
                        </div>
                        <p>Cables</p>
                    </Col>

                    <Col>
                        <div>
                            <img src='https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg' alt='product' width='100%'/>
                            <p>Lightings</p>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <img src='https://images.pexels.com/photos/60049/torx-bits-metal-iron-60049.jpeg?auto=compress&cs=tinysrgb&w=600' alt='product' width='100%'/>
                            <p>Tools and Fittings</p>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <img src='https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' width='100%'/>
                            <p>Power and Back-up</p>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <img src='https://images.pexels.com/photos/2842460/pexels-photo-2842460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' width='100%'/>
                            <p>Engineering Accessories</p>
                        </div>
                    </Col>
                </Row>

                <Row className='py-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col className='py-3' lg={12} md={12} sm={12}>
                        <Row>
                            <Col>
                                <Link><h5>News and Updates</h5></Link>
                            </Col>

                            <Col className='text-end'>
                                <Link><h5>View all </h5></Link>
                            </Col>
                        </Row>
                       
                    </Col>
                        
                    <Col>
                         <div>
                            <img src={CIPAC_cover_photo} alt='news' width='100%'/>
                        </div>
                        <h5>SPAWN Engineering Fest 2024</h5>
                        <p>
                            Order your materials from our online store 
                            and experience and on-time supply/ delivery of your quality materials.
                        </p>
                    </Col>
                       
                    <Col>
                         <div>
                            <img src={CIPAC_cover_photo} alt='news' width='100%'/>
                        </div>
                        <h5>SPAWN Engineering Fest 2024</h5>
                        <p>
                            Order your materials from our online store 
                            and experience and on-time supply/ delivery of your quality materials.
                        </p>
                    </Col>
                       
                    <Col>
                        <div>
                            <img src={CIPAC_cover_photo} alt='news' width='100%'/>
                        </div>
                        <h5>SPAWN Engineering Fest 2024</h5>
                        <p>
                            Order your materials from our online store 
                            and experience and on-time supply/ delivery of your quality materials.
                        </p>
                    </Col>
                </Row>

                <Row className='text-center rounded-5 py-3 mb-3 mx-3'style={{backgroundColor: 'black', color: 'white',display: 'flex', justifyContent: 'center' }}>
                    <Col className='py-3'>
                        <img src={AppScreen} alt='App' width='200px'/>
                    </Col>
                    <Col className='py-5'>
                        <h3>It is easier on our App</h3>
                        <p>Available for Android and iOS devices</p>
                        <a href='/'><Button variant='outline-warning' size='lg' className='rounded-2 py-1'>Download the App </Button></a>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}
export default LandingPage;