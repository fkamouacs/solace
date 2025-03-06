import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BadgeVariant, Entry } from './constants';

type DiaryContextType = {
  entries: Entry[];
  addEntry: (text: string, tags: BadgeVariant[]) => void;
  removeEntry: (id: string) => void;
};

export const DiaryContext = createContext<DiaryContextType | undefined>(
  undefined
);

export const DiaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('diary_entries');
      if (storedEntries) {
        setEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Failed to load entries', error);
    }
  };

  const saveEntries = async (newEntries: Entry[]) => {
    await AsyncStorage.setItem('diary_entries', JSON.stringify(newEntries));
  };

  const addEntry = (text: string, tags: BadgeVariant[]) => {
    const newEntry: Entry = {
      id: String(Date.now()),
      text,
      date: new Date(),
      tags,
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  const removeEntry = async (entryId: string) => {
    try {
      // Get existing entries
      const jsonValue = await AsyncStorage.getItem('diary_entries');
      let entries = jsonValue ? JSON.parse(jsonValue) : [];

      // Filter out the entry
      entries = entries.filter((entry: { id: string }) => entry.id !== entryId);

      // Save the updated list back to storage
      await AsyncStorage.setItem('diary_entries', JSON.stringify(entries));
      setEntries((prevEntries) =>
        prevEntries.filter((entry) => entry.id !== entryId)
      );
      console.log('Entry removed successfully!');
    } catch (error) {
      console.error('Error removing entry:', error);
    }
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry, removeEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};
