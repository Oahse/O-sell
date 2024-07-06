import React, { useState, useEffect } from 'react';
import ResponsiveHeader from '../components/Header';

import Footer from '../components/Footer';
import { Segmented, Tabs,Avatar } from 'antd';
import { Container} from 'react-bootstrap';
import { useLocation ,Link } from 'react-router-dom';
import CartPage from './Cart';
import TradespersonSearch from './Engineers';
import ProfilePage from './Profile';
import { UserOutlined, ShoppingCartOutlined, CustomerServiceOutlined, ShopOutlined, HomeOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons'; // Import the wrench icon



function Home() {

    const name = "Home"
    const location = useLocation();
    console.log(location);
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('white');
    const [margin, setMargin] = useState('0px');
    const [alignValue, setAlignValue] = useState('Shop');

    const DATA = [
        { name: "Nike", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand.",price: "$1000" },
        { name: "Apple", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company.",price: "$1000" },
        { name: "Samsung", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate.",price: "$1000" },
        { name: "Coca-Cola", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand.",price: "$1000" },
        { name: "Toyota", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer.",price: "$1000" },
        { name: "Amazon", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company.",price: "$1000" },
        { name: "Microsoft", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation.",price: "$1000" },
        { name: "Adidas", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories.",price: "$1000" },
        { name: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain.",price: "$1000" },
        { name: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products.",price: "$1000" },
      ];

    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color: iconColor
    };

    const renderPanel = (value) => {
        if (value === 'Tradesperson') {
          
            return <TradespersonSearch DATA={DATA} />;
        } else if (value === 'Shop') {
            return <CartPage DATA={DATA} />;
        } else if (value ==='Cart'){
            return <CartPage DATA={DATA} />;
        }else if (value ==='Account') {
            return <ProfilePage DATA={DATA} />;
        }else if (value ==='Home') {
          return <ProfilePage DATA={DATA} />;
        }else {
            // Return other components or handle other cases
            return null;
        }   
        

    };

  return (
    <div className="home-background">
        <ResponsiveHeader />
        <Container fluid className='py-3 d-flex flex-column align-items-center header-bottom'>
            <Segmented
                    defaultValue={alignValue}
                    onChange={(value) => setAlignValue(value)}
                    options={[
                      {
                        label: (
                          <span>
                            <HomeOutlined style={{fontSize:'18px'}} /> {alignValue === 'Home' ? 'Home' : null}
                          </span>
                        ),
                        value: 'Home'
                      },
                      {
                        label: (
                          <span>
                            <FontAwesomeIcon icon={faWrench} style={{fontSize:'18px'}} /> {alignValue === 'Tradesperson' ? 'Tradesperson' : null}
                          </span>
                        ),
                        value: 'Tradesperson'
                      },
                      {
                        label: (
                          <span>
                            <ShopOutlined style={{fontSize:'18px'}} /> {alignValue === 'Shop' ? 'Shop' : null}
                          </span>
                        ),
                        value: 'Shop'
                      },
                      {
                        label: (
                          <span>
                            <ShoppingCartOutlined style={{fontSize:'18px'}} /> {alignValue === 'Cart' ? 'Cart' : null}
                          </span>
                        ),
                        value: 'Cart'
                      },
                      {
                        label: (
                          <span>
                            <UserOutlined style={{fontSize:'18px'}} /> {alignValue === 'Account' ? 'Account' : null}
                          </span>
                        ),
                        value: 'Account'
                      },
                    ]}
                    className="segmented-wrapper"
                    
            />
            <div style={{width:'100%', marginTop:'20px'}}>
                {renderPanel(alignValue)}
            </div>
        </Container>

        <Footer/>
    </div>
  );
}

export default Home;