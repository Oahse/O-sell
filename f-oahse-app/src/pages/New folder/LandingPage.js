import React, { useState, useEffect } from 'react';
import { Container,Navbar, Nav, Carousel} from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import {Autoplay, EffectFade, Grid, Navigation, Pagination } from 'swiper/modules';

import { faBars, faTimes, faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Btn from '../components/Button';
import Icon from '../components/Icon';
import logo from '../logo.svg';
import imageSrc from '../assets/test-gb.png'; 


import './LandingPage.css';
const LandingPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        lazy={true}
        pagination-dynamic-bullets={"true"}
        loop={"true"}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={imageSrc} alt='' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
        </SwiperSlide>
      </Swiper>
      <div className="landing-container">
        <div className="row p-2 m-0">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Electronics</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Btn href="#" text="See more" className='mb-0 ml-0' />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Electricals</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Btn href="#" text="See more" />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Power</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Btn href="#" text="See more" />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">Accessories</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Btn href="#" text="See more" />
              </div>
            </div>
          </div>
          
        </div>
        <div className=''>

        </div>
      </div>
    </div>
  );
};

  
  export default LandingPage;