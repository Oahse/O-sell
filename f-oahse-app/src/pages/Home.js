import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
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
import DropDown from '../components/DropDown';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Search from '../components/Search';


function Home (props){
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
        { brand: "Nike", logo: "https://picsum.photos/200/150?random=1999", description: "A global sportswear and equipment brand." },
        { brand: "Apple", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company." },
        { brand: "Samsung", logo: "https://picsum.photos/200/150?random=23", description: "A South Korean conglomerate." },
        { brand: "Coca-Cola", logo: "https://picsum.photos/200/150?random=24", description: "A world-renowned beverage brand." },
        { brand: "Toyota", logo: "https://picsum.photos/200/150?random=25", description: "A Japanese automotive manufacturer." },
        { brand: "Amazon", logo: "https://picsum.photos/200/150?random=26", description: "An American multinational technology company." },
        { brand: "Microsoft", logo: "https://picsum.photos/200/150?random=27", description: "A global technology corporation." },
        { brand: "Adidas", logo: "https://picsum.photos/200/150?random=28", description: "A multinational corporation that designs and manufactures sportswear and accessories." },
        { brand: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain." },
        { brand: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products." },
      ];
      const categories = [
        { name: "Electonics", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand." },
        { name: "Power", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company." },
        { name: "Electricals", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate." },
        { name: "Accessories", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand." },
        { name: "Technicians", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer." },
        { name: "Engineers", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company." },
        { name: "Publications", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation." },
        { name: "Books", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories." },
        ];
    return (
        <div className='service'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['helo','hehere']} />
            </div>
            <div>
                <SideNavBar iconColor={iconColor}/>
                <Swiper navigation={true} modules={[Navigation]} className="carousel" loop={true}>
                    {products.map((product, index) => (
                            <SwiperSlide><img src={product.image} alt='' />
                            <div className='image-text row p-4'>
                                <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  float-left'>
                                <h2>Your Engineering Services <br/>
                                    Made Easier,
                                    Made Better,
                                </h2>
                                </div>
                                <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float-right' style={{marginTop:'100px'}}>
                                    <IconButton icon={faGooglePlay} href="#" text="Google Play" className='m-1' />
                                    <IconButton icon={faAppStore} href="#" text="App Store" className='m-1' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
                <div class="horizontal-scroller m-0" style={{width:window.innerWidth-30, backgroundColor:'transparent',justifyContent:'center'}}>
                    <div class="option-content p-0">
                        {categories.map((category, index) => (
                            <div key={index} className="-option-item p-0 m-0">
                                <Btn className="s-btn" text={category.name} style={{backgroundColor:'white'}}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col row p-2 m-0">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Trending</h5>
                      <div className="image-grid mb-3">
                            <img src="https://picsum.photos/200/150?random=2" alt="Book 1" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random4" alt="Book 2" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=5" alt="Book 3" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=6" alt="Book 4" className="grid-image" />
                        </div>
                      <Btn href="#" text="See more" className='mb-0 ml-0' />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Top Ranking</h5>
                      <div className="image-grid mb-3">
                            <img src="https://picsum.photos/200/150?random=7" alt="Book 1" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=8" alt="Book 2" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=9" alt="Book 3" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=10" alt="Book 4" className="grid-image" />
                        </div>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Recommended</h5>
                      <div className="image-grid mb-3">
                            <img src="https://picsum.photos/200/150?random=11" alt="Book 1" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=12" alt="Book 2" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=13" alt="Book 3" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=14" alt="Book 4" className="grid-image" />
                        </div>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Unexpected</h5>
                      <div className="image-grid mb-3">
                            <img src="https://picsum.photos/200/150?random=15" alt="Book 1" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=16" alt="Book 2" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=17" alt="Book 3" className="grid-image" />
                            <img src="https://picsum.photos/200/150?random=18" alt="Book 4" className="grid-image" />
                        </div>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                
                
              </div>
                <div>
                    <h4 className='px-2 m-2 mt-4'>Brands</h4>
                    <div class="horizontal-scroller" style={{width:window.innerWidth-30}}>
                        <div class="scroll-content">
                            {companyBrands.map((companyBrand, index) => (
                                <div key={index} className="-scroll-item-one ">
                                    <img src={companyBrand.logo} alt=''/>
                                    
                                    <h6 className='mb-0 mt-1'>{companyBrand.brand}</h6>
                                
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='px-2 m-2 mt-4'>New Arrivals</h4>
                    <div class="horizontal-scroller" style={{width:window.innerWidth-30}}>
                        <div class="scroll-content">
                            {products.map((product, index) => (
                                <div key={index} className="-scroll-item">
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
export default Home;