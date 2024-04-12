import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import { Avatar, List, Radio, Space, Skeleton  } from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

function ProfileTransactions({DATA}){
    const [filteredData, setFilteredData] = useState(DATA);
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    
    const data = [
        {
            title: 'Ant Design Title 1',
            type:'sent'
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
            type:'sent'
        },
    ];

    function handleSearch(searchText) {
        const filtered = DATA.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filtered);
    }
    return (
        <div style={{width:'100%'}}>
            <div className='mini-navbar m-auto mt-0 '>
                <Search onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            <List
                pagination={{
                position,
                align,
                }}
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item
                    actions={[item.type === 'sent' ? <ArrowDownOutlined style={{color:'#cf1322'}} /> : <ArrowUpOutlined style={{color:'#3f8600'}} />]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} style={{ backgroundColor: item.type === 'sent' ? '#cf1322' : '#3f8600' }}>{index + 1}</Avatar>}
                            title={<Link to={`/receipt/${67}`}>{item.title} </Link>}
                            description={<small>this is the reason</small>}
                            />
                        </Skeleton>
                </List.Item>

                )}
            />
        </div>)
}

export default ProfileTransactions;