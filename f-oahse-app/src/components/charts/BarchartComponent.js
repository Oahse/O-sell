import React from "react";
import { Typography, Badge, Space, Breadcrumb, Modal} from 'antd';
import {BarChart,Bar,Rectangle,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";

const { Text } = Typography;
export const BarChartComponent = ({ data, title }) => {
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
    <ResponsiveContainer width="100%" height="100%" aspect={700 / 370}>
        <Text strong>{title}</Text>
      <BarChart
        width={'100%'}
        height={'100%'}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: -31,
          bottom: -14,
        }}
      >
        <XAxis dataKey="date" style={{fontSize:'8px'}} />
        <YAxis  style={{fontSize:'8px'}}/>
        <Tooltip />
        <Bar
          dataKey="value"
          fill={generateRandomColor()}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
