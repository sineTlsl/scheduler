import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

function MainPage() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

export default MainPage;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
