
import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Loader from '../components/Loader'
// import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

function SignUpPage() {
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
    <div className='signupPage'>
        <Header  iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
        <FormContainer>
            <h1>Sign Up</h1>
            {/* {error &&<Message variant='danger'>{error}</Message>}
            {loading && <Loader/>} */}

            <Form onSubmit={submitHandler}>
                <Row>
                    <Form.Group as={Col} controlId='First Name' className="mb-3">
                        <Form.Label>First Name </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your First Name'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >

                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='Last Name' className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your Last Name'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >

                        </Form.Control>
                    </Form.Group>        

                    <Form.Group  controlId='email' className="mb-3">
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

                    <Form.Group controlId='password' className="mb-3">
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

                    <Form.Group as={Col} controlId='Category' className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select>
                            <option>Category</option>
                            <option value="1">Engineer</option>
                            <option value="2">Technician</option>
                            <option value="3">Superhero</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>License and Certifications</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="All information provided in this form regarding my licences and certifications are true to the best of my knowledge." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="I Agree to the Terms and Conditions of use" />
                    </Form.Group>

                    <Row className='py-3'>
                        <Col>
                            <Button type='submit' variant='warning'>
                                Sign Up
                            </Button>
                        </Col>
                    </Row>

                </Row>
           
            </Form>

            <Row className='py-3'>
                <Col> 
                    
                    <br/>
                    Already Have an account? <Link 
                            to={'/login'} 
                            >
                        Log in
                    </Link>
                </Col>
            </Row>
        </FormContainer>

        <Footer/>
    </div>
  )
}

export default SignUpPage