import React, { useState } from 'react';
import { Table, Button, Input, Pagination, Typography } from 'antd';
import { SettingOutlined, SearchOutlined } from '@ant-design/icons';
import IconButton from '../components/Iconbutton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';

const { Text } = Typography;

const CartPage = () => {
    const name = "Cart Page";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
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
            });
        }
        return dummyItems;
    };

    const cartItems = generateDummyCartItems();

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Filter projects based on search term
    const filteredProjects = cartItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination values
    const totalProjects = filteredProjects.length;
    const totalPages = Math.ceil(totalProjects / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalProjects);

    // Function to handle pagination change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Columns configuration for the table
    const columns = [
        {
            title: 'Product Name',
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
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
    ];

    // Custom footer component
    const Bottom = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text strong style={{width:'60px'}}>Total Price: ${totalPrice}</Text>
            {totalProjects > pageSize && (
                <Pagination
                    size="small"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalProjects}
                    onChange={handlePageChange}
                    itemRender={(current, type, originalElement) => {
                        if (current === 4 || current === 5) {
                            return null; // Hide page numbers 4 and 5
                        }
                        return originalElement;
                    }}
                />
            )}
        </div>
    );

    const searchtable = () =>{
        console.log('=====================');
    }
    const [inputMessage, setInputMessage] = useState('');
    const handleSendMessage = () => {
        console.log('=====================');
    };
    
    return (
        <div>
            <Header iconColor={iconColor} navbarBg={navbarBg} />
            <SideNavBar iconColor={iconColor}/>
            <div className="content m-2">
                <Input 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onSearch={handleSendMessage}
                    addonAfter={<SearchOutlined style={{cursor:'pointer'}}  onClick={searchtable}/>} 
                    defaultValue="Type your message..."
                    style={{marginTop: '60px'}}
                /> 
                <Table
                    dataSource={filteredProjects.slice(startIndex, endIndex)}
                    columns={columns}
                    pagination={false}
                    footer={Bottom}
                    scroll={{ y: 400 }} // Adjust the height of the table
                    
                />
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton to={{pathname:`/profile/payments/${1455}`}} state='1456' text='Checkout' style={{ alignSelf: "center" }} />
                </div>

            </div>
            <Footer className='footer'/>
        </div>
    );
};

export default CartPage;
