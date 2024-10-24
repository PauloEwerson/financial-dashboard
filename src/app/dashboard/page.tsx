'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn, logout } from '@/utils/auth';

import {
  getTotalAmount,
  getTotalDeposits,
  getTotalWithdrawals,
  getPendingTransactions,
  getChartData,
  ChartData
} from '@/services/transactionsService';

import FilterBar from '@/components/FilterBar';
import SummaryCard from '@/components/SummaryCard';
import StackedBarChart from '@/components/StackedBarChart';
import LineChartComponent from '@/components/LineChartComponent';

import {
  DashboardContainer,
  Header,
  LogoutButton,
  CardsContainer,
} from './styles';

import { useFilter } from '@/contexts/FilterContext';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState<number>(0);
  const [pendingTransactions, setPendingTransactions] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const { filters } = useFilter();

  useEffect(() => {
    const loggedIn = isLoggedIn();
    setAuthenticated(loggedIn);
  
    if (!loggedIn) {
      router.replace('/login');
    } else {
      setTotalAmount(getTotalAmount(filters));
      setTotalDeposits(getTotalDeposits(filters));
      setTotalWithdrawals(getTotalWithdrawals(filters));
      setPendingTransactions(getPendingTransactions(filters));
      setChartData(getChartData(filters));
    }
  }, [filters]);  

  if (authenticated === null) {
    return (
      <DashboardContainer>
        <p>Carregando...</p>
      </DashboardContainer>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard Financeiro</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>

      <FilterBar />

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
      
      <StackedBarChart data={chartData} />
      <LineChartComponent data={chartData} />
    </DashboardContainer>
  );

  function handleLogout() {
    logout();
    router.push('/login');
  }
};

export default DashboardPage;