import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import { Avatar, List, Radio, Space } from 'antd';


function Orders({DATA}){
    const [filteredData, setFilteredData] = useState(DATA);
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    function handleSearch(searchText) {
        const filtered = DATA.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filtered);
      }
    
    
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (<div style={{width:'100%'}}>
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
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
</div>)
}

export default Orders;