'use client';

import React, { useEffect, useState } from 'react';
import { Select, DatePicker } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import {
  FilterContainer,
  FilterGroup,
  FilterLabel,
  FilterButtonStyled,
} from './styles';
import { useFilter } from '@/contexts/FilterContext';
import { getTransactions } from '@/services/transactionsService';
import { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;
const { Option } = Select;

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

  const handleDateChange = (
    dates: [Dayjs | null, Dayjs | null] | null,
    // dateStrings: [string, string]
  ) => {
    if (dates && dates[0] && dates[1]) {
      setFilters(prev => ({
        ...prev,
        startDate: dates[0]!.toDate(),
        endDate: dates[1]!.toDate(),
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        startDate: undefined,
        endDate: undefined,
      }));
    }
  };

  return (
    <FilterContainer>
      <FilterGroup>
        <FilterLabel htmlFor="accounts-filter">Conta:</FilterLabel>
        <Select
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="children"
          placeholder="Selecione as contas"
          value={filters.accounts || []}
          onChange={value =>
            setFilters(prev => ({
              ...prev,
              accounts: value.length > 0 ? value : undefined,
            }))
          }
          style={{ minWidth: '200px' }}
          id="accounts-filter"
          aria-labelledby="accounts-filter-label"
        >
          {accounts.map(account => (
            <Option key={account} value={account}>
              {account}
            </Option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="industries-filter">Indústria:</FilterLabel>
        <Select
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="children"
          placeholder="Selecione as indústrias"
          value={filters.industries || []}
          onChange={value =>
            setFilters(prev => ({
              ...prev,
              industries: value.length > 0 ? value : undefined,
            }))
          }
          style={{ minWidth: '200px' }}
          id="industries-filter"
          aria-labelledby="industries-filter-label"
        >
          {industries.map(industry => (
            <Option key={industry} value={industry}>
              {industry}
            </Option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="states-filter">Estado:</FilterLabel>
        <Select
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="children"
          placeholder="Selecione os estados"
          value={filters.states || []}
          onChange={value =>
            setFilters(prev => ({
              ...prev,
              states: value.length > 0 ? value : undefined,
            }))
          }
          style={{ minWidth: '200px' }}
          id="states-filter"
          aria-labelledby="states-filter-label"
        >
          {states.map(state => (
            <Option key={state} value={state}>
              {state}
            </Option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Período:</FilterLabel>
        <RangePicker
          format="DD/MM/YYYY"
          onChange={handleDateChange}
          style={{ minWidth: '250px' }}
          allowClear
          placeholder={['Data Início', 'Data Fim']}
        />
      </FilterGroup>

      <FilterButtonStyled
        type="primary"
        onClick={handleResetFilters}
        icon={<ReloadOutlined />}
      >
        Limpar Filtros
      </FilterButtonStyled>
    </FilterContainer>
  );
};

export default FilterBar;