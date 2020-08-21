import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default function Project({route}) {
  const data = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>${data.pid}</Text>
      <Text>${data.label}</Text>
      <Text>${data.description}</Text>
    </View>
  );
}

