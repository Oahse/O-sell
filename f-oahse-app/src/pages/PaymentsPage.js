import React, { useState } from 'react';
import { Form, Input, Select, Button, Modal } from 'antd';
import Btn from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container,Col, Row} from 'react-bootstrap';
import SideNavBar from '../components/MobileSideBar';

const { Option } = Select;

const PaymentsForm = () => {
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
        <Header iconColor={iconColor} navbarBg={navbarBg} />
        <div className='mini-navbar ms-auto'>
        </div>
        <SideNavBar iconColor={iconColor}/>
        <div className="mb-5" >
            <Container fluid>
                <Form
                    name="payment_form"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        label="Select Card"
                        name="card"
                        rules={[{ required: true, message: 'Please select a card or enter card details!' }]}
                    >
                        <Select placeholder="Select a card">
                        <Option value="card1">Card 1</Option>
                        <Option value="card2">Card 2</Option>
                        <Option value="card3">Card 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Card Number"
                        name="cardNumber"
                        rules={[{ required: true, message: 'Please enter card number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Expiration Date"
                        name="expirationDate"
                        rules={[{ required: true, message: 'Please enter expiration date!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="CVV"
                        name="cvv"
                        rules={[{ required: true, message: 'Please enter CVV!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Btn submit={true} state='1456' text='Pay' style={{ alignSelf: "center" }} />
                        
                    </Form.Item>
                </Form>
            </Container>
            <Footer className='footer'/>
        </div>
    </div>

  );
};

export default PaymentsForm;
