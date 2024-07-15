import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Form, Modal, Button, Avatar } from 'antd';
import { SendOutlined, ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const person = useLocation().state.person;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'You' }]);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Navigate back
  };

  const handleEllipsisClick = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="chat-room">
      <div className="header">
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={handleGoBack} />
        <div className="user-info">
          <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${person.id}`} size={40} onClick={handleEllipsisClick} style={{ cursor: 'pointer' }} />
          <div className="user-details" onClick={handleEllipsisClick}>
            <h5>{person.first_name +'' + person.last_name}</h5>
          </div>
        </div>
        <Button type="text" icon={<EllipsisOutlined />} onClick={handleEllipsisClick} />
      </div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <span>
              <strong>{message.sender}:</strong> {message.text}
            </span>
          </div>
        ))}
      </div>
      <Form className="message-form" onFinish={handleSendMessage}>
        <Form.Item className="message-input">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="Type your message ..."
          />
        </Form.Item>
        <Form.Item>
          <Button icon={<SendOutlined />} htmlType="submit" />
        </Form.Item>
      </Form>
      <Modal visible={isModalVisible} onCancel={handleModalCancel} footer={null}>
        <div style={{ textAlign: 'center' }}>
          <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${person.id}`} size={100} />
          <h2>{person.first_name +'' + person.last_name}</h2>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Profession:</strong> {person.professionname.name}</p>
          <p><strong>Degree:</strong> {person.degree}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ChatRoom;
