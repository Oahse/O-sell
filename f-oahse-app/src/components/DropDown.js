// CustomDropdown.js
import React from 'react';
import { Menu, Dropdown as DD, Button,Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Dropdown = ({ menuItems, children, onMenuItemClick }) => {
    const handleMenuClick = (e) => {
        const title = e.item.props['data-title'];
        onMenuItemClick(title);
      };
    
      const menu = (
        <Menu onClick={handleMenuClick}>
          {menuItems.map((item, index) =>
            item.subMenu ? (
              <Menu.SubMenu
                key={index}
                data-title={item.title}
                title={
                  <>
                    <Avatar eventKey="cart" shape="square" size={32} icon={<i className={item.icon}></i>}  />
                    <span className='m-2'>{item.title}</span>
                  </>
                }
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <Menu.Item key={`${index}-${subIndex}`} data-title={subItem.title}>
                    <Avatar eventKey="cart" shape="square" size={32} icon={<i className={subItem.icon}></i>}  />
                    <span>{subItem.title}</span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={index} data-title={item.title}>
                <>
                <Avatar eventKey="cart" shape="square" size={32} icon={<i className={item.icon}></i>}  />
                <span className='m-2'>{item.title}</span>
                </>
              </Menu.Item>
            )
          )}
        </Menu>
      );
  

  return (
    <DD overlay={menu} trigger={['click']}>
      {children}
    </DD>
  );
};

export default Dropdown;
