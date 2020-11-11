import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: '374px',
    md: '660px',
    lg: '768px',
    xl: '1100px',
  },
  color: {
    primary: '#17317f',
    attention: '#fedc07',
    body: '#4E4E4E',
    white: '#ffffff',
    lightGrey: '#d4d4d4',
    darkGrey: '#989898',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --spacing: 1rem;
    --layout-max-width: 120rem;
    --column-max-width: 80rem;
    --body: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif;
    font-size: 62.5%;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg})  {
      --spacing: 2rem;
    }
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--body);
    padding: var(--spacing);
    color: ${({ theme }) => theme.color.body};
    background-color: lightblue;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    display:grid;
    grid-gap: calc(var(--spacing) * 2);
    max-width: var(--layout-max-width);
    margin: auto;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl})  {
      grid-template-columns: auto auto;
    }
  }
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
