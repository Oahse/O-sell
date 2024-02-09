import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import support1 from '../assets/support1.jpg'

function Contact() {
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };

  return (
    <div>
        <Header  iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
        <img src={support1} alt='support' width='100%'/>
        <Row>
            <Col className='text-center'>
                
            </Col>
            
        </Row>
        

        <Container>

        </Container>

        <Footer/>
    </div>
  )
}

export default Contact