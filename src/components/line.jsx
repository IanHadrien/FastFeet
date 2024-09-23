import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function DividerWithText({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',  // Cor da linha
    marginHorizontal: 10,  // Espaçamento ao redor do texto
  },
  text: {
    fontSize: 15,
    // fontWeight: 500,
    color: '#BEBCCC',  // Cor do texto (pode ajustar para se aproximar da imagem)
  },
});
