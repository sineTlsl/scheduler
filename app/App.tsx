import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components/native';
import LoginPage from './pages/Login';
import { customTheme } from './styles/theme';
import { DefaultTheme } from 'styled-components/native';

const Container = styled.SafeAreaView<{ theme: DefaultTheme }>`
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
