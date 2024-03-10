
import React from 'react';
import { Layout} from 'antd';
const { Footer } = Layout;

const FooterComponent = ({name}) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        {name} ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterComponent;
