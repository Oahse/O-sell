import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, Avatar, Button, Input, Form, List, message as Comment } from 'antd';
import { MessageOutlined, SendOutlined } from '@ant-design/icons';

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state;
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        author: 'User', // Replace with the actual user
        avatar: 'https://via.placeholder.com/150', // Replace with the actual user's avatar
        content: messageInput,
        datetime: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card
        title={job.title}
        extra={<Avatar shape="square" size={42} src={job.companyAvatar} />}
      >
        <Card.Meta
          avatar={<Avatar size={54} src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${job.id}`} />}
          title={job.profession}
          description={
            <>
              <p>{job.description}</p>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Location:</strong> {job.city}, {job.state}, {job.country}</p>
              <p><strong>Distance:</strong> {job.distance} miles</p>
              <p><strong>Posted At:</strong> {job.postedAt}</p>
              <p><strong>Hashtags:</strong> {job.hashtags.join(', ')}</p>
            </>
          }
        />
      </Card>

      <div style={{ marginTop: '20px' }}>
        <h3>Chat</h3>
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={message => (
            <Comment
              author={message.author}
              avatar={message.avatar}
              content={message.content}
              datetime={message.datetime}
            />
          )}
        />
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default JobDetails;
