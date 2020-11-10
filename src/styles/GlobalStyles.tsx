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

export const GlobalStyle = createGlobalStyle``;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
