'use client';

import React, { useEffect, useState } from 'react';
import { FilterContainer, FilterGroup, FilterLabel, FilterSelect, FilterButton } from './styles';
import { useFilter } from '@/contexts/FilterContext';
import { getTransactions } from '@/services/transactionsService';

const FilterBar: React.FC = () => {
  const { filters, setFilters } = useFilter();
  const [accounts, setAccounts] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    const transactions = getTransactions();
    setAccounts([...new Set(transactions.map(t => t.account))]);
    setIndustries([...new Set(transactions.map(t => t.industry))]);
    setStates([...new Set(transactions.map(t => t.state))]);
  }, []);

  const handleResetFilters = () => {
    setFilters({});
  };

  return (
    <FilterContainer>
      <FilterGroup>
        <FilterLabel htmlFor="accounts-filter">Conta:</FilterLabel>
        <FilterSelect
          id="accounts-filter"
          multiple
          value={filters.accounts || []}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              accounts: Array.from(e.target.selectedOptions, option => option.value),
            }))
          }
          title="Selecione contas para filtrar"
        >
          {accounts.map(account => (
            <option key={account} value={account}>
              {account}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="industries-filter">Indústria:</FilterLabel>
        <FilterSelect
          id="industries-filter"
          multiple
          value={filters.industries || []}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              industries: Array.from(e.target.selectedOptions, option => option.value),
            }))
          }
          title="Selecione industrias para filtrar"
        >
          {industries.map(industry => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="states-filter">Estado:</FilterLabel>
        <FilterSelect
          id="states-filter"
          multiple
          value={filters.states || []}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              states: Array.from(e.target.selectedOptions, option => option.value),
            }))
          }
          title="Selecione o estadp para filtrar"
        >
          {states.map(state => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterButton onClick={handleResetFilters}>Limpar Filtros</FilterButton>
    </FilterContainer>
  );
};

export default FilterBar;