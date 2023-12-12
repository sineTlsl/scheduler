import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Theme from '@styles/theme';

// pages
// import LoginPage from 'screens/Login';
import TodayPlanPage from '@screens/TodayPlan';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      {/* <LoginPage /> */}
      <TodayPlanPage />
    </ThemeProvider>
  );
}

export default App;
