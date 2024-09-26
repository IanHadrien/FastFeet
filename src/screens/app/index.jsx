import React from 'react';
import { SafeAreaView } from 'react-native';
import { DividerWithText } from '../../components/line';
import FlatListComponent from '../../components/lists/flat-list';

export default function Index() {
  return (
    <SafeAreaView className="bg-primary-white px-6">
      <DividerWithText text='8 entregas' />

      <FlatListComponent />

    </SafeAreaView>
  );
}
