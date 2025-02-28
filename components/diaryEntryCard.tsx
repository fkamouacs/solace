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
import { CustomTheme } from '~/lib/constants';
import CustomText from './ui/CustomText';

const DiaryEntryCard = () => {
  const { colors } = useTheme() as CustomTheme;
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{ padding: 6 }}>
      <Card style={{ width: screenWidth * 0.75 }} colors={colors}>
        <CardHeader>
          <CardDescription colors={colors}>Monday, 24 Feb</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </CustomText>
        </CardContent>
        <CardContent
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          <Badge variant="pride" style="default" colors={colors} />
          <Badge variant="greed" style="default" colors={colors} />
          <Badge variant="lust" style="default" colors={colors} />
          <Badge variant="sloth" style="default" colors={colors} />
          <Badge variant="wrath" style="default" colors={colors} />
        </CardContent>
        <CardFooter colors={colors}>
          <Text style={{ color: colors.mutedText }}>10:20 PM</Text>
        </CardFooter>
      </Card>
    </View>
  );
};

export default DiaryEntryCard;
