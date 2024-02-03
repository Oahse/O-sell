import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Loader from '../components/Loader'
// import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

function SignUpForContractorsPage() {
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };
  return (
    <div>
        <Header iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles}/>
        <FormContainer>
            SignUpForContractorsPage
        </FormContainer>
    

        <Footer/>
    </div>
  )
}

export default SignUpForContractorsPage