'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ChartContainer } from './styles';
import { ChartData } from '@/services/transactionsService';

interface LineChartComponentProps {
  data: ChartData[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <ChartContainer>
      <h2>Evolução do Saldo ao Longo do Tempo</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            formatter={(value: number) =>
              (value / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#0070f3"
            name="Saldo"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default LineChartComponent;
