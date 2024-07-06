import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu,Avatar } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const linkStyles = {
  marginRight: '20px',
  color: '#333',
  fontSize: '18px',
  textDecoration: 'none',
};

const ResponsiveHeader = () => {
  return (
    <Header className="header">
      <div className="logo">MyApp</div>
      <div className="menu-links">
        <Link to="/" className="header-link" style={linkStyles}>Home</Link>
        <Link to="/about" className="header-link" style={linkStyles}>About</Link>
        <Link to="/find" className="header-link" style={linkStyles}>Find</Link>
        <Link to="/products" className="header-link" style={linkStyles}>Store</Link>
        <Link to="/contact" className="header-link" style={linkStyles}>Contact Us</Link>
        <Link to="/profile" className="header-link" style={linkStyles}>Hi, Rufai</Link>
        <button className="btn-login" style={{ padding: '5px 10px', cursor: 'pointer' }}>Login</button>
      </div>
      <Menu mode="horizontal" className="menu">
        <Avatar shape="square" size={32} icon={<ShoppingCartOutlined />} className='m-1' />
        <Avatar shape="square" size={32} icon={<UserOutlined />} className='m-1' />
            {/* <Menu.Item key="cart">
            <Avatar shape="square" size={32} icon={<ShoppingCartOutlined />} />
            <Avatar shape="square" size={32} icon={<UserOutlined />} />
            </Menu.Item>
            <Menu.Item key="profile">
            <Avatar shape="square" size={32} icon={<UserOutlined />} />
            </Menu.Item> */}
      </Menu>
    </Header>
  );
};

export default ResponsiveHeader;
