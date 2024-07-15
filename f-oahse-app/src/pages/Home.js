import React, { useState, useEffect } from 'react';
import ResponsiveHeader from '../components/Header';
import Footer from '../components/Footer';
import { Avatar, Segmented } from 'antd';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CartPage from './Cart';
import TradespersonSearch from './Engineers';
import Shop from './Shop';
import ProfilePage from './Profile';
import LandingPage from './LandingPage';
import PaymentsForm from './PaymentsPage';
import Jobs from './Jobs';
import JobDetails from '../pages/JobDetails';

function Home({ unknownRoute }) {
    console.error(unknownRoute, "]]]]]]");
    
    const [alignValue, setAlignValue] = useState(unknownRoute || 'Shop');
    
    const DATA = [
        { name: "Nike", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand.", price: "$1000" },
        { name: "Apple", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company.", price: "$1000" },
        { name: "Samsung", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate.", price: "$1000" },
        { name: "Coca-Cola", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand.", price: "$1000" },
        { name: "Toyota", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer.", price: "$1000" },
        { name: "Amazon", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company.", price: "$1000" },
        { name: "Microsoft", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation.", price: "$1000" },
        { name: "Adidas", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories.", price: "$1000" },
        { name: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain.", price: "$1000" },
        { name: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products.", price: "$1000" },
    ];

    const handleUrlChange = (newUrl) => {
        window.history.pushState(null, '', '#' + newUrl);
    };

    useEffect(() => {
        if (unknownRoute) {
            const routePath = unknownRoute.slice(1);
            const capitalizedText = routePath.charAt(0).toUpperCase() + routePath.slice(1);
            setAlignValue(capitalizedText);
        }
    }, [unknownRoute]);

    useEffect(() => {
        renderPanel(alignValue);
    }, [alignValue]);

    const renderPanel = (value) => {
        console.log(alignValue, value, '\\')
        switch (value) {
            case 'Tradesperson':
                handleUrlChange('/tradesperson');
                return <TradespersonSearch DATA={DATA} />;
            case 'Shop':
                handleUrlChange('/shop');
                return <Shop DATA={DATA} />;
            case 'Cart':
                handleUrlChange('/cart');
                return <CartPage DATA={DATA} />;
            case 'Account':
                handleUrlChange('/account');
                return <ProfilePage DATA={DATA} />;
            case 'Home':
                handleUrlChange('/');
                return <LandingPage DATA={DATA} />;
            case 'Jobs':
                handleUrlChange('/jobs');
                return <Jobs DATA={DATA}/>
            
            default:
                handleUrlChange('/shop');
                return <Shop DATA={DATA} />;
        }
    };

    return (
        <div className='bg-home bg-light'>
            <div className="home-background">
                <ResponsiveHeader defaultValue={alignValue} onChange={setAlignValue} />
                <Container fluid className='py-3 d-flex flex-column align-items-center header-bottom'>
                    <Segmented
                        value={alignValue}
                        onChange={setAlignValue}
                        options={[
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Home' ?'fa-solid':'fa-light'} fa-house`} style={{ fontSize: '18px', marginRight:'6px' }}></i> {alignValue === 'Home' ? 'Home' : null}
                                    </span>
                                ),
                                value: 'Home'
                            },
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Tradesperson' ?'fa-solid':'fa-light'} fa-user-helmet-safety`} style={{ fontSize: '18px', marginRight:'6px' }}></i>{alignValue === 'Tradesperson' ? 'Tradesperson' : null}
                                    </span>
                                ),
                                value: 'Tradesperson'
                            },
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Shop' ?'fa-solid':'fa-light'} fa-shop`} style={{ fontSize: '18px', marginRight:'6px' }}></i>{alignValue === 'Shop' ? 'Shop' : null}
                                    </span>
                                ),
                                value: 'Shop'
                            },
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Cart' ?'fa-solid':'fa-light'} fa-cart-shopping`} style={{ fontSize: '18px', marginRight:'6px' }}></i> {alignValue === 'Cart' ? 'Cart' : null}
                                    </span>
                                ),
                                value: 'Cart'
                            },
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Jobs' ?'fa-solid':'fa-light'} fa-screwdriver-wrench`} style={{ fontSize: '18px', marginRight:'6px' }}></i>{alignValue === 'Jobs' ? 'Jobs' : null}
                                    </span>
                                ),
                                value: 'Jobs'
                            },
                            {
                                label: (
                                    <span className='p-1'>
                                        <i className={`${alignValue === 'Account' ?'fa-solid':'fa-light'}  fa-user`} style={{ fontSize: '18px', marginRight:'6px' }}></i>{alignValue === 'Account' ? 'Account' : null}
                                    </span>
                                ),
                                value: 'Account'
                            },
                            
                        ]}
                        className="segmented-wrapper"
                    />
                    <div style={{ width: '100%', marginTop: '20px' }}>
                        {renderPanel(alignValue)}
                    </div>
                </Container>
                <Footer />
            </div>
            
        </div>
    );
}

export default Home;
