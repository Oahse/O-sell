import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './Service.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo .jpg';
import carousel_img1 from '../assets/carousel_img1.jpg';
import DropDown from '../components/DropDown';
import { Swiper, SwiperSlide } from 'swiper/react';
import Btn from '../components/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


function Service (props){
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
    return (
        <div className='service'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <DropDown text="Categories" items={['helo','hehere']}/>
            </div>
            <div>
                <SideNavBar iconColor={iconColor}/>
                <Swiper navigation={true} modules={[Navigation]} className="carousel" loop={true}>
                    {products.map((product, index) => (
                            <SwiperSlide><img src={product.image} alt='' /></SwiperSlide>
                    ))}
                    
                </Swiper>
                <div>
                  <h4 className='px-2 m-2 mt-4'>New Arrivals</h4>
                  <div class="horizontal-scroller" style={{width:window.innerWidth-30}}>
                  
                    <div class="scroll-content">
                        {products.map((product, index) => (
                            <div key={index} className="scroll-item">
                            <img src={product.image} alt='' />
                            <h6 className='mb-0'>{product.name}</h6>
                            <h5 className='mt-1'>
                                {product.price}<br />
                                <Btn href="#" text="See more" className='m-2' />
                            </h5>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
            <Footer className='footer' top = {bgimageheight+window.innerHeight+30}/>
        </div>
    );
}
export default Service;