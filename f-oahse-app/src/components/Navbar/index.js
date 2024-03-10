import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer } from "antd";
import NavLinks from "./NavLinks";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

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
          <div className="logo">
            <h3 className="brand-font" style={{ marginTop: '0px' }}>{name}</h3> {/* Adjust the marginTop value to position the brand name higher */}
          </div>
          <div className="navbar-menu">
            <NavLinks mode={"horizontal"} />
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined onClick={showDrawer} />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

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
