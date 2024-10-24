import transactionsData from '@/data/transactions.json';

export interface Transaction {
  date: number;
  amount: string;
  transaction_type: 'deposit' | 'withdraw';
  currency: string;
  account: string;
  industry: string;
  state: string;
}

export interface ChartData {
  date: string;
  deposits: number;
  withdrawals: number;
  balance: number;
}

export interface TransactionFilters {
  startDate?: Date;
  endDate?: Date;
  accounts?: string[];
  industries?: string[];
  states?: string[];
}

const transactions: Transaction[] = transactionsData as Transaction[];

export const getTransactions = (filters?: TransactionFilters): Transaction[] => {
  let filteredTransactions = transactions;

  if (filters) {
    const { startDate, endDate, accounts, industries, states } = filters;

    if (startDate) {
      filteredTransactions = filteredTransactions.filter(
        transaction => new Date(transaction.date) >= startDate
      );
    }

    if (endDate) {
      filteredTransactions = filteredTransactions.filter(
        transaction => new Date(transaction.date) <= endDate
      );
    }

    if (accounts && accounts.length > 0) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        accounts.includes(transaction.account)
      );
    }

    if (industries && industries.length > 0) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        industries.includes(transaction.industry)
      );
    }

    if (states && states.length > 0) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        states.includes(transaction.state)
      );
    }
  }

  return filteredTransactions;
};

export const getTotalAmount = (filters?: TransactionFilters): number => {
  const filteredTransactions = getTransactions(filters);
  const total = filteredTransactions.reduce((acc, transaction) => {
    const amount = parseInt(transaction.amount);
    return acc + (transaction.transaction_type === 'deposit' ? amount : -amount);
  }, 0);
  return total;
};

export const getTotalDeposits = (filters?: TransactionFilters): number => {
  const filteredTransactions = getTransactions(filters);
  const total = filteredTransactions
    .filter(transaction => transaction.transaction_type === 'deposit')
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);
  return total;
};

export const getTotalWithdrawals = (filters?: TransactionFilters): number => {
  const filteredTransactions = getTransactions(filters);
  const total = filteredTransactions
    .filter(transaction => transaction.transaction_type === 'withdraw')
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);
  return total;
};

export const getPendingTransactions = (filters?: TransactionFilters): number => {
  const filteredTransactions = getTransactions(filters);
  const pendingCount = filteredTransactions.filter(
    transaction => new Date(transaction.date) > new Date()
  ).length;

  return pendingCount;
};

export const getChartData = (filters?: TransactionFilters): ChartData[] => {
  const filteredTransactions = getTransactions(filters);

  filteredTransactions.sort((a, b) => a.date - b.date);

  const dataMap = new Map<string, ChartData>();

  let balance = 0;

  filteredTransactions.forEach(transaction => {
    const date = new Date(transaction.date).toLocaleDateString('pt-BR');

    if (!dataMap.has(date)) {
      dataMap.set(date, {
        date,
        deposits: 0,
        withdrawals: 0,
        balance,
      });
    }

    const amount = parseInt(transaction.amount);

    const dataEntry = dataMap.get(date)!;

    if (transaction.transaction_type === 'deposit') {
      dataEntry.deposits += amount;
      balance += amount;
    } else {
      dataEntry.withdrawals += amount;
      balance -= amount;
    }

    dataEntry.balance = balance;
  });

  const chartData = Array.from(dataMap.values());

  return chartData;
};