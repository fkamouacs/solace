import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import DiaryEntryCard from '~/components/diaryEntryCard';

export default function Index() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,

        alignItems: 'center',
      }}
    >
      <DiaryEntryCard />
    </View>
  );
}
