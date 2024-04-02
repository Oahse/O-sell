import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import './ChatRoom.css'; // Import CSS file with styling
import { useLocation } from 'react-router-dom';
import { Modal } from 'antd';
import IconButton from '../components/Iconbutton';
import {faEllipsis, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import FormContainer from '../components/FormContainer';
import { SettingOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';

const { Option } = Select;

function ChatRoom(props) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const person = useLocation().state.person;
  const name = "Chat Room";
  const [iconColor, setIconColor] = useState('black');
  const [navbarBg, setNavbarBg] = useState('light');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'You' }]);
      setInputMessage('');
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
    <div>
      <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} />
      <SideNavBar iconColor={iconColor}/>
      <FormContainer children={<>
        <div className="header">
            <div className="back-button" onClick={handleGoBack}>
              <i className="fa fa-chevron-left"></i>
            </div>
            <div className="user-info">
              <img src={person.picture} alt="User" className="user-image" onClick={handleEllipsisClick} />
              <div className="user-details" onClick={handleEllipsisClick}>
                <h5 className="user-name user-status">{person.name}</h5>
              </div>
            </div>
            <div className="ellipsis-menu" onClick={handleEllipsisClick}>
              <i className="fa fa-ellipsis-v"></i>
            </div>
          </div>
          <div className="chat-container m-2 mb-0 mt-0">
            <div className="message-container">
              {messages.map((message, index) => (
                <div key={index} className={message.sender === 'You' ? 'message sent' : 'message received'}>
                  <span className="sender">{message.sender}</span>: {message.text}
                </div>
              ))}
            </div>
            <Input 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onSearch={handleSendMessage}
                addonAfter={<SendOutlined style={{cursor:'pointer'}}  onClick={handleSendMessage}/>} 
                defaultValue="Type your message..."
                /> 
          </div>
      </>}/>
      <Footer className='footer'/>

      <Modal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <div className="modal-content">
          <div className="user-info p-0">
            <img src={person.picture} alt="User" className="modal-user-image m-2" width={100} height={100}/>
            <div className="user-details">
              <h2>{person.name}</h2>
              <p className='m-0'><strong>Age:</strong> {person.age}</p>
              
              {/* Add other user information */}
            </div>
          </div>
          <div className="modal-actions">
            {/* Add any actions or buttons */}
            
              <p className='m-0'><strong>Profession:</strong> {person.profession}</p>
              <p className='m-0'><strong>Degree:</strong> {person.degree}</p>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default ChatRoom;
