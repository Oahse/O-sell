import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './Find.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {faGooglePlay, faAppStore} from '@fortawesome/free-brands-svg-icons'
import SideNavBar from '../components/MobileSideBar';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Icon from '../components/Icon';
import carousel_img1 from '../assets/carousel_img1.jpg';
import Search from '../components/Search';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


function Find(props){
    const name = "Services";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const [bgimageheight, setBgImageHeight] =useState(162);
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };
    const products = [
        { name: "Car", image: "https://picsum.photos/200/150?random=1", price: "$1000" },
        { name: "Laptop", image: "https://picsum.photos/200/150?random=2", price: "$800" },
        { name: "Smartphone", image: "https://picsum.photos/200/150?random=3", price: "$500" },
        { name: "Headphones", image: "https://picsum.photos/200/150?random=4", price: "$100" },
        { name: "Watch", image: "https://picsum.photos/200/150?random=5", price: "$300" },
        { name: "Camera", image: "https://picsum.photos/200/150?random=6", price: "$1200" },
        { name: "Shoes", image: "https://picsum.photos/200/150?random=7", price: "$80" },
        { name: "Sunglasses", image: "https://picsum.photos/200/150?random=8", price: "$50" },
        { name: "Backpack", image: "https://picsum.photos/200/150?random=9", price: "$40" },
        { name: "Gaming Console", image: "https://picsum.photos/200/150?random=10", price: "$400" },
      ];
    const companyBrands = [
        { brand: "Nike", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand." },
        { brand: "Apple", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company." },
        { brand: "Samsung", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate." },
        { brand: "Coca-Cola", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand." },
        { brand: "Toyota", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer." },
        { brand: "Amazon", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company." },
        { brand: "Microsoft", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation." },
        { brand: "Adidas", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories." },
        { brand: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain." },
        { brand: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products." },
      ];
    return (
        <div className='service'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['helo','hehere']} />
            </div>
            <div>
                <SideNavBar iconColor={iconColor}/>
                
                <div className="col row p-2 m-0">
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <div className="card">
                      <div className="card-body p-1 align-items-center">
                        <img src="https://picsum.photos/200/150?random=19" alt="Book 1" className="find-image" />
                        <h5 className="card-title">Electronics</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Btn href="#" text="See more" className='mb-0 ml-0' />
                      </div>
                    </div>
                  </div>
                
                
                </div>
                
                <div>
                    
                </div>
            </div>
            <div className='earn-with-oahse'>
                <div className="card  d-flex justify-content-center">
                      <div className="card-body ">
                        
                        <h4 className="card-title  d-flex justify-content-center">Earn with <span className="ml-5"> Oahse</span></h4>

                        <div className='titles  d-flex justify-content-center'>
                            <Btn className="earn-title" text="Engineer"/>
                            <Btn className="earn-title" text="Company"/>
                            <Btn className="earn-title" text="Vendor"/>
                        </div>
                        {
                          
                        }
                        
                      </div>
                  </div>
            </div>
            <Footer className='footer'/>
        </div>
    );
}
export default Find;