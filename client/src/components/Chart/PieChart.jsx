// PieChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'On Time', value: 38 },
  { name: 'In Progress', value: 25 },
  { name: 'Delayed', value: 25 },
];

const COLORS = ['#61dafb', '#c084fc', '#f87171'];

const CustomPieChart = () => (
  <PieChart width={250} height={250}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      label
    >
      {data.map((entry, i) => (
        <Cell key={i} fill={COLORS[i]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default CustomPieChart;
