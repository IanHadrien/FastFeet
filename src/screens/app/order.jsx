import React from 'react';
import { ScrollView, Text } from 'react-native';
import { DividerWithText } from '../../components/line';

export default function Orders() {
  return (
    <ScrollView className="border bg-primary-white px-6">
      <DividerWithText text='test' />
      <Text>Orders</Text>
    </ScrollView>
  );
}
