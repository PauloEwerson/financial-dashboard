import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterBar from './index';
import { FilterProvider } from '@/contexts/FilterContext';

describe('FilterBar Component', () => {
  it('deve renderizar opções de filtro e permitir seleção', () => {
    const { getByPlaceholderText } = render(
      <FilterProvider>
        <FilterBar />
      </FilterProvider>
    );

    const accountSelect = getByPlaceholderText('Selecione as contas');
    fireEvent.mouseDown(accountSelect);
  });
});
