import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function LoginBtn() {
  return (
    <Container>
      {/* <Image source={require('../assets/images/kakao-login.png')} />
       */}
      <KakaoBtn onPress={() => console.log('로그인 버튼 클릭')}>
        <MaterialCommunityIcon name="chat" size={30} color="#000000" />
        <KakaoBtnText>카카오 로그인</KakaoBtnText>
      </KakaoBtn>
    </Container>
  );
}

export default LoginBtn;

const Container = styled.View`
  width: 100%;
`;

const KakaoBtn = styled(TouchableOpacity)`
  width: 100%;
  background: #fee500;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

const KakaoBtnText = styled.Text`
  width: 90%;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
