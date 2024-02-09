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

    const [company, setCompany] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formFile, setFormFile] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()

        alert('login successful')

        console.log('Login Successful')

        setEmail('')
        setPassword('')
        
    }
  return (
    <div>
        <Header iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles}/>
        <FormContainer>
            <h1 className='d-flex justify-content-center'>Sign Up for contractors </h1>
            <Form onSubmit={submitHandler} className='px-2'>
                <Row>
                    <Form.Group controlId='Company' className='mb-3'>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control 
                            required
                            type='text'
                            placeholder='Enter your company name'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='First Name' className="mb-3">
                        <Form.Label>First Name </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        >

                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='Last Name' className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
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
                        <Form.Control required type="file" placeholder='License' value={formFile} onChange={(e) => setFormFile(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="All information provided in this form regarding my licences and certifications are true to the best of my knowledge." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="I Agree to the Terms and Conditions of use" />
                    </Form.Group>

                    <Row className='py-3 px-2'>
                        <Col>
                            <Button type='submit' variant='warning'>
                                Sign Up
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </Form>

            <Row className='py-3 px-2'>
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

export default SignUpForContractorsPage