import { DefaultTheme, Theme } from '@react-navigation/native';

export const FONT_SIZES = {
  xs: 12, // Extra Small
  sm: 14, // Small
  base: 16, // Default / Body text
  lg: 18, // Large
  xl: 20, // Extra Large
  '2xl': 24, // Extra Extra Large
};

export const NAV_THEME = {
  light: {
    background: '#F8F6F2', // background
    border: 'hsl(240 5.9% 90%)', // border
    card: 'hsl(0 0% 100%)', // card
    notification: 'hsl(0 84.2% 60.2%)', // destructive
    primary: '#9370DB', // primary
    accent: '#DCC7A1',
    text: '#222222', // foreground
    altText: '#F5F5F5',
    mutedText: '#4B5D8B',
  },
  dark: {
    background: '#2B2B2B', // background
    border: 'hsl(240 3.7% 15.9%)', // border
    card: 'hsl(240 10% 3.9%)', // card
    notification: 'hsl(0 72% 51%)', // destructive
    primary: '#9370DB', // primary
    accent: '#B89F75',
    text: '#F5F5F5', // foreground
    altText: '#222222',
    mutedText: '#4B5D8B',
  },
};

export type CustomTheme = Theme & {
  colors: {
    primary: string;
    background: string;
    text: string;
    card: string;
    border: string;
    mutedText: string;
    altText: string;
  };
};

export type Entry = {
  id: string;
  date: string;
  text: string;
  tags: BadgeVariant[];
};

export type BadgeVariant =
  | 'pride'
  | 'lust'
  | 'gluttony'
  | 'sloth'
  | 'wrath'
  | 'greed'
  | 'envy';
