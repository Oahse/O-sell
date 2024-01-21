import React from 'react'
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg'
import physics from '../assets/physics.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


function Home() {
  return (
    <div>
        <div class="showcase">
          
             <img src={CIPAC_cover_photo} alt="showcase" width="100%" />
            
            <Container>
                    <div class="text container">
                        
                        <h1 class="fs-1">Your Engineering Services <br/>
                            Made Easier, <br/>
                            Made Better,</h1>
                        <p class="fs-4">
                            At the Comfort of your space,  get in-touch with 
                            professional engineers in seconds,
                            Get easier access to tradespersons around you in minutes 
                            for your on-time delivery of services;
                            and skip the traffic to get your technical supplies delivered 
                            to you at your door-step.
                        </p>
                        <div class="my-5">
                            <Button variant='outline-warning' size="lg" className='rounded-5' href="https://www.google.com" target="_blank" rel="noopener noreferrer" >Google Play   <i class="bi bi-google-play"></i></Button>
                            <Button variant='outline-warning' size="lg" className='rounded-5' href="https://www.google.com" target="_blank" rel="noopener noreferrer">App store  <i class="bi bi-apple"></i></Button>
                        </div>
                    </div>
                
                

            </Container>
                    
        </div>

        <Container>

                <Row className='py-3'>
                    <Row className='my-3'>
                        <Col className='text-center'><h1>Our Services</h1></Col>
                        {/* <Col className='text-center'><Button className='rounded-5 px-4' variant='success'>Find Out More</Button></Col> */}
                    </Row>

                    <Row>
                        <Col>
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



                <Row className='py-5'>
                    <Row className='text-center py-3'>
                        <Col><h1>Our Clients</h1></Col>
                    </Row>

                    <Row>
                        <Col><img src={physics} alt='logo'/></Col>
                        <Col><img src={physics} alt='logo'/></Col>
                        <Col><img src={physics} alt='logo'/></Col>
                        <Col><img src={physics} alt='logo'/></Col>
                        <Col><img src={physics} alt='logo'/></Col>
                        <Col><img src={physics} alt='logo'/></Col>
                    </Row>
                </Row>


        </Container>

    </div>
  )
}

export default Home