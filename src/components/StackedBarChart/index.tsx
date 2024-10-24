'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './styles';
import { ChartData } from '@/services/transactionsService';

interface StackedBarChartProps {
  data: ChartData[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
  return (
    <ChartContainer>
      <h2>Receitas e Despesas por Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            formatter={(value: number) =>
              (value / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }
          />
          <Legend />
          <Bar dataKey="deposits" stackId="a" fill="#28a745" name="Receitas" />
          <Bar dataKey="withdrawals" stackId="a" fill="#dc3545" name="Despesas" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StackedBarChart;