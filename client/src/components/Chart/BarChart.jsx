// BarChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 14000 },
  { name: 'Feb', value: 7000 },
  { name: 'Mar', value: 18000 },
  { name: 'Apr', value: 16000 },
  { name: 'May', value: 12000 },
  { name: 'Jun', value: 15000 },
  { name: 'Jul', value: 8000 },
  { name: 'Aug', value: 14000 },
  { name: 'Sep', value: 17000 },
  { name: 'Oct', value: 26000 },
  { name: 'Nov', value: 14000 },
  { name: 'Dec', value: 12000 },
];

const CustomBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" radius={4} />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;
