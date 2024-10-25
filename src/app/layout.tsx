import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { FilterProvider } from '@/contexts/FilterContext';
import 'antd/dist/reset.css';

export const metadata = {
  title: 'Financial Dashboard',
  description: 'Dashboard financeiro'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <FilterProvider>{children}</FilterProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
