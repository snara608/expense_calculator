import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#A000FF', '#FF9304', '#FDE006'];

export default function Piechart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart class="Piechart">
        <Pie data={data} dataKey="value" labelLine={false} label={({percent}) => `${(percent * 100).toFixed(0)}%`} outerRadius={80}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}