import { Tabs } from 'expo-router';
import {
  ChartBarStacked,
  Drama,
  NotebookPen,
  Plus,
  Settings,
} from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

function Header() {
  return <View></View>;
}

const CustomBottomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
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
          title: 'Journal',
          tabBarIcon: ({ color }) => <NotebookPen size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="egos"
        options={{
          title: 'Egos',
          tabBarIcon: ({ color }) => <Drama size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <Plus size={28} color={'white'} />,
          tabBarButton: (props) => <CustomBottomTabBarButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <ChartBarStacked size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
