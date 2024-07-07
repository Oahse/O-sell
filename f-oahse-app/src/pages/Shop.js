import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Drawer, Select, Avatar, Pagination } from 'antd';
import { BorderOutlined, CheckCircleOutlined, ControlOutlined, SearchOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';
import gears from '../assets/gears.jpg';
const { Option } = Select;

const ProductsData = [
    {
      id: 'd0b9f24a-cd6a-4cfc-82f2-d8d18f13c6e1',
      name: 'Smartphone XYZ Pro',
      category: { name: 'Electronics', icon: 'https://example.com/electronics-icon.png' },
      price: 999.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1590491416349-60dfb63d3bfc',
      description: 'The latest XYZ Pro smartphone with high-resolution camera and long battery life.',
      files: [
        { name: 'User Manual', desc: 'Complete user guide', date: '2024-01-01', url: 'https://example.com/user-manual.pdf' }
      ],
      createdat: '2024-01-01',
      updatedat: '2024-01-01',
      deletedat: null,
      deleted: false,
      businessid: 'business123',
      address: '123 Tech Street, New York City, NY 10001, USA',
      location: { lat: 40.7128, long: -74.0060 },
    },
    {
      id: 'eae7a065-013c-4b4f-8e89-1046a4b5688d',
      name: '4K Ultra HD TV',
      category: { name: 'Electronics', icon: 'https://example.com/electronics-icon.png' },
      price: 799.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1601970707486-f9cfa77d8c4a',
      description: 'Experience the best in home entertainment with this 4K Ultra HD TV.',
      files: [
        { name: 'Product Brochure', desc: 'Detailed product specifications', date: '2024-01-10', url: 'https://example.com/product-brochure.pdf' }
      ],
      createdat: '2024-01-10',
      updatedat: '2024-01-10',
      deletedat: null,
      deleted: false,
      businessid: 'business124',
      address: '456 Home Avenue, Los Angeles, CA 90001, USA',
      location: { lat: 34.0522, long: -118.2437 },
    },
    {
      id: 'b5f47f08-d1c1-4a56-b3de-9d3f51d5ebd3',
      name: 'Cordless Drill Kit',
      category: { name: 'Tools', icon: 'https://example.com/tools-icon.png' },
      price: 129.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1591585432951-fb0f6e21f0b3',
      description: 'A versatile cordless drill kit for all your DIY and professional needs.',
      files: [
        { name: 'Drill Kit Instructions', desc: 'Instructions for using the drill kit', date: '2024-02-01', url: 'https://example.com/drill-kit-instructions.pdf' }
      ],
      createdat: '2024-02-01',
      updatedat: '2024-02-01',
      deletedat: null,
      deleted: false,
      businessid: 'business125',
      address: '789 Construction Road, Guadalajara, Jalisco 44100, Mexico',
      location: { lat: 20.6597, long: -103.3496 },
    },
    {
      id: 'cdd83215-3347-49a5-b591-08a01c1d519f',
      name: 'Espresso Machine',
      category: { name: 'Appliances', icon: 'https://example.com/appliances-icon.png' },
      price: 349.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1609265938746-d5c43e3c94e2',
      description: 'Make your favorite espresso drinks at home with this high-quality espresso machine.',
      files: [
        { name: 'Maintenance Guide', desc: 'How to maintain the espresso machine', date: '2024-03-01', url: 'https://example.com/maintenance-guide.pdf' }
      ],
      createdat: '2024-03-01',
      updatedat: '2024-03-01',
      deletedat: null,
      deleted: false,
      businessid: 'business126',
      address: '101 Coffee Lane, Paris, Île-de-France 75001, France',
      location: { lat: 48.8566, long: 2.3522 },
    },
    {
      id: '1d4a1f67-56a8-4b8b-908b-4b8b8f0edbbf',
      name: 'Portable Air Conditioner',
      category: { name: 'Appliances', icon: 'https://example.com/appliances-icon.png' },
      price: 249.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1609466656159-f37f1ae5ef28',
      description: 'Keep your room cool and comfortable with this efficient portable air conditioner.',
      files: [
        { name: 'Installation Instructions', desc: 'How to install the air conditioner', date: '2024-04-01', url: 'https://example.com/installation-instructions.pdf' }
      ],
      createdat: '2024-04-01',
      updatedat: '2024-04-01',
      deletedat: null,
      deleted: false,
      businessid: 'business127',
      address: '202 Cool Street, Accra, Greater Accra Region, Ghana',
      location: { lat: 5.6037, long: -0.1870 },
    },
    {
      id: '8d8b9e2f-342f-4c3a-91fd-b9b2b2cfa3b1',
      name: 'Noise-Canceling Headphones',
      category: { name: 'Electronics', icon: 'https://example.com/electronics-icon.png' },
      price: 199.99,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1591669526645-d3a7120fc5d8',
      description: 'Immerse yourself in your music with these top-of-the-line noise-canceling headphones.',
      files: [
        { name: 'Product Specifications', desc: 'Detailed specifications of the headphones', date: '2024-05-01', url: 'https://example.com/product-specifications.pdf' }
      ],
      createdat: '2024-05-01',
      updatedat: '2024-05-01',
      deletedat: null,
      deleted: false,
      businessid: 'business128',
      address: '303 Audio Avenue, Rome, Lazio 00100, Italy',
      location: { lat: 41.9028, long: 12.4964 },
    },
    // Add more products as needed
  ];
  

const categories = ['Plumber', 'Electrician', 'Carpenter', 'Painter'];
const posters = [
    {
        title: 'Latest Software',
        description: 'This is the latest software available on the market.',
        image: gears,
        bgcolor: '#e65542', // Reddish Orange
        link: '#',
    },
    {
        title: 'Advanced Inverter',
        description: 'High-efficiency inverters for your home and office.',
        image: 'https://images.unsplash.com/photo-1578644378054-3d6a91c99771',
        bgcolor: '#1c716c', // Green
        link: '#',
    },
    {
        title: 'Heavy-Duty Tractors',
        description: 'Powerful and reliable tractors for all your farming needs.',
        image: 'https://images.unsplash.com/photo-1515859005217-8a1d2f1d5bb9',
        bgcolor: '#DAA520', // Golden Rod
        link: '#',
    },
    {
        title: 'Cutting-Edge Oil',
        description: 'Premium quality oil for your vehicles and machinery.',
        image: 'https://images.unsplash.com/photo-1581091870621-6b8d6c41b5a2',
        bgcolor: '#6C3483', // Purple
        link: '#',
    },
    {
        title: 'Efficient Solar Panels',
        description: 'Harness the power of the sun with our top-grade solar panels.',
        image: 'https://images.unsplash.com/photo-1584270354949-1d580f6ea070',
        bgcolor: '#2980B9', // Medium Blue
        link: '#',
    },
    {
        title: 'Smart Home Gadgets',
        description: 'Upgrade your home with the latest in smart home technology.',
        image: 'https://cdn.pixabay.com/photo/2014/04/02/17/03/globe-307805_1280.png',
        bgcolor: '#795548', // Brown
        link: '#',
    },
    {
        title: 'Electric Vehicles',
        description: 'Eco-friendly electric vehicles for a sustainable future.',
        image: 'https://images.unsplash.com/photo-1613672709249-0f522dd3d13e',
        bgcolor: 'bg-warning', // Dark Blue Gray
        link: '#',
    },
];

const ManufacturersData = [
    {
        id: 1,
        name: 'Tesla',
        logo: 'https://www.tesla.com/tesla_theme/assets/img/logo_black.svg?20210125',
        description: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, United States. Tesla designs and manufactures electric vehicles, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services.',
        website: 'https://www.tesla.com/',
    },
    {
        id: 2,
        name: 'Apple',
        logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201809170859',
        description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
        website: 'https://www.apple.com/',
    },
    {
        id: 3,
        name: 'Microsoft',
        logo: 'https://www.microsoft.com/en-us/microsoft-365/branding/product-logos/microsoft-logo-300x300-RGB.png',
        description: 'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells a range of software, services, devices, and solutions.',
        website: 'https://www.microsoft.com/en-us',
    },


]
const Shop = () => {
  const [manufacturer, setManufacturer] = useState(ManufacturersData[0]);
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // 'none', 'asc', 'desc'


  useEffect(() => {
    handleSearch();
  }, [searchTerm, country, state, city, category, sortOrder]);

  
  const handleSearch = () => {
    let filtered = ProductsData.filter((product) => {
      return (
        (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
        (country ? product.address.includes(country) : true) &&
        (state ? product.address.includes(state) : true) &&
        (city ? product.address.includes(city) : true) &&
        (category ? product.category.name === category : true)
      );
    });

    // Apply sorting based on the sortOrder state
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
    setVisible(false); // Close the drawer after searching
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div style={{ padding: '8px' }}>
      <div className='d-flex justify-space-between align-items-center'>
        <Input
          placeholder="Search for any product"
          prefix={<SearchOutlined style={{ fontSize: '18px', fontWeight: 'bold' }} />}
          style={{ width: '100%', marginRight: '10px' }}
          onPressEnter={handleSearch}
        />
        <Avatar shape="square" size={42} icon={<ControlOutlined rotate={90} />} className='filtericon m-1 px-3' onClick={showDrawer} style={{ color: 'black' }} />
      </div>

      {/* Drawer for filters */}
      <Drawer
        title="Filters"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <Form layout="vertical">
          <Form.Item label="Manufacturer">
            <Select
              placeholder="Select a Manufacturer"
              value={manufacturer}
              onChange={(value) => setManufacturer(value)}
            >
              {ManufacturersData.map((c) => (
                <Option key={c.name} value={c.name}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          
          <Form.Item label="Category">
            <Select
              placeholder="Select a category"
              value={category}
              onChange={(value) => setCategory(value)}
            >
              <Option value="">All Categories</Option>
              <Option value="Electronics">Electronics</Option>
              <Option value="Tools">Tools</Option>
              <Option value="Appliances">Appliances</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Sort by Price">
            <Select
              placeholder="Sort by price"
              value={sortOrder}
              onChange={(value) => setSortOrder(value)}
            >
              <Option value="none">None</Option>
              <Option value="asc">Price: Low to High</Option>
              <Option value="desc">Price: High to Low</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>
              Apply Filters
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px 0' }}>
      {posters.map((item) => (
            <div key={item.title} style={{ flex: '0 0 auto', marginRight: '10px' }}>
                <Card
                        hoverable
                        bordered={false}
                        size="small"
                        style={{
                            color: 'white',
                            backgroundColor: item.bgcolor,
                            borderRadius: '18px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            overflow: 'hidden',
                            width: '280px',
                            height: 'auto',
                        }}
                    >
                        <div style={{ display: 'flex', overflowX: 'auto', padding: '0 6px' }}>
                            <div style={{ padding: '0px', flex: 1 }}>
                                <h5 className="text-white" style={{ fontSize: '12px', marginBottom: '8px' }}>
                                    {item.title}
                                </h5>
                                <p className="text-white" style={{ fontSize: '14px', fontWeight: 'bold'}}>
                                    {item.description}
                                </p>
                            </div>
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: '80px',  // Adjust width as needed
                                    height: '80px',  // Adjust height as needed
                                    borderRadius: '0px',
                                }}
                            />
                        </div>
                        
                    </Card>
            </div>
        ))}
        </div>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px 0' }}>

        {categories.map((item) => (
            <div key={item.name} style={{ flex: '0 0 auto', marginRight: '10px' }}>
              <Card
                hoverable
                bordered={false}
                size="small"
                title={item.name}
                extra={<Avatar shape="square" size={26} className={`rounded-1 ${item.verified ? 'text-success' : 'text-white'} bg-light`} icon={<CheckCircleOutlined />} />}
                cover={<img alt="example" className='rounded-0' src={item.image} />}
                style={{ width: 100, borderRadius: '160px' }}
              >
                <Card.Meta
                  title={item.name}
                  description={`${item.distance} miles. ${item.city}, ${item.state}, ${item.country}`}
                />
              </Card>
            </div>
          ))}
        </div>
      <div style={{ marginTop: '20px' }}>
        <span>Found: {filteredProducts.length}</span>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={item.name} src={item.image} />}
              >
                <Card.Meta
                  avatar={<Avatar src={item.category.icon} />}
                  title={item.name}
                  description={`$${item.price}`}
                />
              </Card>
            </List.Item>
          )}
        />
        <Pagination
          style={{ marginTop: '20px' }}
          current={currentPage}
            pageSize={pageSize}
            total={filteredProducts.length}
            onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Shop;
