import {React, useState, useEffect, useRef,faGooglePlay, faAppStore,Swiper, SwiperSlide,Navigation, Row, Col, Container } from '../components/all_imports';
import './Home.css';
import '../setting/opensanregular.css'
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Search from '../components/Search';
import {Button, Card} from 'react-bootstrap'
import metalogo from '../assets/Meta-Logo.png'


function Home (props){
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [index, setIndex] = useState(0);
    const [bgimageheight, setBgImageHeight] =useState(162);
    const [isMobile, setIsMobile] = useState(false);
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

    useEffect(() => {
        
        
        window.addEventListener('scroll', handleScroll);
        // window.addEventListener('resize', handleResize);

        // handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('resize', handleResize); 
        };

    }, []);

  
    return (
        <div className='service'>
            <Header iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <SideNavBar iconColor={iconColor}/>

            <div className='showcase-pic' >
            <Container >
                <Row className='showcase' style={{ alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Col className='' lg={8} md={12} sm={12}>
                                    <h1>Your Engineering Services <br/>
                                        Made Easier,
                                        Made Better
                                    </h1>
                                    <p>
                                        At the Comfort of your space,  get in-touch with  <br/>
                                        professional engineers in seconds, <br/>
                                        Get easier access to tradespersons around you in minutes  <br/>
                                        for your on-time delivery of services; <br/>
                                        and skip the traffic to get your technical supplies delivered  <br/>
                                        to you at your door-step <br/>
                                    </p>
                        </Col>
                    <Col className=''>
                        <IconButton icon={faGooglePlay} to="#" text="Google Play" className='m-0' />
                        <IconButton icon={faAppStore} to="#" text="App Store" className='m-0' />
                    </Col>
                </Row>
            </Container>
            </div>
           
           

            {/* <div  className='supportPage' style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                <img src={CIPAC_cover_photo} alt='support' width='100%' style={{filter: "brightness(70%)"}}/>

                <Row style={{position: 'absolute', color: 'white', }}>
                    <Container>
                        <Col className=' mb-3' >
                            <h1>Your Engineering Services <br/>
                                Made Easier,
                                Made Better
                            </h1>
                            <small>
                                At the Comfort of your space,  get in-touch with  <br/>
                                professional engineers in seconds, <br/>
                                Get easier access to tradespersons around you in minutes  <br/>
                                for your on-time delivery of services; <br/>
                                and skip the traffic to get your technical supplies delivered  <br/>
                                to you at your door-step <br/>
                            </small>
                        </Col>
                
                        <Col >
                            <IconButton icon={faGooglePlay} to="#" text="Google Play" className='m-0 mb-3' />
                            <IconButton icon={faAppStore} to="#" text="App Store" className='m-0' />
                        </Col>
                    </Container>
                </Row>

            </div>  */}

            <Container>

                <Row className='py-3'>
                    <Row className='my-3'>
                        <Col className='text-center'><h1>Our Services</h1></Col>
                        
                    </Row>

                    <Row>
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem', height: '320px' }}>
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

                        <Col>
                            <Card style={{ width: '18rem', height: '320px' }}>
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

                        <Col>
                            <Card style={{ width: '18rem', height: '320px'}}>
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

                <Row className='py-3'>
                    <Col className='text-center py-3' lg={12} md={12} sm={12}>
                        <h1>Our Clients</h1>
                    </Col>

                    <Col>
                        <img src={metalogo} alt='meta logo'/>
                    </Col>

                    <Col>
                        <img src={metalogo} alt='meta logo'/>
                    </Col>

                    <Col>
                        <img src={metalogo} alt='meta logo'/>
                    </Col>


                </Row>

                <Row>
                    <Col>
                        <h1>Earn with us </h1>
                    </Col>

                    <Col>
                        
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>What do you need? Let's supply it</h2>
                    </Col>

                    <Col>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>News and Updates</h2>
                    </Col>

                    <Col></Col>
                </Row>

                <Row className='text-center py-3 mb-3'>
                    <Col lg={12} md={12} sm={12}>
                        <h2>It is easier on our App</h2>
                    </Col>

                    <Col className='py-3'>
                        <a href='/'><Button variant='outline-warning' size='lg' className='rounded-5'>Download the App </Button></a>
                    </Col>
                </Row>

            </Container>

           
            
            
            <Footer className='footer'/>
        </div>
    );
}
export default Home;