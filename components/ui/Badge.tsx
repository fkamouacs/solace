import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BadgeVariant } from '~/lib/constants';

type BadeProps = {
  badgeStyle: BadgeStyle;
  variant: BadgeVariant;
  colors: any;
  onPress?: () => void;
};

export type BadgeStyle = 'default' | 'secondary';

const variants = {
  pride: '🦚 Pride',
  lust: '❤️‍🔥 Lust',
  gluttony: '🍰 Gluttony',
  sloth: '🦥 Sloth',
  wrath: '😡 Wrath',
  greed: '💰 Greed',
  envy: '👀 Envy',
};

const Badge = ({
  badgeStyle,
  variant,
  colors,
  onPress,
  ...props
}: BadeProps) => {
  const styles = getBadgeVariants(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ marginRight: 5 }}
    >
      <Text style={[styles.base, styles[badgeStyle]]} {...props}>
        {variants[variant]}
      </Text>
    </TouchableOpacity>
  );
};

const getBadgeVariants = (colors: any) =>
  StyleSheet.create({
    base: {
      alignItems: 'center',
      alignSelf: 'flex-start',
      borderRadius: 9999,
      borderWidth: 1,
      paddingHorizontal: 6,
      paddingVertical: 2,
      color: colors.altText,
      marginBottom: 4,
    },
    default: {
      borderColor: 'transparent',
      backgroundColor: colors.primary,
    },
    secondary: {
      borderColor: 'transparent',
      backgroundColor: colors.background,
      color: colors.mutedText,
    },
  });

export default Badge;
