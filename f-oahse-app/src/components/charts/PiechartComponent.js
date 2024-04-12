import React from "react";
import { Typography, Badge, Space, Breadcrumb, Modal} from 'antd';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const { Text } = Typography;

export const PieChartComponent = ({ data, title }) => {
    // Function to generate a random color
    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={1}>
            <Text strong>{title}</Text>
            <PieChart 
                width={'100%'}
                height={'100%'}
                    
                margin={{
                    top: 0,
                    right: -40,
                    left: -41,
                    bottom: -14,
                }}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={generateRandomColor()}
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};
