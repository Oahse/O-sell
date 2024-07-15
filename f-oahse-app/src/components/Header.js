import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu,Avatar, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import oahselogo from '../assets/oahse_logo.png';
const { Header } = Layout;



const ResponsiveHeader = ({defaultValue,onChange}) => {
  const linkStyles = {
    backgroundColor: '#ffc107',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Header className="header">
      <div className="logo"><img src={oahselogo} alt="oahselogo" width={48} />Oahse</div>
      <div className="menu-links">
        <span className="header-link" style={(defaultValue==='Home')?linkStyles:null} onClick={() => onChange('Home')}>Home</span>
        <span className="header-link" style={(defaultValue==='Tradesperson')?linkStyles:null} onClick={() => onChange('Tradesperson')}>TradesPerson</span>
        <span className="header-link" style={(defaultValue==='Jobs')?linkStyles:null} onClick={() => onChange('Jobs')}>Jobs</span>
        <span className="header-link" style={(defaultValue==='Shop')?linkStyles:null} onClick={() => onChange('Shop')}>Shop</span>
      </div>
      <Menu mode="horizontal" className="menu">
        <Avatar eventKey="cart" shape="square" size={32} icon={<i className='fa-light fa-cart-shopping'></i>} className='m-1 menu-item' onClick={() => onChange('Cart')} />
        <Avatar eventKey="profile" shape="square" size={32} icon={<i className='fa-light fa-user'></i>} className='m-1 menu-item' onClick={() => onChange('Account')} />
      </Menu>
    </Header>
  );
};

export default ResponsiveHeader;
