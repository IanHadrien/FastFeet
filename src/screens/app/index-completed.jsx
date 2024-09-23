import React from 'react';
import { ScrollView, Text } from 'react-native';
import { DividerWithText } from '../../components/line';

export default function IndexCompleted() {
  return (
    <ScrollView className="border bg-primary-white px-6">
      <DividerWithText text='test' />
      <Text>Index-Completed</Text>
    </ScrollView>
  );
}
