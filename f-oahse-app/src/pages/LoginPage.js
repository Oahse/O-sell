import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Loader from '../components/Loader'
// import Message from '../components/Message'
import FormContainer from '../components/FormContainer'



function LoginPage({location}, props) {
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) =>{
        e.preventDefault()

        alert('login successful')

        console.log('Login Successful')

        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='loginPage'>
          <Header  iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
        <FormContainer>
        <h1>Login</h1>
        {/* {error &&<Message variant='danger'>{error}</Message>}
        {loading && <Loader/>} */}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Row className='py-3'>
                <Col>
                    <Button type='submit' variant='warning'>
                        Log In
                    </Button>
                </Col>
            </Row>
        </Form>

        <Row className='py-3'>
            <Col> 
                <Col>
                    <Link
                        to={`reset_password/`}
                    >
                        Forgot Password ?
                    </Link>
                </Col>
                
                <br/>
                Don't Have an account? <Link 
                        to={'/signup'} 
                        >
                    Sign Up
                </Link>

                <br/>
                <Col>
                    Are you an independant or Corporate Contractor? <Link 
                            to={'/signup-for-contractors'} 
                            >
                        Sign Up Here
                    </Link>
                </Col>
               
            </Col>
        </Row>
    </FormContainer>

    <Footer/>
    </div>
  
  )
}

export default LoginPage