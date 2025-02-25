import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Index() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: colors.text }}>diary</Text>
    </View>
  );
}
