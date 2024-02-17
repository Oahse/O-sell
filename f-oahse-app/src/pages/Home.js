import {React, useState, useEffect, useRef,faGooglePlay, faAppStore,Swiper, SwiperSlide,Navigation, Row, Col, Container } from '../components/all_imports';
import './Home.css';
import '../setting/opensanregular.css'
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Search from '../components/Search';


function Home (props){
    const [iconColor, setIconColor] = useState('white');
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [margin, setMargin] = useState('20px');
    const [index, setIndex] = useState(0);
    const [bgimageheight, setBgImageHeight] =useState(162);
    const [isMobile, setIsMobile] = useState(false);
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
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
        setMargin('0px');
        
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
        // window.addEventListener('resize', handleResize);

        // handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('resize', handleResize); 
        };

    }, []);

  
    return (
        <div className='service'>
            <Header iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <SideNavBar iconColor={iconColor}/>

            <div  className='supportPage' style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>
                <img src={CIPAC_cover_photo} alt='support' width='100%' style={{filter: "brightness(70%)"}}/>

                <Row style={{position: 'absolute', color: 'white', }}>
                    <Container>
                    <Col className='' >
                <h1>Your Engineering Services <br/>
                    Made Easier,
                    Made Better</h1>
                    <small>
                          At the Comfort of your space,  get in-touch with  <br/>
                          professional engineers in seconds, <br/>
                          Get easier access to tradespersons around you in minutes  <br/>
                          for your on-time delivery of services; <br/>
                          and skip the traffic to get your technical supplies delivered  <br/>
                          to you at your door-step <br/>
                        </small>
            </Col>
                
            <Col >
                <IconButton icon={faGooglePlay} to="#" text="Google Play" className='m-0' />
                <IconButton icon={faAppStore} to="#" text="App Store" className='m-0' />
            </Col>
                    </Container>
       
                </Row>

        </div> 
            
            
            <Footer className='footer'/>
        </div>
    );
}
export default Home;