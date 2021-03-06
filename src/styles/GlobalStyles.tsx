import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';
import BackgroundImage from '../images/background.png';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: '374px',
    md: '660px',
    lg: '768px',
    xl: '1200px',
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
    --layout-max-width: 110rem;
    --column-max-width: 80rem;
    --image-max-width: 49rem;
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
    background: url(${BackgroundImage});
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
    max-width: var(--layout-max-width);
    margin: auto;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl})  {
      grid-template-columns: 30rem var(--column-max-width);
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 1.4rem;
    }
  }
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
