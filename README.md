# Financial Dashboard

Bem-vindo ao **Financial Dashboard**, uma aplicação web que fornece uma visão geral das transações financeiras, permitindo filtragem e visualização de dados através de gráficos interativos.

## Índice

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução da Aplicação](#execução-da-aplicação)
- [Execução dos Testes](#execução-dos-testes)
- [Detalhes Importantes](#detalhes-importantes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O **Financial Dashboard** é uma ferramenta desenvolvida em Next.js com TypeScript que permite aos usuários visualizar e analisar transações financeiras. A aplicação inclui funcionalidades de login, filtragem de dados e visualização através de gráficos de linhas e barras.

## Recursos

- **Autenticação**: Login para acesso ao dashboard.
- **Filtragem Avançada**: Filtre transações por conta, indústria, estado e período.
- **Visualização de Dados**: Gráficos interativos para análise de receitas, despesas e saldo ao longo do tempo.
- **Responsividade**: Design responsivo para diferentes tamanhos de tela.
- **Persistência de Filtros**: Os filtros aplicados são salvos no `localStorage` para futuras sessões.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Styled-components**: Biblioteca para estilização de componentes React.
- **Ant Design**: Biblioteca de componentes UI.
- **Recharts**: Biblioteca para criação de gráficos em React.
- **Jest**: Framework de testes em JavaScript.
- **Testing Library**: Conjunto de utilitários para testar componentes React.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## Instalação

1. **Clone o repositório:**

   \`\`\`bash
   git clone https://github.com/seu-usuario/financial-dashboard.git
   \`\`\`

2. **Navegue até o diretório do projeto:**

   \`\`\`bash
   cd financial-dashboard
   \`\`\`

3. **Instale as dependências:**

   \`\`\`bash
   npm install
   \`\`\`

## Execução da Aplicação

Para iniciar a aplicação em modo de desenvolvimento:

\`\`\`bash
npm run dev
\`\`\`

A aplicação estará disponível em \`http://localhost:3000\`.

## Execução dos Testes

Para executar os testes unitários:

\`\`\`bash
npm run test
\`\`\`

## Detalhes Importantes

- **Login Padrão**: Utilize as credenciais abaixo para acessar o dashboard:
  - **Usuário**: \`admin\`
  - **Senha**: \`admin\`

- **Persistência de Sessão**: A autenticação é armazenada no \`localStorage\`. Certifique-se de que o armazenamento local está habilitado no seu navegador.

- **Dados de Transação**: As transações são carregadas a partir do arquivo JSON localizado em \`src/data/transactions.json\`.

- **Filtros Persistentes**: Os filtros aplicados são salvos no \`localStorage\` e serão mantidos mesmo após recarregar a página.

- **Observação sobre Testes**: Caso enfrente problemas ao executar os testes, verifique se todas as dependências relacionadas ao Jest e Babel estão corretamente instaladas e configuradas. Consulte os arquivos \`jest.config.js\` e \`babel.config.js\` para detalhes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

1. **Faça um fork do projeto**
2. **Crie uma branch para sua feature (\`git checkout -b feature/nova-feature\`)**
3. **Commit suas alterações (\`git commit -m 'Adiciona nova feature'\`)**
4. **Faça o push para a branch (\`git push origin feature/nova-feature\`)**
5. **Abra um Pull Request**

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---
