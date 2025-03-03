import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BadgeVariant, Entry } from './constants';

type DiaryContextType = {
  entries: Entry[];
  addEntry: (text: string, tags: BadgeVariant[]) => void;
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
      date: new Date().toISOString(),
      tags,
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};
