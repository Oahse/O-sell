import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='py-3'>
        <Container>

            <Row>
                <Col className='py-3'>
                    <h1>Company Logo</h1>
                </Col>
            </Row>

            <Row className='text-center'>
                <Col>
                    <ul>
                        <li><h2>Company</h2></li>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>News room</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Investors</a></li>
                    </ul>
                </Col>
                    
                <Col>
                    <ul>
                        <li><h2>Partnership</h2></li>
                        <li><a href='/'>Vendors</a></li>
                        <li><a href='/'>Tradespersons</a></li>
                        <li><a href='/'>Engineers</a></li>
                        <li><a href='/'>Engineering Companies</a></li>
                        <li><a href='/'>Franchise</a></li>
                        <li><a href='/'>Influencers</a></li>
                    </ul>
                </Col>

                <Col>
                    <ul>
                        <li><h2>Products</h2></li>
                        <li><a href='/'>Supply</a></li>
                        <li><a href='/'>E-Commerce</a></li>
                        <li><a href='/'>Consultancy</a></li>
                        <li><a href='/'>Maintainence</a></li>
                        <li><a href='/'>Engineering</a></li>
                    </ul>
                </Col>

                <Col>
                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Google Play   <i class="bi bi-google-play"></i> </a></li>
                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> App Store  <i class="bi bi-apple"></i> </a></li>
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col><small>C. 2024 SPAWN Technologies</small></Col>

                <Col className='text-center'>
                    <small><a href='/'>Legal & Compliance</a></small>
                    <small><a href='/'>Cookies</a></small>
                    <small><a href='/'>Security</a></small>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer