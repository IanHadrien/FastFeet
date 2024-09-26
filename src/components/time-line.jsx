import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Timeline() {
  return (
    <View style={styles.container}>
      {/* Aguardando */}
      <View style={styles.stepContainer}>
        <View style={[styles.circle, styles.activeCircle]} />
        {/* <Text style={styles.activeText}>AGUARDANDO</Text> */}
      </View>
      
      {/* Linha verde */}
      <View style={[styles.line, styles.activeLine]} />

      {/* Retirado */}
      <View style={styles.stepContainer}>
        <View style={[styles.circle, styles.activeCircle]} />
        {/* <Text style={styles.activeText}>RETIRADO</Text> */}
      </View>
      
      {/* Linha cinza */}
      <View style={styles.line} />

      {/* Entregue */}
      <View style={styles.stepContainer}>
        <View style={styles.circle} />
        {/* <Text style={styles.inactiveText}>ENTREGUE</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 20,
    // paddingHorizontal: 20,
  },
  stepContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E0E0E0', // Cor cinza para inativo
  },
  activeCircle: {
    backgroundColor: '#00D26A', // Cor verde para ativo
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: '#E0E0E0', // Linha inativa (cinza)
    marginHorizontal: 5,
  },
  activeLine: {
    backgroundColor: '#00D26A', // Linha ativa (verde)
  },
  activeText: {
    fontSize: 12,
    color: '#00D26A', // Texto ativo (verde)
    marginTop: 5,
  },
  inactiveText: {
    fontSize: 12,
    color: '#BEBCCC', // Texto inativo (cinza)
    marginTop: 5,
  },
});
