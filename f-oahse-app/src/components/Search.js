import React, { useState } from 'react';
import { SettingOutlined, SearchOutlined} from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';
import  Icon  from "./Icon";

const { Option } = Select;

const selectBefore = (items,  onClick, onKeyDown, value) => (
  <Select defaultValue="hello">
    {items.map((item, index) => (
      <Option key={index} value={item}>
        {item}
      </Option>
    ))}
  </Select>
);

const Search = (props) => {
  const { items, filter,onClick, onKeyDown, value } = props;
  const [searchText, setSearchText] = useState(value || ''); // Set initial state from prop

  const handleInputChange = (newValue) => {
    setSearchText(newValue);
  };

  const handleSearchClick = () => {
    onClick(searchText);
    onKeyDown(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Trigger search action when Enter key is pressed
      onKeyDown(searchText);
    }
  };

  return (
    <Space direction="horizontal" style={{ margin: '6px', width: '99%' }}>
      {(items||filter)?
        <Input
        value={searchText}
        onChange={(e) => handleInputChange(e.target.value)}
        onSearch={handleSearchClick}
        onPressEnter={() => onKeyDown(searchText)}
        addonBefore={filter?filter:selectBefore(items)}
        addonAfter={
          <SearchOutlined style={{ cursor: 'pointer' }} onClick={handleSearchClick} />
        }
        defaultValue="Search.."
      />
      :<Input
        value={searchText}
        onChange={(e) => handleInputChange(e.target.value)}
        onSearch={handleSearchClick}
        onPressEnter={() => onKeyDown(searchText)}
        addonAfter={
          <SearchOutlined style={{ cursor: 'pointer' }} onClick={handleSearchClick} />
        }
        defaultValue="Search.."
      />}
      
    </Space>
  );
};

export default Search;
