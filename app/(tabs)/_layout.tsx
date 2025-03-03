import { Tabs } from 'expo-router';
import {
  ChartBarStacked,
  CircleArrowLeft,
  CircleArrowRight,
  Drama,
  NotebookPen,
  Plus,
  Settings,
} from 'lucide-react-native';
import React, { useState, useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
  getCurrentMonth,
  getCurrentMonthName,
  getCurrentYear,
} from '~/lib/utils';
import CustomText from '~/components/ui/CustomText';

function Header() {
  return <View></View>;
}

function MonthHeader() {
  const { colors } = useTheme();
  const [currentDate, setCurrentDate] = useState({
    month: getCurrentMonth(),
    year: getCurrentYear(),
  });

  const handleLeftPress = () => {
    if (currentDate.month === 0) {
      setCurrentDate({ month: 11, year: currentDate.year - 1 });
    } else {
      setCurrentDate({ month: currentDate.month - 1, year: currentDate.year });
    }
  };

  const isCurrentDate = () => {
    return (
      getCurrentMonth() == currentDate.month &&
      getCurrentYear() == currentDate.year
    );
  };

  const handleRightPress = () => {
    if (!isCurrentDate()) {
      if (currentDate.month === 11) {
        setCurrentDate({ month: 0, year: currentDate.year + 1 });
      } else {
        setCurrentDate({
          month: currentDate.month + 1,
          year: currentDate.year,
        });
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CircleArrowLeft
          color={colors.text}
          onPress={() => handleLeftPress()}
        />
        <CustomText
          style={[
            { fontSize: 24, marginHorizontal: 40 },
            isCurrentDate() ? '' : { color: 'gray' },
          ]}
        >
          {`${getCurrentMonthName(currentDate.month)} ${currentDate.year}`}
        </CustomText>
        <CircleArrowRight
          color={isCurrentDate() ? 'gray' : colors.text}
          onPress={() => handleRightPress()}
        />
      </View>
    </View>
  );
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
          headerTitle: () => <MonthHeader />,
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
