import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer,Menu, Avatar, Row, Col  } from "antd";
import { MenuOutlined, UserOutlined, CodeOutlined, LogoutOutlined  } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import logo from '../assets/logo.svg';


const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </>
        }
      >
        <Menu.Item key="project">
          <CodeOutlined /> Projects
        </Menu.Item>
        <Menu.Item key="about-us">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

const NavLinks = ({ mode, loggedin }) => {
  if (loggedin){
    loggedin =loggedin;
  }else{
    loggedin= false;
  }
  const [isloggedIn, setIsloggedIn] = useState(loggedin);
  return (
    <div className="nav-links">
      <Link to="/about" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">Find</Link>
      <Link to="/about" className="nav-link">Store</Link>
      <Link to="/about" className="nav-link">Contact Us</Link>
      
      {isloggedIn?
      (<>
        <Button>Log Out</Button>
      </>)
      :
      (<>
        <Button to='/login'>Log In</Button>
        <span style={{margin:'3px'}}></span>
        <Button to='/signup'>Sign Up</Button>
      </>)
      }
    </div>
  );
};
const Navbar = ({name}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <Row className="logo">
              <Col span={6} className="logo-img"><img src={logo} height={50}/></Col>
              <Col span={12} className="logo-text">{name}</Col>
          </Row>
          <div className="navbar-menu">
            <NavLinks mode={"horizontal"} />
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined onClick={showDrawer} />
            </Button>
            

            <Drawer
              title={"Brand Here"}
              placement="left"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <NavLinks mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
