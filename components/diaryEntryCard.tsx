import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './ui/Card';
import Badge from './ui/Badge';

import { useTheme } from '@react-navigation/native';
import { CustomTheme, Entry } from '~/lib/constants';
import CustomText from './ui/CustomText';
import { EntryExitTransition } from 'react-native-reanimated';
import DiaryEntry from './diaryEntry';
import { formatDateToDayName, sortEntriesByDate } from '~/lib/utils';

const DiaryEntryCard = (props: { entries: Entry[]; date: Date }) => {
  const { colors } = useTheme() as CustomTheme;
  const screenWidth = Dimensions.get('window').width;

  const entries = props.entries;

  const displayEntries = () => {
    return sortEntriesByDate(entries, true).map((entry) => {
      return <DiaryEntry key={entry.id} entry={entry} />;
    });
  };

  return (
    <View style={{ padding: 6, paddingVertical: 12 }}>
      <Card style={{ width: screenWidth * 0.85, padding: 12 }} colors={colors}>
        <CardHeader>
          <CardDescription colors={colors}>
            {formatDateToDayName(props.date)}
          </CardDescription>
        </CardHeader>
        {displayEntries()}
      </Card>
    </View>
  );
};

export default DiaryEntryCard;
