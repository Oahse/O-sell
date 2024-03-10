import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Card, Col, Row, Space, Button } from 'antd';
import { LeftOutlined, RightOutlined, MailOutlined, FacebookOutlined, LinkedinOutlined, WhatsAppOutlined, SlackOutlined } from '@ant-design/icons';

import HeaderComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import bg from '../assets/CIPAC_cover_photo.jpg';

const { Content } = Layout;

// Mapping of platform names to their respective icons
const platformIcons = {
    Mail: <MailOutlined style={{ color: '#FD1D1D', fontSize: '1.5rem' }} />,
    Facebook: <FacebookOutlined style={{ color: '#1877F2', fontSize: '1.5rem' }} />,
    LinkedIn: <LinkedinOutlined style={{ color: '#0077B5', fontSize: '1.5rem' }} />,
    Whatsapp: <WhatsAppOutlined style={{ color: '#075E54', fontSize: '1.5rem' }} />,
    Slack: <SlackOutlined style={{ color: '#E01E5A', fontSize: '1.5rem' }} />,
};



const HomePage = ({ name}) => {
    const bimg = bg;

    const [imgheight, SetImgHeight] = useState('40vh');
    const [cardheight, SetCardHeight] = useState('10rem');
    const setHeights = () => {
      const windowWidth = window.outerWidth;
      let imgHeight;
      let cardHeight;
      if (windowWidth <= 240) {
        imgHeight = '215vh';
        cardHeight = '10rem';
      } else if (windowWidth <= 330) {
        imgHeight = '90vh';
        cardHeight = '10rem';
      }else if (windowWidth <= 360) {
        imgHeight = '72vh';
        cardHeight = '10rem';
      } else if (windowWidth <= 375) {
        imgHeight = '74vh';
        cardHeight = '10rem';
        if (window.outerHeight <= 813) {
          imgHeight = '60vh';
          cardHeight = '6rem';
        }
      } else if (windowWidth <= 390) {
        imgHeight = '60vh';
        cardHeight = '8rem';
      } else if (windowWidth <= 416) {
        imgHeight = '56vh';
        cardHeight = '6rem';
        if (window.outerHeight <= 800) {
          imgHeight = '64vh';
          cardHeight = '6rem';
        }
      }else if (windowWidth <= 430) {
        imgHeight = '53vh';
        cardHeight = '6rem';
      } else if (windowWidth <= 459) {
        imgHeight = '66vh';
        cardHeight = '10rem';
      } else if (windowWidth <= 574) {
        imgHeight = '67vh';
        cardHeight = '10rem';
        
      } else if (windowWidth <= 720) {
        
        imgHeight = '60vh';
        cardHeight = '10rem';
      }else if (windowWidth <= 768) {
        imgHeight = '38vh';
        cardHeight = '10rem';
      } else if (windowWidth <= 820) {
        imgHeight = '30vh';
        cardHeight = '10rem';
      }else if (windowWidth <= 912) {
        imgHeight = '30vh';
        cardHeight = '10rem';
      } else if (windowWidth <= 1024) {
        if (window.outerHeight <= 1200) {
          
          imgHeight = '62vh';
          cardHeight = '10rem';
        }else{
          imgHeight = '28vh';
          cardHeight = '10rem';
        }
      } else if (windowWidth <= 1400) {
        console.log(window.outerHeight+'------===-------')
        imgHeight = '34vh';
        cardHeight = '10rem';
      }else {
        imgHeight = '20vh';
        cardHeight = '10rem';
      }
      
    
      SetImgHeight(imgHeight);
      SetCardHeight(cardHeight);
    };
    
  
  useEffect(() => {
    setHeights();

    window.addEventListener('resize', setHeights);
    window.addEventListener('load', setHeights);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', setHeights);
      window.removeEventListener('load', setHeights);
    };
  }, [window.outerWidth]); // Empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <Layout >
      <div style={{ backgroundImage: `url(${bimg})`, backgroundSize: 'cover', height: imgheight }}>
        <HeaderComponent name={name} />
        <Content style={{ padding: '0 24px', minHeight: 'calc(69vh)' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />

          <Row gutter={[16, 16]} justify="center" >
            <Col xs={24} sm={16} md={18} lg={18} xl={16} > 
              <Card
                hoverable
                style={{ width: '100%' }}
                bordered={false}
              >
                <p style={{ fontWeight: 'bold', fontSize: '1rem', minHeight: cardheight }}>
                  "I am a software engineer with a passion for building beautiful, functional, and scalable applications. A web Developer, Python Developer, React Lover, C Programmer. Object-Oriented Languages. A music enthusiast"
                </p>
                
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6} lg={6} xl={4}>
              <Card
                bordered={false}
                style={{ position: 'relative', padding:20, marginLeft:16 }}
              >
                
              </Card>
            </Col>
          </Row>

        </Content>
      </div>
      <Content style={{}}>
          

        </Content>
      
      <FooterComponent name={name} />
    </Layout>
  );
};

export default HomePage;
