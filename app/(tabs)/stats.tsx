import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

const stats = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>stats</Text>
    </View>
  );
};

export default stats;
