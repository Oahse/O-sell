import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/MobileSideBar';
import Footer from '../components/Footer';
import { Segmented, Tabs,Avatar } from 'antd';
import { Container} from 'react-bootstrap';
import Order from './Orders';
import ProfileDashboard from './ProfileDashboard';
import ProfileTransactions from './ProfileTransactions';
import ProfileReview from './ProfileReviews';
import {Link} from "react-router-dom";
import './ProfileReports.css'



function ProfileReport() {

    const name = "Home"
    
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('white');
    const [margin, setMargin] = useState('0px');
    const [alignValue, setAlignValue] = useState('Dashboard');

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
        
        if (value === 'Orders') {
            return <Order DATA={DATA} />;
        } else if (value === 'Dashboard') {
            return <ProfileDashboard DATA={DATA} />;
        } else if (value ==='Transactions'){
            return <ProfileTransactions DATA={DATA} />;
        }else if (value ==='Reviews') {
            return <ProfileReview DATA={DATA} />;
        }else {
            // Return other components or handle other cases
            return null;
        }  

    };

  return (
    <div style={{backgroundColor:'#f9f9f9'}}>
        <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} margin={margin} 
        profile={
            <Link to="/profile">
            <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${1}`} />
            </Link>} />
        <div className='mini-navbar ms-auto'>
            
        </div>
        <SideNavBar iconColor={iconColor}/>
        <Container fluid className='py-3 d-flex flex-column align-items-center'>
            <Segmented
                    defaultValue="Dashboard"
                    onChange={(value) => setAlignValue(value)}
                    options={['Orders', 'Dashboard', 'Transactions', 'Reviews']}
                    style={{}}
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

export default ProfileReport;
