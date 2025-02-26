import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import React from 'react';

export default function Index() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,

        alignItems: 'center',
      }}
    >
      <Text style={{ color: colors.text }}>diary</Text>
    </View>
  );
}
