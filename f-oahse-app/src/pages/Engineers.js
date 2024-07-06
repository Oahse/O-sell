import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Drawer, Select, Avatar } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';

const { Option } = Select;

const tradespeopleData = [
  { name: 'John Doe', country: 'USA', state: 'New York', city: 'New York City', profession: 'Plumber', distance: 10 },
  { name: 'Jane Smith', country: 'USA', state: 'California', city: 'Los Angeles', profession: 'Electrician', distance: 20 },
  // Add more tradespeople data here
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

  return (
    <div style={{ padding: '8px' }}>
      <div className='d-flex justify-space-between align-items-center'>
        <Input
          placeholder="Search for tradesperson"
          prefix={<SearchOutlined style={{ fontSize: '18px', fontWeight: 'bold' }} />}
          style={{ width: '300px', marginRight: '10px' }}
          onPressEnter={handleSearch}
        />
        <Avatar shape="square" size={42} icon={<FilterOutlined />} className='filtericon m-1 px-3' onClick={showDrawer} style={{ color: 'black' }} />
      </div>

      {/* Drawer for filters */}
      <Drawer
        title="Filter Tradespeople"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
        
      >
        <Form layout="vertical" >
          <Form.Item label="Country">
            <Select
              pr
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
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={filteredTradespeople}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.name}>
                <p>Country: {item.country}</p>
                <p>State: {item.state}</p>
                <p>City: {item.city}</p>
                <p>Profession: {item.profession}</p>
                <p>Distance: {item.distance} miles</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TradespersonSearch;
