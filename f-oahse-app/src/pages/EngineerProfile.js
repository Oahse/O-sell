import React from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Card, Descriptions, Tag } from 'antd';

function ProfilePage() {
  const user = useLocation().state.user;

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Avatar src={user.image} size={150} />
          <h2>{user.first_name} {user.last_name}</h2>
          {user.is_tradeperson && <Tag color="blue">Tradesperson</Tag>}
          {user.is_staff && <Tag color="green">Staff</Tag>}
          {user.is_active ? <Tag color="success">Active</Tag> : <Tag color="error">Inactive</Tag>}
          {user.verified && <Tag color="gold">Verified</Tag>}
        </div>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Title">{user.title}</Descriptions.Item>
          <Descriptions.Item label="First Name">{user.first_name}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{user.last_name}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Phone Number">{user.phonenumber}</Descriptions.Item>
          <Descriptions.Item label="NIN">{user.nin}</Descriptions.Item>
          <Descriptions.Item label="Passport">{user.passport}</Descriptions.Item>
          <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
          <Descriptions.Item label="Profession Name">{user.professionname?.name || 'N/A'}</Descriptions.Item>
          <Descriptions.Item label="Regulations">{user.regulations ? user.regulations.join(', ') : 'N/A'}</Descriptions.Item>
          <Descriptions.Item label="Website URL">{user.websiteurl}</Descriptions.Item>
          <Descriptions.Item label="Average Ratings">{user.avgratings}</Descriptions.Item>
          <Descriptions.Item label="Last Login">{new Date(user.last_login).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="Verified At">{user.verifiedAt}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}

export default ProfilePage;
