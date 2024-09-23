import React from 'react';
import { ScrollView, Text } from 'react-native';
import { DividerWithText } from '../../components/line';

export default function Index() {
  return (
    <ScrollView className="bg-primary-white px-6">
      <DividerWithText text='8 entregas' />
      <Text>Index</Text>
    </ScrollView>
  );
}
