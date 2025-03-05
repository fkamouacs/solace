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
import { isDateInMonth, stringToDate } from '~/lib/utils';
import type { EntriesByDate, DiaryEntries } from '~/lib/constants';
import { RootState } from '../../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);

  const month = useSelector((state: RootState) => state.title.month);
  const year = useSelector((state: RootState) => state.title.year);

  const diaryContext = useContext(DiaryContext);
  if (!diaryContext) return <Text>Loading...</Text>;
  const { entries, addEntry } = diaryContext;

  const groupEntriesbySameMonth = (entries: EntriesByDate): DiaryEntries => {
    const groupedEntries: DiaryEntries = {};

    for (const day in entries) {
      const [year, month] = day.split('-');
      const yearMonth = `${year}-${month}`;

      if (!groupedEntries[yearMonth]) {
        groupedEntries[yearMonth] = [];
      }

      groupedEntries[yearMonth].push({ [day]: entries[day] });
    }
    return groupedEntries;
  };

  const groupEntriesBySameDay = (entries: Entry[]): EntriesByDate => {
    const groupedEntries: EntriesByDate = {};

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

  const groupedEntriesByDay = groupEntriesBySameDay(entries);

  const dates = Object.keys(groupedEntriesByDay).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  ); // Sort by latest first

  const displayEntries = () => {
    return dates.map((date) => {
      const entryDate = stringToDate(date);

      if (isDateInMonth(date, `${year} ${month}`))
        return (
          <DiaryEntryCard
            key={entryDate.toISOString()}
            date={entryDate}
            entries={groupedEntriesByDay[date]}
          />
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
        {displayEntries()}
      </View>
    </ScrollView>
  );
}
