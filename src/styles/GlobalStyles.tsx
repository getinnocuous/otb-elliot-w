import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: '374px',
    md: '660px',
    lg: '768px',
    xl: '960px',
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
    --h-spacing: 1.5rem;
    --v-spacing: 1rem;
    --heading: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif;
    --body: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif;
    font-size: 62.5%;
    @media screen and (min-width: ${theme.breakpoints.md})  {
      --h-spacing: 3rem;
      --v-spacing: 2rem;
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
    padding: var(--v-spacing) var(--h-spacing);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
