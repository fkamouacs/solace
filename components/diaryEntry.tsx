import { View, Text } from 'react-native';
import React from 'react';
import { CustomTheme, Entry } from '~/lib/constants';
import CustomText from './ui/CustomText';
import { CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';
import { useTheme } from '@react-navigation/native';

const diaryEntry = (props: { entry: Entry }) => {
  const { colors } = useTheme() as CustomTheme;
  const { id, date, text, tags } = props.entry;

  const displayTags = () => {
    return tags.map((tag) => {
      return (
        <Badge key={id} variant={tag} badgeStyle="default" colors={colors} />
      );
    });
  };

  return (
    <>
      <CardContent>
        <CustomText>{text}</CustomText>
      </CardContent>
      <CardContent
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {displayTags()}
      </CardContent>
      <CardFooter colors={colors}>
        <Text style={{ color: colors.mutedText }}>{date}</Text>
      </CardFooter>
    </>
  );
};

export default diaryEntry;
