import React from 'react';
import LoginBtn from './components/LoginBtn';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  height: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
`;

function App(): React.JSX.Element {
  return (
    <Container>
      <LoginBtn />
    </Container>
  );
}

export default App;
