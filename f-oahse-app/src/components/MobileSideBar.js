import React, { useState, useEffect, useRef } from 'react';
import { Container,Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
import { faContactBook, faHelmetSafety,faShoppingBag, faCaretDown, faHome, faInfoCircle, faWrench, faUser, faSignIn, faSignOut, faGear, faReceipt} from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.svg';
import Item from './Item';
import './MobileSideBar.css';

const SideNavBarItem = (props) => {
    const {text, children,iconColor} =props;
    
    const toggleaccordion = (value) => {
        // Render the SideNavBar component into the body_container element
        const container = document.getElementById(value+'-accordion');
        const accordionItems  = document.getElementsByClassName(value+'-accordionitem');
        if (container.style.height != '0px'){
            container.style.height = '0px';
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.2s';
                currentAccordionItem.style.visibility="hidden";
              }
            
            const item = document.getElementById(value+'-caret');
            item.style.transform='rotate(0deg)';
        }
        else{
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.5s';
                currentAccordionItem.style.visibility="visible";
                var h= window.getComputedStyle(currentAccordionItem).height;
                var com_h =parseInt(h) * (i+1.2) + 'px';
              }
            
            console.log(h, com_h)
            container.style.height = com_h;
            const item = document.getElementById(value+'-caret');
            item.style.transform='rotate(-90deg)';
        }
    };
    const onclick = () => {
        console.log('text')
    }
    return(
        <div className="d-flex flex-column flex-shrink-0 p-2 bg-light">
            <div className='m-2'>
                <img alt="" src={logo} width="70" height="50" className="d-inline-block align-top"/>{' '}
                <span style={{'color':iconColor,fontWeight:'500', fontSize:'35px'}}>Oahse</span>
            </div>
            <Item lefticonname={faHome} iconcolor='dark' text="Home" onClick={onclick} className="item"/>
            <Item lefticonname={faInfoCircle} iconcolor='dark' text="About" onClick={onclick} className="item"/>
            <Item id='services' lefticonname={faWrench} righticonname={faCaretDown} iconcolor='dark' text="Services" onClick={() => toggleaccordion('services')} className="item"/>
            <div id='services-accordion' className='accordion' >
                <Item lefticonname={faHelmetSafety} iconcolor='dark' text="Find Engineers" onClick={onclick} className="item services-accordionitem"/>
                <Item lefticonname={faShoppingBag} iconcolor='dark' text="Find Products" onClick={onclick} className="item services-accordionitem" />
            </div>
            <Item lefticonname={faContactBook} iconcolor='dark' text="Contact Us" onClick={onclick} className="item"/>
            <span className="separator"></span>
            <Item lefticonname={faUser} iconcolor='dark' text="Profile" onClick={onclick} className="item"/>
            <Item id='payments' lefticonname={faGear} righticonname={faCaretDown} iconcolor='dark' text="Payments" onClick={() => toggleaccordion('payments')} className="item"/>
            <div id='payments-accordion' className='accordion' >
                <Item lefticonname={faReceipt} iconcolor='dark' text="Recent Transactions" onClick={onclick} className="item payments-accordionitem"/>
                <Item lefticonname={faShoppingBag} iconcolor='dark' text="Report" onClick={onclick} className="item payments-accordionitem" />
            </div>
            <Item lefticonname={faSignIn} iconcolor='dark' text="Sign in" onClick={onclick} className="item"/>
            <span className="separator"></span>

            <Item lefticonname={faGear} iconcolor='dark' text="Settings" onClick={onclick} className="item"/>
       
        </div>
    )
}
const SideNavBar = (props) => {

    var hidden = false;
    const closeNav = () => {
        // Implement your logic to close the side navigation
      };
    return (

        <div className='sidenav' id="sidebar">
            <div>
                <SideNavBarItem />
            </div>
            
        </div>
    )
}
export default SideNavBar;