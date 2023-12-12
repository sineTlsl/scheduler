import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';

function TodayPlanPage() {
  const theme = useTheme();

  return (
    <SafeAreaView background={theme.colors.white}>
      <TodayPlanContainer>
        <TodayText color={theme.colors.blacklight}>2023년 12월 12일</TodayText>
      </TodayPlanContainer>
    </SafeAreaView>
  );
}

export default TodayPlanPage;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const TodayPlanContainer = styled.View`
  flex: 1;
`;

const TodayText = styled.Text`
  font-family: 'NotoSansKR-Bold';
`;
