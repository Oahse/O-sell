import React, { useState, useEffect } from 'react';
import { Container,Navbar, Nav, Row, Col }  from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlay, faAppStore} from '@fortawesome/free-brands-svg-icons'
import SideNavBar from './MobileSideBar';
import CIPAC_cover_photo from '../assets/CIPAC_cover_photo.jpg';
import Btn from './Button';
import IconButton from './Iconbutton';
import Icon from './Icon';
import logo from '../logo.svg';
import './Body.css';
const Body = (props) => {
  const {bgimageheight, iconColor}=props;
  const [isMobile, setIsMobile] = useState(false);
  const linkstyles = {
      fontFamily: 'Open Sans, sans-serif'
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
      const checkIfMobile = () => {
          const width = window.innerWidth;
          setIsMobile(width <= 767); // Adjust threshold as needed
      };
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);


      return () => {
      window.removeEventListener('resize', checkIfMobile);
      };

      
  }, []);

  return (
      <div id='_body' className="_body" style={{linkstyles}} >
        <SideNavBar iconColor={iconColor}/>
        <div className='main'>
            <img src={CIPAC_cover_photo} alt="showcase" width="100%" id='bgimage' />
              {isMobile ? 
                  (<div className='image-text row p-4 mt-5 mb-5'>
                      <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 mb-5  float-left'>
                          <h2>Your Engineering Services <br/>
                              Made Easier,
                              Made Better
                            </h2>
                              <div className='mt-2' style={{display:'flex',flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                                <IconButton icon={faGooglePlay} href="#" text="Google Play" className='m-0' />
                                <IconButton icon={faAppStore} href="#" text="App Store" className='m-0' />
                              </div>
                          
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
              
            
            
            <div className="landing-container row" style={{top:bgimageheight}}>
              <div className="col row p-2 m-0">
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
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Technicians</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Engineers</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Publications</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Books</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Btn href="#" text="See more" />
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='needed'>
                <div>
                  <h4 className='px-4'>What do you need?</h4>
                  <div class="horizontal-scroller" style={{width:window.innerWidth-60}}>
                  
                    <div class="scroll-content">
                      <div class="scroll-item">Item 1</div>
                      <div class="scroll-item">Item 2</div>
                      <div class="scroll-item">Item 3</div>
                      <div class="scroll-item">Item 1</div>
                      <div class="scroll-item">Item 2</div>
                      <div class="scroll-item">Item 3</div>
                      <div class="scroll-item">Item 1</div>
                      <div class="scroll-item">Item 2</div>
                      <div class="scroll-item">Item 3</div>
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
            </div>
            
        </div>
      </div>
  );
};

  
  export default Body;