import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu,Avatar, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Dropdown from '../components/DropDown';
import oahselogo from '../assets/logo.png';
import oahselogo_name from '../assets/logo_name.png'
const { Header } = Layout;



const ResponsiveHeader = ({defaultValue,onChange}) => {
  const linkStyles = {
    backgroundColor: '#597387',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
    color:'#fff'
  };
  const menuItems = [
    { title: 'Account', icon: "fa-light fa-user ant-icon" },
    { title: 'Setting', icon: 'fa-light fa-cog  ant-icon' },
    {
      title: 'Options',
      icon: 'fa-light fa-ellipsis-v ant-icon',
      subMenu: [
        { title: 'Sub Option 1', icon: 'fa-light fa-user ant-icon' },
        { title: 'Sub Option 2', icon: 'fa-light fa-cog ant-icon' },
      ],
    },
    { title: 'Logout', icon: 'fa-light fa-sign-out-alt ant-icon' },
  ];
  const handleMenuItemClick = (key) => {
    console.log('Clicked menu item:', key);
    // Perform actions based on the key of the clicked item
    onChange('Account')
  }

  return (
    <Header className="header">
      <span className="logo d-flex justify-space-between align-items-left ">
        {/* <img src={oahselogo} alt="oahselogo" className='py-5' width={50}/> */}
        <img src={oahselogo_name} alt="oahselogo" className='py-5'  width={80} />
      </span>
      <div className="menu-links">
        <span className="header-link" style={(defaultValue==='Home')?linkStyles:null} onClick={() => onChange('Home')}>Home</span>
        <span className="header-link" style={(defaultValue==='Tradesperson')?linkStyles:null} onClick={() => onChange('Tradesperson')}>TradesPerson</span>
        <span className="header-link" style={(defaultValue==='Jobs')?linkStyles:null} onClick={() => onChange('Jobs')}>Jobs</span>
        <span className="header-link" style={(defaultValue==='Shop')?linkStyles:null} onClick={() => onChange('Shop')}>Shop</span>
      </div>
      <Menu mode="horizontal" className="menu">
        <Avatar eventKey="cart" shape="square" size={32} icon={<i className='fa-light fa-cart-shopping ant-icon'></i>} className='m-1 menu-item' onClick={() => onChange('Cart')} />
        <Dropdown menuItems={menuItems} onMenuItemClick={handleMenuItemClick}>
          <Avatar
            shape="square"
            size={32}
            icon={<i className="fa-light fa-user ant-icon"></i>}
            className="m-1 menu-item"
            onClick={() => {}}
          />
        </Dropdown>
      </Menu>
    </Header>
  );
};

export default ResponsiveHeader;
