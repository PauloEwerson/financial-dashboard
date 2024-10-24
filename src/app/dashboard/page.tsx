"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn, logout } from '@/utils/auth';
import {
  getTotalAmount,
  getTotalDeposits,
  getTotalWithdrawals,
  getPendingTransactions,
} from '@/services/transactionsService';
import SummaryCard from '@/components/SummaryCard';
import {
  DashboardContainer,
  Header,
  LogoutButton,
  CardsContainer,
} from './styles';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState(0);
  const [pendingTransactions, setPendingTransactions] = useState(0);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    } else {
      setTotalAmount(getTotalAmount());
      setTotalDeposits(getTotalDeposits());
      setTotalWithdrawals(getTotalWithdrawals());
      setPendingTransactions(getPendingTransactions());
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard Financeiro</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <CardsContainer>
        <SummaryCard title="Saldo Total" amount={totalAmount} color="#0070f3" />
        <SummaryCard title="Receitas" amount={totalDeposits} color="#28a745" />
        <SummaryCard title="Despesas" amount={totalWithdrawals} color="#dc3545" />
        <SummaryCard
          title="Transações Pendentes"
          amount={pendingTransactions}
          color="#ffc107"
        />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default DashboardPage;