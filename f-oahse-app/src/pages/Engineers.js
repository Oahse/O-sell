import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Skeleton,   Drawer, Select, Avatar} from 'antd';
import { BorderOutlined, CheckCircleOutlined, ControlOutlined, SearchOutlined,EyeOutlined, MessageOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';
import {Link} from "react-router-dom";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const { Option } = Select;

const tradespeopleData = [
  {
    id: '1',
    title: 'Mr.',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phonenumber: '1234567890',
    nin: 'A123456789',
    passport: 'X1234567',
    image: 'https://via.placeholder.com/150',
    address: '1',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-01-01',
    avgratings: 4.5,
    is_tradeperson: true,
    professionname: { name: 'Plumber' },
    regulations: ['Regulation A', 'Regulation B'],
    websiteurl: 'https://johndoe.com',
    last_login: '2024-07-07',
    country: 'USA',
    state: 'New York',
    city: 'New York City',
    distance: 10,
  },
  {
    id: '2',
    title: 'Ms.',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@example.com',
    phonenumber: '0987654321',
    nin: 'B987654321',
    passport: 'Y7654321',
    image: 'https://via.placeholder.com/150',
    address: '2',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: false,
    verifiedAt: '2022-02-02',
    avgratings: 4.8,
    is_tradeperson: true,
    professionname: { name: 'Electrician' },
    regulations: ['Regulation C', 'Regulation D'],
    websiteurl: 'https://janesmith.com',
    last_login: '2024-07-07',
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    distance: 20,
  },
  {
    id: '3',
    title: 'Mr.',
    first_name: 'Carlos',
    last_name: 'Gomez',
    email: 'carlos.gomez@example.com',
    phonenumber: '2345678901',
    nin: 'C234567890',
    passport: 'Z2345678',
    image: 'https://via.placeholder.com/150',
    address: '3',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-03-03',
    avgratings: 4.3,
    is_tradeperson: true,
    professionname: { name: 'Carpenter' },
    regulations: ['Regulation E', 'Regulation F'],
    websiteurl: 'https://carlosgomez.com',
    last_login: '2024-07-07',
    country: 'Mexico',
    state: 'Jalisco',
    city: 'Guadalajara',
    distance: 15,
  },
  {
    id: '4',
    title: 'Mme.',
    first_name: 'Marie',
    last_name: 'Curie',
    email: 'marie.curie@example.com',
    phonenumber: '3456789012',
    nin: 'D345678901',
    passport: 'A3456789',
    image: 'https://via.placeholder.com/150',
    address: '4',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-04-04',
    avgratings: 4.9,
    is_tradeperson: true,
    professionname: { name: 'Painter' },
    regulations: ['Regulation G', 'Regulation H'],
    websiteurl: 'https://mariecurie.com',
    last_login: '2024-07-07',
    country: 'France',
    state: 'Île-de-France',
    city: 'Paris',
    distance: 5,
  },
  {
    id: '5',
    title: 'Mr.',
    first_name: 'Kofi',
    last_name: 'Annan',
    email: 'kofi.annan@example.com',
    phonenumber: '4567890123',
    nin: 'E456789012',
    passport: 'B4567890',
    image: 'https://via.placeholder.com/150',
    address: '5',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-05-05',
    avgratings: 4.6,
    is_tradeperson: true,
    professionname: { name: 'Plumber' },
    regulations: ['Regulation I', 'Regulation J'],
    websiteurl: 'https://kofiannan.com',
    last_login: '2024-07-07',
    country: 'Ghana',
    state: 'Greater Accra',
    city: 'Accra',
    distance: 25,
  },
  {
    id: '6',
    title: 'Ms.',
    first_name: 'Nina',
    last_name: 'Ricci',
    email: 'nina.ricci@example.com',
    phonenumber: '5678901234',
    nin: 'F567890123',
    passport: 'C5678901',
    image: 'https://via.placeholder.com/150',
    address: '6',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-06-06',
    avgratings: 4.7,
    is_tradeperson: true,
    professionname: { name: 'Electrician' },
    regulations: ['Regulation K', 'Regulation L'],
    websiteurl: 'https://ninaricci.com',
    last_login: '2024-07-07',
    country: 'Italy',
    state: 'Lazio',
    city: 'Rome',
    distance: 30,
  },
  {
    id: '7',
    title: 'Mr.',
    first_name: 'Li',
    last_name: 'Wei',
    email: 'li.wei@example.com',
    phonenumber: '6789012345',
    nin: 'G678901234',
    passport: 'D6789012',
    image: 'https://via.placeholder.com/150',
    address: '7',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-07-07',
    avgratings: 4.8,
    is_tradeperson: true,
    professionname: { name: 'Carpenter' },
    regulations: ['Regulation M', 'Regulation N'],
    websiteurl: 'https://liwei.com',
    last_login: '2024-07-07',
    country: 'China',
    state: 'Beijing',
    city: 'Beijing',
    distance: 12,
  },
  {
    id: '8',
    title: 'Ms.',
    first_name: 'Olga',
    last_name: 'Ivanov',
    email: 'olga.ivanov@example.com',
    phonenumber: '7890123456',
    nin: 'H789012345',
    passport: 'E7890123',
    image: 'https://via.placeholder.com/150',
    address: '8',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-08-08',
    avgratings: 4.4,
    is_tradeperson: true,
    professionname: { name: 'Painter' },
    regulations: ['Regulation O', 'Regulation P'],
    websiteurl: 'https://olgaivanov.com',
    last_login: '2024-07-07',
    country: 'Russia',
    state: 'Moscow',
    city: 'Moscow',
    distance: 18,
  },
  {
    id: '9',
    title: 'Mr.',
    first_name: 'Samir',
    last_name: 'Khan',
    email: 'samir.khan@example.com',
    phonenumber: '8901234567',
    nin: 'I890123456',
    passport: 'F8901234',
    image: 'https://via.placeholder.com/150',
    address: '9',
    is_staff: false,
    is_active: true,
    is_superuser: false,
    verified: true,
    verifiedAt: '2022-09-09',
    avgratings: 4.3,
    is_tradeperson: true,
    professionname: { name: 'Plumber' },
    regulations: ['Regulation Q', 'Regulation R'],
    websiteurl: 'https://samirkhan.com',
    last_login: '2024-07-07',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    distance: 8,
  }
];


const professions = ['Plumber', 'Electrician', 'Carpenter', 'Painter'];

const TradespersonSearch = () => {
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
  }, [state, country]);

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
      <Search handleSearch={handleSearch} showDrawer={showDrawer} />

      {/* Drawer for filters */}
      <Drawer
        title="Filter Tradespeople"
        placement="right"
        onClose={onClose}
        open={visible}
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
              <Button onClick={handleSearch}>
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
            lg: 5,   // desktop
            xl: 5,   // extra-large screens 
            }}
          dataSource={filteredTradespeople.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          renderItem={(item) => (
            <List.Item>
              <Link to={{pathname:`/tradesperson/${item.id}/view`}} state={{user: item}} className='text-decoration-none'>
                  <Card
                    hoverable
                    size="small"
                    title={item.first_name +'' + item.last_name}
                    style={{height: '190px'}}
                    
                    extra={<Avatar shape="square" size={26} className={`rounded-1 ${item.verified ? 'text-success' : 'text-white'} bg-light`} icon={<CheckCircleOutlined />} />}
                  >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                        avatar={<Avatar size={54} src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.id}` || `${parseInt(item.id) + 1}`} style={{ backgroundColor: item.type === 'sent' ? '#cf1322' : '#3f8600' }} />}
                        title={item.professionname.name}
                        description={<div>
                          <p className='small m-0'>{item.distance} miles,</p>
                          <p className='small m-0'>{(item.city.length>12)?item.city.slice(0,11):item.city},</p>
                          <p className='small m-0'>{(item.state.length>12)?item.state.slice(0,11):item.state},</p>
                          <p className='m-0'>{(item.country.length>12)?item.country.slice(0,11):item.country}</p>
                        </div>}
                        
                        />
                        
                    </Skeleton>
                    <div className='list-icons d-flex justify-content-end'>
                          <Link to={{pathname:`/tradesperson/${item.id}/chat`}} state={{user: item}} className='text-decoration-none'>
                            <Avatar shape="square" size={26} className={`rounded-1 text-dark ms-2`} icon={<EyeOutlined  style={{ fontSize: '1.2rem', cursor: 'pointer' }} />} />
                          </Link> 
                          <Link to={{pathname:`/tradesperson/${item.id}/chat`}} state={{person: item}} className='text-decoration-none'>    
                            <Avatar  shape="square" size={26} className={`rounded-1 text-dark ms-2`} icon={<MessageOutlined  style={{ fontSize: '1.2rem', cursor: 'pointer' }} />} />
                          </Link>
                        </div>
                    
                  </Card>
              </Link>
            </List.Item>
          )}
        />
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            totallength={filteredTradespeople.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TradespersonSearch;
