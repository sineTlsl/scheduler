import React from 'react';
import styled from 'styled-components/native';

// components
import LoginBtn from '@components/LoginBtn';
import LottieSnowMan from '@components/LottieSnowMan';

export default function LoginPage() {
  return (
    <SafeAreaView>
      <LoginContainer>
        <DescView>
          <LottieSnowMan />
          <LoginText>
            {/* 일정을 관리하고,{'\n'}소중한 순간을 기록하자{'\n'} */}
            SCHEDULER
          </LoginText>
        </DescView>
        <LoginBtn />
      </LoginContainer>
    </SafeAreaView>
  );
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }: any) => theme.colors.mainBg};
`;

const LoginContainer = styled.View`
  flex: 1;
  padding: 20px;
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
