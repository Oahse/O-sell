import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
// import userimg from '../assets/user.png'
// import profile from '../assets/profile.JPG'
import { Input, Button, Form, Space, Slider, Card, List, Skeleton,   Drawer, Select, Avatar, Pagination } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Container, Row, Col} from 'react-bootstrap';
import './ProfilePage.css'


function ProfilePage() {

    const name = "Home"
    
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');

    
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
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
        setMargin('20px');
        
        }
    };


    useEffect(() => {
        
        
        window.addEventListener('scroll', handleScroll);
        // window.addEventListener('resize', handleResize);

        // handleResize()

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('resize', handleResize); 
        };

    },  []);
  return (
    <div>
        <Container fluid>
            <Row className='py-5 gradient-bg'>
                <Col className='text-center  mt-5' sm={12} md={6} lg={6}>
                    <Avatar shape="circle" size={100} icon={<UserOutlined />} className='m-1' />
                    {/* <div className='rounded-circle'><img src={userimg} alt='user' width='50%' className='rounded-circle'/></div> */}
                </Col>
                <Col className='py-4 mt-5'>
                    <h2>Olaitan Chinedu Rufai <span><i class="fa-light fa-badge-check text-success"></i></span></h2>
                    <p><span><i className="fa-light fa-briefcase"></i></span>  Professional Engineer</p>
                    <p><span><i className="fa-duotone fa-map-location-dot"></i></span>  Ikoyi, Lagos State, Nigeria</p>
                    <p><span><i className="fa-light fa-phone text-success"></i></span>  +2349012345678</p>
                    <p><span><i className="fa-light fa-envelope text-primary"></i></span>  ocrafiu@ncc.com</p>

                    <Button>Edit Profile</Button>
                </Col>
            </Row>

            <Row className='p-2 ' lg={2} md={2} sm={1} xs={1}>
               
                   
                    <Col className='mb-2'><h3>User ID: </h3> <span><p>110022</p></span></Col>
                    <Col className='mb-2'><h3>Account Type: </h3> <span><p>Individual</p></span></Col>
                    <Col className='mb-2'><h3>Status: </h3> <span><p>Verified</p></span></Col>
                    <Col className='mb-2'><h3>National ID: </h3> <span><p>110022456098</p></span></Col>
                    <Col className='mb-2'><h3>Certification: </h3> <span><p>COREN</p></span></Col>
                    <Col className='mb-2'><h3>Certification ID: </h3> <span><p>110022</p></span></Col>
                  
                    
               
            </Row>

            <Row className='p-3 mb-3 text-center' lg={4} md={4} sm={3}>
                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>
                        <h1><i className="fa-duotone fa-file-chart-column"></i></h1>
                        <h4>Reports</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>
                            
                        <h1><i className="fa-duotone fa-heart-circle-check"></i></h1>
                        <h4>Saved Items</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>    
                        <h1><i className="fa-duotone fa-star-sharp-half"></i></h1>
                        <h4>Reviews</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>
                        <h1><i className="fa-light fa-files"></i></h1>
                        <h4>Submissions</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>   
                        <h1><i className="fa-duotone fa-map-location-dot"></i></h1>
                        <h4>Address Book</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Transactions'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>
                        <h1><i className="fa-duotone fa-wallet"></i></h1>
                        <h4>Payment</h4>
                    </Link>
                </Col>

                <Col className='mb-5'>
                    <Link to={{pathname:`/profile/reports/${1455}`}} state={{indexpage:'Dashboard'}} style={{textDecoration:'none', color:'black', cursor:'pointer'}}>    
                        <h1><i className="fa-light fa-right-from-bracket"></i></h1>
                        <h4>Logout</h4>
                    </Link>
                </Col>
            </Row>
        </Container>        
    </div>
  )
}

export default ProfilePage