import { Tabs } from 'expo-router';
import {
  Flame,
  LayoutDashboard,
  MoonStar,
  NotebookPen,
} from 'lucide-react-native';
import React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '~/lib/useColorScheme';

export default function TabLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <LayoutDashboard size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: 'Practice',
          tabBarIcon: ({ color }) => <Flame size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dream"
        options={{
          title: 'Dream Journal',
          tabBarIcon: ({ color }) => <MoonStar size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reflection"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color }) => <NotebookPen size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
