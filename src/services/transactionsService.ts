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