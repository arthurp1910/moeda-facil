# Moeda Fácil

O **Moeda Fácil** é uma aplicação web desenvolvida com **React**, **TypeScript** e **Vite**, criada para simular uma plataforma de conversão de moedas com interface moderna, tabela de cotações e histórico de conversões.

## Funcionalidades

- Interface para conversão de moedas
- Exibição de resultado da conversão
- Tabela com cotações de moedas
- Histórico de conversões realizadas
- Botão de ação para excluir registros do histórico
- Navegação entre páginas com React Router
- Layout estilizado com CSS modularizado por página/componente
- Uso de ícones SVG personalizados

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- CSS
- SVG

## Estrutura do projeto

```txt
moeda-facil/
├── public/
├── src/
│   ├── assets/
│   │   ├── Email.svg
│   │   ├── Github.svg
│   │   ├── Linkedin.svg
│   │   └── lixeira.svg
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── ConversionHistory.tsx
│   │   ├── CurrencyConverter.tsx
│   │   ├── Home.tsx
│   │   └── Quotes.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Páginas do sistema

### Home

Página inicial da aplicação, responsável por apresentar a proposta do projeto e direcionar o usuário para as demais funcionalidades.

### Conversor de Moedas

Tela onde o usuário pode visualizar a estrutura de conversão de moedas, com campos para informar valor, moeda de origem e moeda de destino.

### Cotações

Página que apresenta uma tabela com moedas, símbolos, países/regiões e valores de cotação em BRL.

### Histórico

Página com uma tabela de histórico de conversões, contendo informações como horário, moeda de origem, moeda de destino, valor informado, taxa, resultado e ações.

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/arthurp1910/moeda-facil.git
```

Acesse a pasta do projeto:

```bash
cd moeda-facil
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Depois acesse no navegador:

```txt
http://localhost:5173
```

## Scripts disponíveis

Executa o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Gera a versão de produção:

```bash
npm run build
```

Executa a verificação com ESLint:

```bash
npm run lint
```

Executa uma prévia da versão de produção:

```bash
npm run preview
```

## Objetivo do projeto

O objetivo do **Moeda Fácil** é praticar conceitos de desenvolvimento front-end utilizando React, TypeScript e Vite, trabalhando com componentização, rotas, tabelas, estilização com CSS e organização de páginas em uma aplicação web.

## Status do projeto

Projeto em desenvolvimento.

Algumas funcionalidades ainda podem ser evoluídas, como:

- Integração com API real de cotação de moedas
- Cálculo dinâmico da conversão
- Salvamento real do histórico
- Exclusão funcional de registros
- Paginação da tabela de histórico
- Responsividade completa para dispositivos móveis

## Autor

Desenvolvido por **Arthur Lemes**.
