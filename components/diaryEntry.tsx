import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { CustomTheme, Entry } from '~/lib/constants';
import CustomText from './ui/CustomText';
import { CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';
import { useTheme } from '@react-navigation/native';
import { getTimeFromDate } from '~/lib/utils';
import XButton from './ui/XButton';
import { DiaryContext } from '../lib/DiaryContext';

const diaryEntry = (props: { entry: Entry }) => {
  const { colors } = useTheme() as CustomTheme;
  const { id, date, text, tags } = props.entry;

  const diaryContext = useContext(DiaryContext);
  if (!diaryContext) return <Text>Loading...</Text>;
  const { removeEntry } = diaryContext;
  const displayTags = () => {
    return tags.map((tag) => {
      return (
        <Badge
          key={`${id}${tag}`}
          variant={tag}
          badgeStyle="default"
          colors={colors}
        />
      );
    });
  };

  const handleDeleteEntry = () => {
    removeEntry(id);
  };

  return (
    <>
      <CardContent>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CustomText>{text}</CustomText>
          <XButton onPress={() => handleDeleteEntry()} />
        </View>
      </CardContent>
      <CardContent
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {displayTags()}
      </CardContent>
      <CardFooter colors={colors} style={{ marginBottom: 24 }}>
        <Text style={{ color: colors.mutedText }}>{getTimeFromDate(date)}</Text>
      </CardFooter>
    </>
  );
};

export default diaryEntry;
