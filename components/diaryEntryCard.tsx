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

const DiaryEntryCard = (props: { entries: Entry[]; date: string }) => {
  const { colors } = useTheme() as CustomTheme;
  const screenWidth = Dimensions.get('window').width;

  const entries = props.entries;

  // const displayTags = () => {
  //   return tags.map((tag) => {
  //     return (
  //       <Badge key={id} variant={tag} badgeStyle="default" colors={colors} />
  //     );
  //   });
  // };

  const displayEntries = () => {
    return entries.map((entry) => {
      return <DiaryEntry key={entry.id} entry={entry} />;
    });
  };

  return (
    <View style={{ padding: 6, paddingVertical: 12 }}>
      <Card
        style={{ width: screenWidth * 0.75, paddingVertical: 12 }}
        colors={colors}
      >
        <CardHeader style={{ paddingBottom: 12 }}>
          <CardDescription colors={colors}>{props.date}</CardDescription>
        </CardHeader>
        {displayEntries()}
      </Card>
    </View>
  );
};

export default DiaryEntryCard;
