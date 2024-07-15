import React, { useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const InputNumber = (props) => {
    const { min, max, onChange} = props;

    const [number, setNumber] = useState(min);

    const handleDecrement = () => {
        if (number - 1 >= min) {
            const newNumber = number - 1;
            setNumber(newNumber);
        }
    };

    const handleIncrement = () => {
        if (number + 1 <= max) {
            const newNumber = number + 1;
            setNumber(newNumber);
        }
    };
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setNumber(newValue);
        }
    };

    return (
        <Space direction="horizontal" style={{ margin: '6px', width: '8rem' }}>
            <Input
                value={number}
                onChange={onChange}
                onKeyDown={handleChange}
                addonBefore={<CaretDownOutlined style={{ cursor: 'pointer' }} onClick={handleDecrement} />}
                addonAfter={<CaretUpOutlined style={{ cursor: 'pointer' }} onClick={handleIncrement} />}    
            />
        </Space>
    );
};

export default InputNumber;
