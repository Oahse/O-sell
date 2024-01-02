import React, { useState, useEffect, useRef } from 'react';
import { Container,Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
import { faContactBook, faHelmetSafety,faShoppingBag, faCaretDown, faHome, faInfoCircle, faWrench, faUser, faSignIn, faSignOut, faGear} from '@fortawesome/free-solid-svg-icons';

import Item from './Item';
import './MobileSideBar.css';

const SideNavBarItem = (props) => {
    const {text, children} =props;

    const toggleaccordion = (value) => {
        // Render the SideNavBar component into the body_container element
        const container = document.getElementById("accordion");
        const accordionItems  = document.getElementsByClassName('accordionitem');
        if (container.style.height === '200px'){
            container.style.height = '0px';
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.5s';
                currentAccordionItem.style.visibility="hidden";
              }
            const item = document.getElementById(value+'-caret');
            item.style.transform='rotate(0deg)';
        }
        else{
            container.style.height = '200px';
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.5s';
                currentAccordionItem.style.visibility="visible";
              }
            const item = document.getElementById(value+'-caret');
            item.style.transform='rotate(-90deg)';
        }
    };
    const onclick = () => {
        console.log('text')
    }
    return(
        <div className="d-flex flex-column flex-shrink-0 p-2 bg-light">
                <span className="space"></span>
                <Item lefticonname={faHome} iconcolor='dark' text="Home" onClick={onclick} className="item"/>
                <Item lefticonname={faInfoCircle} iconcolor='dark' text="About" onClick={onclick} className="item"/>
                <Item lefticonname={faWrench} iconcolor='dark' text="Services" onClick={onclick} className="item"/>
                <Item lefticonname={faContactBook} iconcolor='dark' text="Contact Us" onClick={onclick} className="item"/>
                <span className="separator"></span>
                <Item lefticonname={faUser} iconcolor='dark' text="Profile" onClick={onclick} className="item"/>
                <Item lefticonname={faSignIn} iconcolor='dark' text="Sign in" onClick={onclick} className="item"/>
                <span className="separator"></span>
                
                <Item id='settings' lefticonname={faGear} righticonname={faCaretDown} iconcolor='dark' text="Settings" onClick={() => toggleaccordion('settings')} className="item"/>
                <div id='accordion' className='accordion' >
                    <Item lefticonname={faHelmetSafety} iconcolor='dark' text="Find Engineers" onClick={onclick} className="item accordionitem"/>
                    <Item lefticonname={faShoppingBag} iconcolor='dark' text="Find Products" onClick={onclick} className="item accordionitem" />
                </div>
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