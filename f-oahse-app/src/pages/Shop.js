import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Drawer, Select, Avatar} from 'antd';
import { BorderOutlined, CheckCircleOutlined, ControlOutlined, SearchOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';
import gears from '../assets/gears.jpg';
import ProductsData from '../components/productsData';
import Pagination from "../components/Pagination";
import Search from '../components/Search';
const { Option } = Select;
  
const categories = [
  {
    id: 1,
    name: 'Civil Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1768/1768788.png',
    title: 'Civil Engineering'
  },
  {
    id: 2,
    name: 'Mechanical Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1080/1080521.png',
    title: 'Mechanical Engineering'
  },
  {
    id: 3,
    name: 'Electrical Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    title: 'Electrical Engineering'
  },
  {
    id: 4,
    name: 'Chemical Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3063/3063018.png',
    title: 'Chemical Engineering'
  },
  {
    id: 5,
    name: 'Software Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
    title: 'Software Engineering'
  },
  {
    id: 6,
    name: 'Environmental Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1754/1754280.png',
    title: 'Environmental Engineering'
  },
  {
    id: 7,
    name: 'Aerospace Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2072/2072262.png',
    title: 'Aerospace Engineering'
  },
  {
    id: 8,
    name: 'Biomedical Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2004/2004650.png',
    title: 'Biomedical Engineering'
  },
  {
    id: 9,
    name: 'Industrial Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2081/2081767.png',
    title: 'Industrial Engineering'
  },
  {
    id: 10,
    name: 'Nuclear Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2303/2303764.png',
    title: 'Nuclear Engineering'
  },
  {
    id: 11,
    name: 'Petroleum Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2042/2042291.png',
    title: 'Petroleum Engineering'
  },
  {
    id: 12,
    name: 'Structural Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3011/3011988.png',
    title: 'Structural Engineering'
  },
  {
    id: 13,
    name: 'Automotive Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png',
    title: 'Automotive Engineering'
  },
  {
    id: 14,
    name: 'Marine Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1163/1163540.png',
    title: 'Marine Engineering'
  },
  {
    id: 15,
    name: 'Materials Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2058/2058750.png',
    title: 'Materials Engineering'
  },
  {
    id: 16,
    name: 'Mining Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2084/2084860.png',
    title: 'Mining Engineering'
  },
  {
    id: 17,
    name: 'Geotechnical Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/167/167778.png',
    title: 'Geotechnical Engineering'
  },
  {
    id: 18,
    name: 'Agricultural Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1945/1945735.png',
    title: 'Agricultural Engineering'
  },
  {
    id: 19,
    name: 'Systems Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/753/753345.png',
    title: 'Systems Engineering'
  },
  {
    id: 20,
    name: 'Robotics Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/1827/1827456.png',
    title: 'Robotics Engineering'
  },
  {
    id: 21,
    name: 'Telecommunications Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2202/2202211.png',
    title: 'Telecommunications Engineering'
  },
  {
    id: 22,
    name: 'Construction Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2965/2965293.png',
    title: 'Construction Engineering'
  },
  {
    id: 23,
    name: 'Textile Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2361/2361820.png',
    title: 'Textile Engineering'
  },
  {
    id: 24,
    name: 'Biotechnology Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3126/3126516.png',
    title: 'Biotechnology Engineering'
  },
  {
    id: 25,
    name: 'Instrumentation Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2825/2825636.png',
    title: 'Instrumentation Engineering'
  },
  {
    id: 26,
    name: 'Safety Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/3082/3082016.png',
    title: 'Safety Engineering'
  },
  {
    id: 27,
    name: 'Nanotechnology Engineering',
    logo: 'https://cdn-icons-png.flaticon.com/512/2316/2316076.png',
    title: 'Nanotechnology Engineering'
  }
];
  
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
  const [selectedmanufacturer, setManufacturer] = useState(ManufacturersData[0]);
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('relevance');
  const [showDrawer, setShowDrawer] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 12 });


  useEffect(() => {
    let filtered = ProductsData.filter(product => {
      const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || product.category.name === selectedCategory;
      const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearchQuery && matchesCategory && matchesPriceRange;
    });

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const handleSearch = () => {
    setPagination({ ...pagination, page: 1 });
  };
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handlePaginationChange = (page, pageSize) => {
    setPagination({ page, pageSize });
  };

  const paginatedProducts = filteredProducts.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize);


  return (
    <div style={{ padding: '8px' }}>
      <Search handleSearch={handleSearch} showDrawer={handleDrawerOpen} onChange={(e) => setSearchQuery(e.target.value)} />

      {/* Drawer for filters */}
      <Drawer
        title="Filters"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        visible={showDrawer}
        width={400}
      >
        <div style={{ marginBottom: 16 }}>
          <span>Manufacturers</span>
            <Select
              placeholder="Select a Manufacturer"
              value={selectedmanufacturer}
              onChange={(value) => setManufacturer(value)}
            >
              <Option value="All Manufacturers">All Manufacturers</Option>
              {ManufacturersData.map((manufacturer) => (
                <Option key={manufacturer.name} value={manufacturer.name}>
                  <Avatar src={manufacturer.logo} size="small" style={{ marginRight: 8 }} />
                  {manufacturer.name}
                </Option>
              ))}
            </Select>
          </div>
          
          <div style={{ marginBottom: 16 }}>
          <span>Categories</span>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ width: '100%' }}
          >
            <Option value="All Categories">All Categories</Option>
            {categories.map(category => (
              <Option key={category.id} value={category.title}>
                <Avatar src={category.logo} size="small" style={{ marginRight: 8 }} />
                {category.name}
              </Option>
            ))}
          </Select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <span>Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
            <Slider
              range
              min={priceRange[0]}
              max={priceRange[1]}
              value={priceRange}
              onChange={handlePriceChange}
              style={{ marginTop: 10 }}
            />
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <span>Sort By:</span>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: '100%', marginTop: 10 }}
            >
              <Option value="relevance">Relevance</Option>
              <Option value="price-asc">Price: Low to High</Option>
              <Option value="price-desc">Price: High to Low</Option>
              <Option value="name-asc">Name: A to Z</Option>
              <Option value="name-desc">Name: Z to A</Option>
            </Select>
          </div>
      </Drawer>
      <div className='posters'>
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

      <div className='d-flex justify-content-between mt-4' ><span>Categories</span> <small>See All</small></div>
      <div className='categories'>
          {categories.map((item) => (
            <div key={item.name} style={{ flex: '0 0 auto', marginRight: '10px' }}>
              <Card
                hoverable
                bordered={false}
                size="small"
                cover={<img alt={item.name} className='rounded-0' src={item.logo} />}
                style={{ width: 100, borderRadius: '160px', padding:'10px' }}
              >
                <Card.Meta
                  description={item.name}
                  style={{
                    fontSize: '10px',
                    padding: '0px',
                  }}
                />
              </Card>
            </div>
          ))}
      </div>

      <div style={{ marginTop: '14px' }}>
        <div className='d-flex justify-content-between' ><span>New Releases</span> <small>See All</small></div>
        <small>Found: <span className={`${(filteredProducts.length>0)?'text-success':'text-danger'}`}>{filteredProducts.length}</span></small> 
        <div className='new-releases'>
          {filteredProducts.map((item) => (
            <div key={item.title} style={{ flex: '0 0 auto', marginRight: '10px' }}>
              <div className="ant-card ant-card-bordered ant-card-hoverable css-dev-only-do-not-override-f7vrd6" style={{borderRadius: '160px', padding:'8px',width:'150px' }}>
                  <div className="ant-card-cover">
                    <img alt={item.name} src={item.image} style={{height: '120px' }} />
                  </div>
                  <div className="ant-card-body recommended-card">
                    <Card.Meta
                      title={item.name}
                      style={{
                        fontSize: '12px',
                        padding: '0px',
                      }}
                      description={
                        <div>
                          <span>{item.businessid}
                            <Avatar shape="circle" size={20} className={`ms-1 rounded-1 ${!item.verified ? 'text-success' : 'text-white'} bg-light`} icon={<CheckCircleOutlined />} />
                          </span>
                          <div className='fw-bold'>${item.price.toFixed(2)}</div>
                        </div>
                      }
                      
                    />
                    <span className="d-flex justify-content-end mt-2">
                      <Avatar shape="square" size={26} icon={<i className="fa-light fa-eye text-white"></i>} />
                      <Avatar className='ms-1' shape="square" size={26} icon={<i className="fa-light fa-cart-plus text-success"></i>} />
                    </span>
                  </div>
                </div>
            </div>
            ))}
        </div>
      </div>
      
      <div style={{ marginTop: '14px' }}>
        <div className='d-flex justify-content-between'><span>Recommended</span> <small>See All</small></div>
        <small>Found: <span className={`${(paginatedProducts.length>0)?'text-success':'text-danger'}`}>{paginatedProducts.length}</span></small>
        <List
          grid={{ gutter: 4,
            xs: 2,   // mobile
           sm: 4,   // tablet
           md: 4,   // laptop
           lg: 6,   // desktop
           xl: 6,   // extra-large screens 
           }}
           dataSource={paginatedProducts}
          renderItem={item => (
            <List.Item key={item.title}>
              <div className="ant-card ant-card-bordered ant-card-hoverable css-dev-only-do-not-override-f7vrd6" style={{borderRadius: '160px', padding:'8px' }}>
                <div className="ant-card-cover">
                  <img alt={item.name} src={item.image} style={{height: '120px' }} />
                </div>
                <div className="ant-card-body recommended-card">
                  <Card.Meta
                    title={item.name}
                    style={{
                      fontSize: '12px',
                      padding: '0px',
                    }}
                    description={
                      <div>
                        <span>{item.businessid}
                          <Avatar shape="circle" size={20} className={`ms-1 rounded-1 ${!item.verified ? 'text-success' : 'text-white'} bg-light`} icon={<CheckCircleOutlined />} />
                        </span>
                        <div className='fw-bold'>${item.price.toFixed(2)}</div>
                      </div>
                    }
                    
                  />
                  <span className="d-flex justify-content-end mt-2">
                    <Avatar shape="square" size={26} icon={<i className="fa-light fa-eye text-white"></i>} />
                    <Avatar className='ms-1' shape="square" size={26} icon={<i className="fa-light fa-cart-plus text-success"></i>} />
                  </span>
                </div>
              </div>
            </List.Item>
          )}
        />
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <Pagination
          current={pagination.page}
          pageSize={pagination.pageSize}
          total={filteredProducts.length}
          onChange={handlePaginationChange}
          style={{ marginTop: 10, textAlign: 'center' }}
        />
        </div>
      </div>
    </div>
  );
};

export default Shop;
