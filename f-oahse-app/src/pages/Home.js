import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

function Home() {
    const name = "Home"
    
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [bgimageheight, setBgImageHeight] =useState(162);
    
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
    
    const handleResize = () => {
        var bgimg = document.getElementById('bgimage');
        setBgImageHeight(bgimg.height-30);
        console.log(window.outerHeight);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    // Get the height of the window
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Log the window height to the console
    console.log("Window Height:",window.innerHeight,bgimageheight+window.innerHeight);

    return (
        <div className='home'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} margin={margin} />
            <Body iconColor={iconColor}  bgimageheight={bgimageheight}/>
            <Footer className='footer' top = {bgimageheight+window.innerHeight+30}/>
        </div>
    );
};

export default Home;