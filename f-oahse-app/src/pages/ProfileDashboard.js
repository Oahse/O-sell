import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import { LikeOutlined, MessageOutlined, StarOutlined,ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic,Avatar, Button, List, Skeleton, Space} from 'antd';
import {BarChartComponent} from '../components/charts/BarchartComponent';
import { PieChartComponent } from '../components/charts/PiechartComponent';

// Generate random data for newCustomers
const generateNewCustomersData = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); // Start from the beginning of the current month
    const endDate = new Date(); // End at the current date
  
    const data = [];
    let currentDatePointer = new Date(startDate);
  
    // Generate data for each day from start to end date
    while (currentDatePointer <= endDate) {
      const date = currentDatePointer.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
      const value = Math.floor(Math.random() * 100); // Generate a random value
      data.push({ date, value });
      currentDatePointer.setDate(currentDatePointer.getDate() + 1); // Move to the next day
    }
  
    return data;
  };
  
  

function ProfileDashboard({DATA}){
    const [filteredData, setFilteredData] = useState(DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const newCustomersData = generateNewCustomersData();
    function handleSearch(searchText) {
        const filtered = DATA.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filtered);
      }
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
        setPreviousPage(page-1);
        // You can perform additional actions here, such as fetching data for the new page.
      };
    return <div style={{width:'100%'}}>
            <div className='mini-navbar ms-auto mt-1'>
                
            </div>
            <Row gutter={[6, 6]}>
                <Col xs={12} sm={12} md={8} lg={6} xl={6} xxl={4}>
                <Card bordered={false}>
                    <Statistic
                        title="Gained"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix="$"
                        suffix={<ArrowUpOutlined />}
                    />
                </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={6} xxl={4}>
                <Card bordered={false}>
                    <Statistic
                        title="Spent"
                        value={9.3}
                        precision={2}
                        valueStyle={{
                            color: '#cf1322',
                        }}
                        prefix="$"
                        suffix={<ArrowDownOutlined />}
                    />
                </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card bordered={false} bodyStyle={{ padding: 6}}>
                        <PieChartComponent data={newCustomersData?newCustomersData:[] } title={'Divisions'} />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                <Card bordered={false} bodyStyle={{ padding: 6}}>
                    <BarChartComponent data={newCustomersData?newCustomersData:[] } title={'Activity'} />
                </Card>
                </Col>
            </Row>
            
        </div>;
}

export default ProfileDashboard;