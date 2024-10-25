import React from 'react';
import { render } from '@testing-library/react';
import SummaryCard from './index';

describe('SummaryCard Component', () => {
  it('deve renderizar o título e o valor formatado', () => {
    const { getByText } = render(
      <SummaryCard title="Test Title" amount={123456} color="#0070f3" />
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('R$ 1.234,56')).toBeInTheDocument();
  });
});
