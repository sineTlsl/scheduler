import React from 'react';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// components
import TodayPlanPage from '@screens/TodayPlan';
import MainPage from '@screens/Home';
import TodoListPage from '@screens/TodoList';
import CalendarPage from '@screens/Calendar';
import MyInfoPage from '@screens/MyInfo';

const Tab = createBottomTabNavigator();

const TabIcon = [
  {
    name: '메인',
    component: MainPage,
    iconDir: MaterialIcons,
    icon: 'home-filled',
  },
  {
    name: '할일',
    component: TodoListPage,
    iconDir: FontAwesome5,
    icon: 'check-square',
  },
  {
    name: '오늘',
    component: TodayPlanPage,
    iconDir: FontAwesome5,
    icon: 'clipboard-list',
  },
  {
    name: '캘린더',
    component: CalendarPage,
    iconDir: FontAwesome5,
    icon: 'calendar-day',
  },
  {
    name: '내정보',
    component: MyInfoPage,
    iconDir: MaterialIcons,
    icon: 'info',
  },
];

function TabNavigator() {
  const theme = useTheme();

  /** Tab 이름마다 각 아이콘을 맞춰서 넣어주는 함수 */
  const getTabIcon = (routeName: string, focused: boolean) => {
    const tabInfo = TabIcon.find(tab => tab.name === routeName);
    const color = focused ? theme.colors.mainBg : '#CCCCCC';

    if (tabInfo) {
      const IconComponent = tabInfo.iconDir;
      return <IconComponent name={tabInfo.icon} size={23} color={color} />;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="메인"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.mainBg,
        headerShown: false,
      }}>
      {TabIcon.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => getTabIcon(route.name, focused),
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

export default TabNavigator;
