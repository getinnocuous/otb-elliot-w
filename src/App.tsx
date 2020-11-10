import React from 'react';
import { ThemeProvider, GlobalStyle } from './styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <h1>Hello</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
