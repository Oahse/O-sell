import React, { useState } from 'react';
import { Form, Input, Select, Button, Modal, Typography, Space } from 'antd';
import { GoogleOutlined, AppleOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Container, Col, Row } from 'react-bootstrap';
const { Option } = Select;
const { Text } = Typography;

const PaymentsForm = () => {
  const [iconColor, setIconColor] = useState('black');
  const [navbarBg, setNavbarBg] = useState('light');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [creditCards, setCreditCards] = useState([
    { id: 1, cardName: 'Card 1', cardNumber: '**** **** **** 1234' },
    { id: 2, cardName: 'Card 2', cardNumber: '**** **** **** 5678' },
    { id: 3, cardName: 'Card 3', cardNumber: '**** **** **** 9101' },
  ]);

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

  const onAddCardFinish = (values) => {
    const newCard = {
      id: creditCards.length + 1,
      cardName: `Card ${creditCards.length + 1}`,
      cardNumber: `**** **** **** ${values.cardNumber.slice(-4)}`,
    };
    setCreditCards([...creditCards, newCard]);
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="mb-5">
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
                {creditCards.map((card) => (
                  <Option key={card.id} value={card.id}>
                    {card.cardName} - {card.cardNumber}
                  </Option>
                ))}
                <Option value="add_new" onClick={showModal}>
                  Add new card
                </Option>
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
              <Button icon={<GoogleOutlined />} style={{ alignSelf: 'center' }}>
                Pay
              </Button>
            </Form.Item>
          </Form>

          <div style={{ marginTop: '20px' }}>
            <Text strong>Other Payment Methods</Text>
            <Space direction="vertical" style={{ width: '100%', marginTop: '10px' }}>
              <Button icon={<GoogleOutlined />} style={{ width: '100%' }}>
                Google Pay
              </Button>
              <Button icon={<AppleOutlined />} style={{ width: '100%' }}>
                Apple Pay
              </Button>
              <Button icon={<CreditCardOutlined />} style={{ width: '100%' }}>
                Klarna
              </Button>
            </Space>
          </div>
        </Container>
        <Modal title="Add New Card" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <Form
            name="add_card_form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onAddCardFinish}
          >
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Card
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default PaymentsForm;
