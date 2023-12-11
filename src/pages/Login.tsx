import React from 'react';
import styled from 'styled-components/native';

// components
import LottieSnowMan from '../components/LottieSnowMan';
import LoginBtn from '../components/LoginBtn';

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DescView = styled.View`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled.Text`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 42px;
  font-family: 'PermanentMarker-Regular';
  text-shadow: 2px 2px 2px #ef8686;
`;

export default function LoginPage() {
  return (
    <Container>
      <DescView>
        <LottieSnowMan />
        <LoginText>
          {/* 일정을 관리하고,{'\n'}소중한 순간을 기록하자{'\n'} */}
          SCHEDULER
        </LoginText>
      </DescView>
      <LoginBtn />
    </Container>
  );
}
