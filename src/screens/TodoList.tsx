import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

function TodoListPage() {
  return (
    <SafeAreaView>
      <Text>TodoList</Text>
    </SafeAreaView>
  );
}

export default TodoListPage;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
