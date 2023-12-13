import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

function MyInfoPage() {
  return (
    <SafeAreaView>
      <Text>내정보 페이지</Text>
    </SafeAreaView>
  );
}

export default MyInfoPage;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
