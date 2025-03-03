import {
  Alert,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Button,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import DiaryEntryCard from '~/components/diaryEntryCard';

import { Entry } from '~/lib/constants';
import { DiaryContext } from '../../lib/DiaryContext';

export default function Index() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);

  const diaryContext = useContext(DiaryContext);
  if (!diaryContext) return <Text>Loading...</Text>;
  const { entries, addEntry } = diaryContext;

  const groupEntriesBySameDay = (
    entries: Entry[]
  ): { [date: string]: Entry[] } => {
    const groupedEntries: { [date: string]: Entry[] } = {};

    entries.forEach((entry) => {
      // Check the date (ignoring time)
      const entryDate = new Date(entry.date).toISOString().split('T')[0]; // Get "YYYY-MM-DD"

      // Group entries by date
      if (!groupedEntries[entryDate]) {
        groupedEntries[entryDate] = [];
      }

      groupedEntries[entryDate].push(entry);
    });

    return groupedEntries;
  };

  const groupedEntries = groupEntriesBySameDay(entries);
  const dates = Object.keys(groupedEntries).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  ); // Sort by latest first

  const displayEntries = () => {
    return dates.map((date) => {
      return (
        <DiaryEntryCard key={date} date={date} entries={groupedEntries[date]} />
      );
    });
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Button
          title="Add Test Entry"
          onPress={() => addEntry('New diary entry!', ['pride'])}
        />
        {displayEntries()}
      </View>
    </ScrollView>
  );
}
