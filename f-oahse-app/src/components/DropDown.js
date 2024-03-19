import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import './DropDown.css';

const { Option } = Select;

const DropDown = (props) => {
    const { items } = props;
    
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [selectWidth, setSelectWidth] = useState('auto');

    useEffect(() => {
        // Calculate the width of the selected option
        const tempSelect = document.createElement('select');
        const tempOption = document.createElement('option');
        tempOption.textContent = selectedItem;
        tempSelect.appendChild(tempOption);
        document.body.appendChild(tempSelect);
        const width = tempSelect.offsetWidth;
        document.body.removeChild(tempSelect);
        
        // Set the width of the select element
        setSelectWidth((width + width / 2) + 'px');
    }, [selectedItem]);

    const handleSelectChange = (value) => {
        setSelectedItem(value);
    };

    return (
        <Select
            value={selectedItem}
            onChange={handleSelectChange}
            style={{ width: selectWidth }}
            dropdownStyle={{ backgroundColor: 'white' }} // Customize dropdown menu style
            optionClassName="custom-option" // Apply custom class for options
            className='custom-dropdown'
        >
            {items.map((item, index) => (
                <Option key={index} value={item}>
                    {item}
                </Option>
            ))}
        </Select>
    );
}

export default DropDown;
