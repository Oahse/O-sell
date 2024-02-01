import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './DropDown.css';

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
        setSelectWidth((width+width/2) + 'px');
    }, [selectedItem]);

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <div className="custom-dropdown ">
            <Form.Select
                value={selectedItem}
                onChange={handleSelectChange}
                style={{ width: selectWidth }}
            >
                <option>Engineers</option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
}

export default DropDown;
