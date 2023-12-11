import React from 'react';
import LoginPage from './pages/Login';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';

const Container = styled.SafeAreaView`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.mainBg};
`;

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
