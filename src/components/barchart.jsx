import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SimpleBarChart({ data }) {
  return (
    <div className='expense-chart'>
        <h2>Top Expenses</h2>
        <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" barSize={25} radius={[0, 10, 10, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
}