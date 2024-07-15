import React, { useState, useEffect } from 'react';
import { Input, Button, Form, Space, Slider, Card, List, Skeleton, Drawer, Select, Avatar} from 'antd';
import { BorderOutlined, CheckCircleOutlined, ControlOutlined, SearchOutlined, EyeOutlined, MessageOutlined } from '@ant-design/icons';
import countriesData from '../components/countries.json';
import Pagination from "../components/Pagination";
import Search from '../components/Search';
import { Link } from "react-router-dom";

const { Option } = Select;

const jobsData = [
  {
    id: '1',
    title: 'Plumbing Job',
    description: 'Fix the leaking sink in the kitchen.',
    country: 'USA',
    state: 'New York',
    city: 'New York City',
    profession: 'Plumber',
    hashtags: ['plumbing', 'sink', 'leak'],
    distance: 10,
  },
  {
    id: '2',
    title: 'Electrical Wiring',
    description: 'Install new electrical wiring in the living room.',
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    profession: 'Electrician',
    hashtags: ['wiring', 'electric', 'installation'],
    distance: 20,
  },
  // Add more job data here...
];

const professions = ['Plumber', 'Electrician', 'Carpenter', 'Painter'];

const Jobs = () => {
  const [miles, setMiles] = useState(10);
  const [profession, setProfession] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [description, setDescription] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
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
    const filtered = jobsData.filter((job) => {
      return (
        (country ? job.country === country : true) &&
        (state ? job.state === state : true) &&
        (city ? job.city === city : true) &&
        (profession ? job.profession === profession : true) &&
        (hashtags ? job.hashtags.includes(hashtags) : true) &&
        (description ? job.description.includes(description) : true) &&
        job.distance <= miles
      );
    });
    setFilteredJobs(filtered);
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
      
      <Search handleSearch={handleSearch} showDrawer={showDrawer} onChange={(e) => setDescription(e.target.value)} />

      {/* Drawer for filters */}
      <Drawer
        title="Filter Jobs"
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
          <Form.Item label="Hashtags">
            <Input
              placeholder="Enter hashtags"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
            />
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
                  setHashtags('');
                  setDescription('');
                  setFilteredJobs(jobsData);
                }}
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>

      <div style={{ marginTop: '20px' }}>
        <span>Found: {filteredJobs.length}</span>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 5,
            xl: 5,
          }}
          dataSource={filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          renderItem={(item) => (
            <List.Item>
              <Link to={{ pathname: `/job/${item.id}/view` }} state={{ job: item }} className='text-decoration-none'>
                <Card
                  hoverable
                  size="small"
                  title={item.title}
                  style={{ height: '190px' }}
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      title={item.profession}
                      description={item.description}
                    />
                  </Skeleton>
                  <div className='list-icons d-flex justify-content-end'>
                    <Link to={{ pathname: `/job/${item.id}/chat` }} state={{ job: item }} className='text-decoration-none'>
                      <Avatar shape="square" size={26} className={`rounded-1 text-dark ms-2`} icon={<EyeOutlined style={{ fontSize: '1.2rem', cursor: 'pointer' }} />} />
                    </Link>
                  </div>
                </Card>
              </Link>
            </List.Item>
          )}
        />
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredJobs.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
