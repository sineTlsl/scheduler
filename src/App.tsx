import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import LoginPage from '@pages/Login';
import { customTheme } from '@styles/theme';

const Container = styled.SafeAreaView`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.mainBg};
`;

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <LoginPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
