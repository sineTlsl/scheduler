import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

function CalendarPage() {
  return (
    <SafeAreaView>
      <Text>캘린더 페이지</Text>
    </SafeAreaView>
  );
}

export default CalendarPage;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
