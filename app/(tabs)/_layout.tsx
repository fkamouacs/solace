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
import { useSelector, useDispatch } from 'react-redux';
import { left, right } from '../../lib/slices/titleSlice';
import { RootState } from '../../lib/store';

function Header() {
  return <View></View>;
}

function MonthHeader(props: { currentDate: any; dispatch: Function }) {
  const { colors } = useTheme();

  const handleLeftPress = () => {
    props.dispatch(left());
  };

  const isCurrentDate = () => {
    return (
      getCurrentMonth() == props.currentDate.month &&
      getCurrentYear() == props.currentDate.year
    );
  };

  const handleRightPress = () => {
    props.dispatch(right());
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
            {
              fontFamily: 'InterBold',
              fontWeight: 'bold',
              fontSize: 24,
              marginHorizontal: 40,
            },
            isCurrentDate() ? '' : { color: 'gray' },
          ]}
        >
          {`${getCurrentMonthName(props.currentDate.month)} ${
            props.currentDate.year
          }`}
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
        backgroundColor: '#9370DB',
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

  const month = useSelector((state: RootState) => state.title.month);
  const year = useSelector((state: RootState) => state.title.year);
  const currentDate = { month: month, year: year };
  const dispatch = useDispatch();

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
          headerTitle: () => (
            <MonthHeader currentDate={currentDate} dispatch={dispatch} />
          ),
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
          headerTitle: () => (
            <CustomText
              style={[
                {
                  fontFamily: 'InterBold',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginHorizontal: 40,
                },
              ]}
            >
              New Journal Entry
            </CustomText>
          ),
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
