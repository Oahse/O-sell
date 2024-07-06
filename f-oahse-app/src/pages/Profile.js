import React from 'react';
import { Layout, List, Typography, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, MessageOutlined, ShoppingCartOutlined, StarOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

const sections = [
  { title: 'Messages', icon: <MessageOutlined /> },
  { title: 'Your Orders', icon: <ShoppingCartOutlined /> },
  { title: 'Your Reviews', icon: <StarOutlined /> },
  { title: 'Addresses', icon: <HomeOutlined /> },
  { title: 'Quotations', icon: <FileTextOutlined /> }
];

const ProfilePage = () => {
  return (
    <Layout className="profile-page">
      <Header className="header">
        <div className="header-left">
          <Avatar icon={<UserOutlined />} />
          <Title level={4} className="username">John Doe</Title>
        </div>
        <div className="header-right">
          <SettingOutlined className="settings-icon" />
        </div>
      </Header>
      <Content className="content">
        <List
          itemLayout="horizontal"
          dataSource={sections}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={<Link to='/' className='text-decoration-none'>{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ProfilePage;
