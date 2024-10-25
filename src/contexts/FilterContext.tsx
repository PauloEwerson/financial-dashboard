'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { TransactionFilters } from '@/services/transactionsService';

interface FilterContextProps {
  filters: TransactionFilters;
  setFilters: React.Dispatch<React.SetStateAction<TransactionFilters>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [filters, setFilters] = useState<TransactionFilters>(() => {
    if (typeof window !== 'undefined') {
      const savedFilters = localStorage.getItem('filters');
      return savedFilters ? JSON.parse(savedFilters) : {};
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('filters', JSON.stringify(filters));
    }
  }, [filters]);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
