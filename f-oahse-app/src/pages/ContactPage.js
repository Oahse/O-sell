import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ContactPage.css';
import support1 from '../assets/support1.jpg'

function ContactPage() {
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
    <div>
        <Header className="" iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} margin={margin}/>
        <SideNavBar iconColor={iconColor}/>
        
        <div  className='supportPage' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <img src={support1} alt='support' width='100%' style={{filter: "brightness(50%)"}}/>
            </div>
       
            <div className='text-center ' style={{position: 'absolute', color: 'white', }}>
                <h1>Support</h1>
                <p>lorem ipsum dolor nunvult element d'ecole</p>
            </div>
        </div>     

        <Container>
            <Row className='py-3 text-center'>
                <Col>
                    <h2>Need help with any of our services?</h2>
                    <p>Here are various ways to connect with us.</p>
                </Col>
            </Row>
            <Row className='py-3'>
                <Col>
                    <Card className='text-center p-5 mb-3'>
                        <Card.Title><i className="fa fa-building" aria-hidden="true" /> Our Office Locations</Card.Title>
                        <Card.Text>
                            <p>
                                <b>Corporate Office: </b> 20, Wilson Avenue, Winsconsin Gotham City. <br/>
                                <b>Branch Office: </b> Q191, Leathbridge Avenue, Nova Metropolis, ON, Lagos. 
                        
                            </p> 
                        </Card.Text>
                    </Card>
                </Col>

                <Col>
                    <Card className='text-center p-5 mb-3'>
                        <Card.Title><i className="fa fa-envelope" aria-hidden="true" /> E-Mail </Card.Title>
                        <Card.Text> <a href='mailto: enquiries@oahse.com'>enquiries@oahse.com</a> </Card.Text>
                    </Card>
                </Col>

                <Col>
                    <Card className='text-center p-5 mb-3'>
                        <Card.Title><i className="fa fa-phone" aria-hidden="true" /> Call Center</Card.Title>
                        <Card.Text>
                            <a href='tel: +2348023456789'> 08023456789</a> <br/>
                            <a href='https://wa.me/08012345678'> <i class="bi bi-whatsapp" aria-hidden="true"/> 08012345678</a>
                        
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Footer/>
    </div>
  )
}

export default ContactPage