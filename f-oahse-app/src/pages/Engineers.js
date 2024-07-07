import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Skeleton,   Drawer, Select, Avatar, Pagination } from 'antd';
import { BorderOutlined, CheckCircleOutlined, ControlOutlined, SearchOutlined,EyeOutlined, MessageOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';
import {Link} from "react-router-dom";

const { Option } = Select;

const tradespeopleData = [
  { name: 'John Doe', country: 'USA', state: 'New York', city: 'New York City', profession: 'Plumber', distance: 10, image: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', country: 'USA', state: 'California', city: 'Los Angeles', profession: 'Electrician', distance: 20, image: 'https://via.placeholder.com/150' },
  { name: 'Carlos Gomez', country: 'Mexico', state: 'Jalisco', city: 'Guadalajara', profession: 'Carpenter', distance: 15, image: 'https://via.placeholder.com/150' },
  { name: 'Marie Curie', country: 'France', state: 'Île-de-France', city: 'Paris', profession: 'Painter', distance: 5, image: 'https://via.placeholder.com/150' },
  { name: 'Kofi Annan', country: 'Ghana', state: 'Greater Accra', city: 'Accra', profession: 'Plumber', distance: 25, image: 'https://via.placeholder.com/150' },
  { name: 'Nina Ricci', country: 'Italy', state: 'Lazio', city: 'Rome', profession: 'Electrician', distance: 30, image: 'https://via.placeholder.com/150' },
  { name: 'Li Wei', country: 'China', state: 'Beijing', city: 'Beijing', profession: 'Carpenter', distance: 12, image: 'https://via.placeholder.com/150' },
  { name: 'Olga Ivanov', country: 'Russia', state: 'Moscow', city: 'Moscow', profession: 'Painter', distance: 18, image: 'https://via.placeholder.com/150' },
  { name: 'Samir Khan', country: 'India', state: 'Maharashtra', city: 'Mumbai', profession: 'Plumber', distance: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Ahmed Fahmy', country: 'Egypt', state: 'Cairo', city: 'Cairo', profession: 'Electrician', distance: 22, image: 'https://via.placeholder.com/150' },
  { name: 'Sara Connor', country: 'Australia', state: 'New South Wales', city: 'Sydney', profession: 'Carpenter', distance: 7, image: 'https://via.placeholder.com/150' },
  { name: 'Tom Hiddleston', country: 'UK', state: 'England', city: 'London', profession: 'Painter', distance: 10, image: 'https://via.placeholder.com/150' },
  { name: 'Hiroshi Tanaka', country: 'Japan', state: 'Tokyo', city: 'Tokyo', profession: 'Plumber', distance: 6, image: 'https://via.placeholder.com/150' },
  { name: 'Luis Fernandez', country: 'Spain', state: 'Madrid', city: 'Madrid', profession: 'Electrician', distance: 14, image: 'https://via.placeholder.com/150' },
  { name: 'Fatima Zahra', country: 'Morocco', state: 'Rabat-Salé-Kénitra', city: 'Rabat', profession: 'Carpenter', distance: 13, image: 'https://via.placeholder.com/150' },
  { name: 'Amara Oumar', country: 'Nigeria', state: 'Lagos', city: 'Lagos', profession: 'Painter', distance: 9, image: 'https://via.placeholder.com/150' },
  { name: 'Bruce Wayne', country: 'USA', state: 'Illinois', city: 'Chicago', profession: 'Plumber', distance: 20, image: 'https://via.placeholder.com/150' },
  { name: 'Peter Parker', country: 'USA', state: 'New York', city: 'Queens', profession: 'Electrician', distance: 11, image: 'https://via.placeholder.com/150' },
  { name: 'Clark Kent', country: 'USA', state: 'Kansas', city: 'Smallville', profession: 'Carpenter', distance: 16, image: 'https://via.placeholder.com/150' },
  { name: 'Diana Prince', country: 'USA', state: 'Washington D.C.', city: 'Washington D.C.', profession: 'Painter', distance: 12, image: 'https://via.placeholder.com/150' },
  { name: 'Logan Howlett', country: 'Canada', state: 'Alberta', city: 'Calgary', profession: 'Plumber', distance: 21, image: 'https://via.placeholder.com/150' },
  { name: 'Charles Xavier', country: 'USA', state: 'New York', city: 'Westchester', profession: 'Electrician', distance: 14, image: 'https://via.placeholder.com/150' },
  { name: 'Victor Von Doom', country: 'Latveria', state: 'Doomstadt', city: 'Doomstadt', profession: 'Carpenter', distance: 10, image: 'https://via.placeholder.com/150' },
  { name: 'Stephen Strange', country: 'USA', state: 'New York', city: 'New York City', profession: 'Painter', distance: 5, image: 'https://via.placeholder.com/150' },
  { name: 'Wade Wilson', country: 'Canada', state: 'Ontario', city: 'Toronto', profession: 'Plumber', distance: 18, image: 'https://via.placeholder.com/150' },
  { name: "T'Challa", country: 'Wakanda', state: 'Central Wakanda', city: 'Birnin Zana', profession: 'Electrician', distance: 25, image: 'https://via.placeholder.com/150' },
  { name: 'Barry Allen', country: 'USA', state: 'Missouri', city: 'Central City', profession: 'Carpenter', distance: 20, image: 'https://via.placeholder.com/150' },
  { name: 'Arthur Curry', country: 'USA', state: 'Maine', city: 'Amnesty Bay', profession: 'Painter', distance: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Hal Jordan', country: 'USA', state: 'California', city: 'Coast City', profession: 'Plumber', distance: 22, image: 'https://via.placeholder.com/150' },
  { name: 'Selina Kyle', country: 'USA', state: 'New York', city: 'Gotham City', profession: 'Electrician', distance: 12, image: 'https://via.placeholder.com/150' },
];


const professions = ['Plumber', 'Electrician', 'Carpenter', 'Painter'];

const TradespersonSearch = () => {
  const [location, setLocation] = useState('');
  const [miles, setMiles] = useState(10);
  const [profession, setProfession] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [filteredTradespeople, setFilteredTradespeople] = useState(tradespeopleData);
  const [visible, setVisible] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    if (country) {
      const selectedCountry = countriesData.find(c => c.name === country);
      if (selectedCountry) {
        setStates(selectedCountry.states);
      } else {
        setStates([]);
      }
    } else {
      setStates([]);
    }
    setState('');
    setCity('');
    setCities([]);
  }, [country]);

  useEffect(() => {
    if (state && country) {
      const selectedCountry = countriesData.find(c => c.name === country);
      const selectedState = selectedCountry.states.find(s => s.name === state);
      if (selectedState) {
        setCities(selectedState.cities);
      } else {
        setCities([]);
      }
    } else {
      setCities([]);
    }
    setCity('');
  }, [state]);

  const handleSearch = () => {
    const filtered = tradespeopleData.filter((person) => {
      return (
        (country ? person.country === country : true) &&
        (state ? person.state === state : true) &&
        (city ? person.city === city : true) &&
        (profession ? person.profession === profession : true) &&
        person.distance <= miles
      );
    });
    setFilteredTradespeople(filtered);
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
    <div style={{ padding: '8px'}}>
      <div className='d-flex justify-space-between align-items-center'>
        <Input
          placeholder="Search for tradesperson"
          prefix={<SearchOutlined style={{ fontSize: '18px', fontWeight: 'bold' }} />}
          style={{ width: '100%', marginRight: '10px' }}
          onPressEnter={handleSearch}
        />
        <Avatar shape="square" size={42} icon={<ControlOutlined rotate={90} />} className='filtericon m-1 px-3' onClick={showDrawer} style={{ color: 'black' }} />
      </div>

      {/* Drawer for filters */}
      <Drawer
        title="Filter Tradespeople"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
      >
        <Form layout="vertical">
          <Form.Item label="Country">
            <Select
              placeholder="Select Country"
              value={country}
              onChange={(value) => setCountry(value)}
            >
              {countriesData.map((country) => (
                <Option key={country.name} value={country.name}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {states.length > 0 && (
            <Form.Item label="State">
              <Select
                placeholder="Select State"
                value={state}
                onChange={(value) => setState(value)}
              >
                {states.map((state) => (
                  <Option key={state.name} value={state.name}>
                    {state.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {cities.length > 0 && (
            <Form.Item label="City">
              <Select
                placeholder="Select City"
                value={city}
                onChange={(value) => setCity(value)}
              >
                {cities.map((city) => (
                  <Option key={city.name} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item label="Miles">
            <Slider
              min={0}
              max={50}
              value={miles}
              onChange={(value) => setMiles(value)}
            />
          </Form.Item>
          <Form.Item label="Profession">
            <Select
              placeholder="Select profession"
              value={profession}
              onChange={(value) => setProfession(value)}
            >
              {professions.map((prof) => (
                <Option key={prof} value={prof}>
                  {prof}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" onClick={handleSearch}>
                Search
              </Button>
              <Button
                onClick={() => {
                  setCountry('');
                  setState('');
                  setCity('');
                  setMiles(10);
                  setProfession('');
                  setFilteredTradespeople(tradespeopleData);
                }}
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>

      <div style={{ marginTop: '20px' }}>
        <span>Found: {filteredTradespeople.length}</span>
        <List
          grid={{ gutter: 16,
             xs: 1,   // mobile
            sm: 2,   // tablet
            md: 4,   // laptop
            lg: 6,   // desktop
            xl: 8,   // extra-large screens 
            }}
          dataSource={filteredTradespeople.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                size="small"
                title={item.name}
                style={{height: '210px'}}
                extra={<Avatar shape="square" size={26} className={`rounded-1 ${item.verified ? 'text-success' : 'text-white'} bg-light`} icon={<CheckCircleOutlined />} />}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                    avatar={<Avatar size={48} src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${2}`} style={{ backgroundColor: item.type === 'sent' ? '#cf1322' : '#3f8600' }}>{2 + 1}</Avatar>}
                    title={item.profession}
                    description={`${item.distance} miles.  ${item.city}, ${item.state}, ${item.country}`}
                    
                    />
                    
                </Skeleton>
                <div className='mt-2 d-flex justify-content-end'>
                      <Avatar shape="square" size={26} className={`rounded-1 text-dark ms-2`} icon={<EyeOutlined  style={{ fontSize: '1.2rem', cursor: 'pointer' }} />} />
                      <Avatar shape="square" size={26} className={`rounded-1 text-dark ms-2`} icon={<MessageOutlined  style={{ fontSize: '1.2rem', cursor: 'pointer' }} />} />
                    </div>
              </Card>
            </List.Item>
          )}
        />
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredTradespeople.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TradespersonSearch;
