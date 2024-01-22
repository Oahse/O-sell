import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Body from '../components/Body';
import {faGooglePlay, faAppStore} from '@fortawesome/free-brands-svg-icons'
import SideNavBar from '../components/MobileSideBar';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Icon from '../components/Icon';
import Footer from '../components/Footer';

function About() {
    const name = "Home"
    
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [bgimageheight, setBgImageHeight] =useState(162);
    const [isMobile, setIsMobile] = useState(false);
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
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
    const checkIfMobile = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 767); // Adjust threshold as needed
    };
    const handleResize = () => {
        var bgimg = document.getElementById('bgimage');
        setBgImageHeight(bgimg.height-30);
        
        checkIfMobile();
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
    
  
    return (
        <div className='about'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} margin={margin} />
            <div >
            <img src={CIPAC_cover_photo} alt="showcase" width="100%" id='bgimage' />
              {isMobile ? 
                  (<div className='image-text row p-4 mt-5 mb-5'>
                      <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 mb-5  float-left'>
                          <h2>Your Engineering Services <br/>
                              Made Easier,
                              Made Better,
                              <div className='mt-2' style={{display:'flex',flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                                <IconButton icon={faGooglePlay} href="#" text="Google Play" className='m-0' />
                                <IconButton icon={faAppStore} href="#" text="App Store" className='m-0' />
                              </div>
                          </h2>
                          
                      </div>
                      
                    </div>
                  ):
                  (<div className='image-text row p-4'>
                      <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  float-left'>
                        <h2>Your Engineering Services <br/>
                            Made Easier,
                            Made Better,
                        </h2>
                        <small>
                          At the Comfort of your space,  get in-touch with  <br/>
                          professional engineers in seconds, <br/>
                          Get easier access to tradespersons around you in minutes  <br/>
                          for your on-time delivery of services; <br/>
                          and skip the traffic to get your technical supplies delivered  <br/>
                          to you at your door-step <br/>
                        </small>
                    </div>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float-right' style={{marginTop:'100px'}}>
                      <IconButton icon={faGooglePlay} href="#" text="Google Play" className='m-1' />
                      <IconButton icon={faAppStore} href="#" text="App Store" className='m-1' />
                    </div>
                  </div>
                  )
              }
              
            
        </div>
            <Footer className='footer'/>
        </div>
    );
};

export default About;