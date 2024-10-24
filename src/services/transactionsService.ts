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

const transactions: Transaction[] = transactionsData as Transaction[];

export const getTransactions = (): Transaction[] => {
  return transactions;
};

export const getTotalAmount = (): number => {
  const total = transactions.reduce((acc, transaction) => {
    const amount = parseInt(transaction.amount);
    return acc + (transaction.transaction_type === 'deposit' ? amount : -amount);
  }, 0);
  return total;
};

export const getTotalDeposits = (): number => {
  const total = transactions
    .filter(transaction => transaction.transaction_type === 'deposit')
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);
  return total;
};

export const getTotalWithdrawals = (): number => {
  const total = transactions
    .filter(transaction => transaction.transaction_type === 'withdraw')
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);
  return total;
};

export const getPendingTransactions = (): number => {
  return 0;
};

export interface ChartData {
  date: string;
  deposits: number;
  withdrawals: number;
  balance: number;
}

export const getChartData = (): ChartData[] => {
  const transactions = getTransactions();

  transactions.sort((a, b) => a.date - b.date);

  const dataMap = new Map<string, ChartData>();

  let balance = 0;

  transactions.forEach(transaction => {
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