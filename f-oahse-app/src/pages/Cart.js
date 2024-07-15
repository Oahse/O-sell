import React, { useState } from 'react';
import { Table, Button, Input, Pagination, Typography, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Search from '../components/Search';
const { Text } = Typography;

const CartPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // Number of projects per page

    // Generate 100 dummy cart items
    const generateDummyCartItems = () => {
        const dummyItems = [];
        for (let i = 1; i <= 100; i++) {
            dummyItems.push({
                id: i,
                name: `Product ${i}`,
                price: Math.floor(Math.random() * 100) + 1,
                quantity: Math.floor(Math.random() * 10) + 1,
                image: `https://via.placeholder.com/150?text=Product+${i}`, // Placeholder image
                available: i % 5 !== 0, // Mark some items as unavailable
            });
        }
        return dummyItems;
    };

    const cartItems = generateDummyCartItems();

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Filter projects based on search term but always include unavailable items
    const filteredProjects = cartItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || !item.available
    );

    // Calculate pagination values
    const totalProjects = filteredProjects.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalProjects);

    // Function to handle pagination change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Columns configuration for the table
    const columns = [
        {
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} alt="product" style={{ width: 30, height: 30 }} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => `$${text}`,
        },
        {
            title: 'Qty',
            dataIndex: 'quantity',
            key: 'quantity',
        },
    ];

    // Custom footer component
    const Bottom = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text strong style={{ width: '60px' }}>Total Price: ${totalPrice}</Text>
            {totalProjects > pageSize && (
                <Pagination
                    size="small"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalProjects}
                    onChange={handlePageChange}
                />
            )}
        </div>
    );

    const searchtable = () => {
        console.log('Search clicked');
    }

    const [inputMessage, setInputMessage] = useState('');
    const handleSendMessage = () => {
        console.log('Send clicked');
    };

    return (
        <div>
            <Search value={inputMessage} handleSearch={searchtable} showDrawer={null} onChange={(e) => setInputMessage(e.target.value)} />

            <div className="content">
                
                {filteredProjects.length > 0 ? (
                    <Table
                        dataSource={filteredProjects.slice(startIndex, endIndex)}
                        columns={columns}
                        pagination={false}
                        footer={Bottom}
                        scroll={{ y: 400 }} // Adjust the height of the table
                        rowKey="id"
                    />
                ) : (
                    <Empty description="No items in the cart" />
                )}
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button type="primary" style={{ alignSelf: "center" }}>
                        <i class="fa-light fa-credit-card"></i>Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
