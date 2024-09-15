import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView className="bg-primary-purple pt-2">
      <View className="flex items-start border border-red-500">
        <ImageBackground
          source={require("./src/imgs/FF.png")}
          style={{ width: 279.14, height: 312.68 }}
        >
        <Text className="bg-black text-white">Open up App.js to start working on your app!</Text>
        </ ImageBackground>
      </View>
      <Text className="bg-black">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
