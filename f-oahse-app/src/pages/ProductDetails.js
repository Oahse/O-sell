import React, { useState } from 'react';
import { Typography, Button, Space, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';

const { Text } = Typography;

const ProductDetailsPage = () => {
    const name = "Product Details";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');

    // Dummy product data
    const product = {
        id: 1,
        name: 'Product Name',
        price: 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue magna ut lacus vehicula, vel tristique libero efficitur. Nam non ipsum at mi pharetra aliquet.',
        imageUrl: 'https://via.placeholder.com/300',
    };

    const handleAddToCart = () => {
        // Add product to cart logic
    };

    return (
        <div>
            <Header iconColor={iconColor} navbarBg={navbarBg} />
            <SideNavBar iconColor={iconColor} />
            <div className="content m-2">
                <Breadcrumb style={{ marginBottom: '20px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Products</Breadcrumb.Item>
                    <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <img src={product.imageUrl} alt="Product" style={{ width: '300px', height: '300px' }} />
                    </div>
                    <div>
                        <h2>{product.name}</h2>
                        <Text strong>${product.price}</Text>
                        <p>{product.description}</p>
                        <Space>
                            <Button type="primary" onClick={handleAddToCart}>Add to Cart</Button>
                            <Button type="default">Buy Now</Button>
                        </Space>
                    </div>
                </div>
            </div>
            <Footer className='footer' />
        </div>
    );
};

export default ProductDetailsPage;
