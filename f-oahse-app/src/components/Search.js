import React, { useState } from 'react';
import {Input, Avatar} from 'antd';

const Search = ({inputMessage,handleSearch, showDrawer,onChange}) => {
    
    return (
      <div className='d-flex justify-space-between align-items-center'>
        <Input
          placeholder="Search for tradesperson"
          prefix={<i className="fa-light fa-magnifying-glass" style={{ fontSize: '18px'}} onClick={handleSearch}></i>}
          style={{ width: '100%', marginRight: '10px' }}
          onPressEnter={handleSearch}
          onChange={onChange}
          value={inputMessage}
        />
        <Avatar shape="square" size={42} icon={<i className="fa-light fa-sliders"></i>} className='filtericon m-1 px-3' onClick={showDrawer} style={{ color: 'black' }} />
      </div>
    )
}

export default Search;