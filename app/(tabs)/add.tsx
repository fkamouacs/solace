import { View, Text } from 'react-native';
import React from 'react';
import AddEgo from '~/components/addEgo';

const add = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <AddEgo></AddEgo>
    </View>
  );
};

export default add;
