import {
  getTransactions,
  getTotalAmount,
  getTotalDeposits,
  getTotalWithdrawals,
  getPendingTransactions,
  getChartData,
  TransactionFilters
} from './transactionsService';

describe('Transactions Service', () => {
  it('should return all transactions when no filters are applied', () => {
    const transactions = getTransactions();
    expect(transactions.length).toBeGreaterThan(0);
  });

  it('should filter transactions by account', () => {
    const filters: TransactionFilters = { accounts: ['Account A'] };
    const transactions = getTransactions(filters);
    expect(transactions.every(t => t.account === 'Account A')).toBe(true);
  });

  it('should calculate total amount correctly', () => {
    const totalAmount = getTotalAmount();
    expect(typeof totalAmount).toBe('number');
  });

  it('should calculate total deposits correctly', () => {
    const totalDeposits = getTotalDeposits();
    expect(typeof totalDeposits).toBe('number');
  });

  it('should calculate total withdrawals correctly', () => {
    const totalWithdrawals = getTotalWithdrawals();
    expect(typeof totalWithdrawals).toBe('number');
  });

  it('should calculate pending transactions correctly', () => {
    const pendingTransactions = getPendingTransactions();
    expect(typeof pendingTransactions).toBe('number');
  });

  it('should generate chart data correctly', () => {
    const chartData = getChartData();
    expect(Array.isArray(chartData)).toBe(true);
    if (chartData.length > 0) {
      expect(chartData[0]).toHaveProperty('date');
      expect(chartData[0]).toHaveProperty('deposits');
      expect(chartData[0]).toHaveProperty('withdrawals');
      expect(chartData[0]).toHaveProperty('balance');
    }
  });
});
