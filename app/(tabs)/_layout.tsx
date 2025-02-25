import { Tabs } from 'expo-router';
import {
  LayoutDashboard,
  LineChart,
  MoonStar,
  NotebookPen,
} from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

function Header() {
  return <View></View>;
}

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: colors.background,
        },
        headerTitle: () => <Header />,
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Diary',
          tabBarIcon: ({ color }) => <NotebookPen size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color }) => <LineChart size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
