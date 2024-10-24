'use client';

import React from 'react';
import { CardContainer, Title, Amount } from './styles';

interface SummaryCardProps {
  title: string;
  amount: number;
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, color }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Amount color={color}>
        {(amount / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Amount>
    </CardContainer>
  );
};

export default SummaryCard;