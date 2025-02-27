import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FONT_SIZES } from '~/lib/constants';

export const Card = ({ style, colors, ...props }: any) => {
  const styles = getCardStyles(colors);
  return <View style={[styles.card, style]} {...props} />;
};

export const CardHeader = ({ style, ...props }: any) => {
  const styles = getHeaderStyles();
  return <View style={[styles.header, style]} {...props} />;
};

export const CardTitle = ({ style, ...props }: any, ref: any) => {
  const styles = getTitleStyles();
  return <Text ref={ref} style={[styles.title, style]} {...props} />;
};

export const CardDescription = ({ style, colors, ...props }: any, ref: any) => {
  const styles = getDescriptionStyles(colors);
  return <Text ref={ref} style={[styles.description, style]} {...props} />;
};

export const CardContent = ({ style, ...props }: any) => {
  const styles = getContentStyles();
  return <View style={[styles.content, style]} {...props} />;
};

export const CardFooter = ({ style, ...props }: any, ref: any) => {
  const styles = getFooterStyles();
  return <View ref={ref} style={[styles.footer, style]} {...props} />;
};

const getFooterStyles = () =>
  StyleSheet.create({
    footer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
      paddingTop: 0,
    },
  });

const getContentStyles = () =>
  StyleSheet.create({
    content: {
      padding: 6,
      paddingTop: 0,
    },
  });

const getTitleStyles = () =>
  StyleSheet.create({
    title: {
      fontSize: FONT_SIZES['2xl'],
      fontWeight: 'semibold',
      letterSpacing: -0.4,
    },
  });

const getCardStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      borderRadius: 5,
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,
      width: '100%',
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 6,
    },
  });

const getHeaderStyles = () =>
  StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 6,
    },
  });

const getDescriptionStyles = (colors: any) =>
  StyleSheet.create({
    description: {
      color: colors.mutedText,
    },
  });
