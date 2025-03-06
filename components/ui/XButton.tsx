import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const XButton = ({ onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>x</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9370DB', // Button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'red', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default XButton;
