import React from 'react';
import { Text, TextProps } from 'react-native';

// Custom Text Component to Apply Default Font
const CustomText = (props: TextProps) => {
  return <Text {...props} style={[props.style]} />;
};

export default CustomText;
