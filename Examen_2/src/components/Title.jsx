import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CryptXTitle() {
  return (
    <Text style={styles.titleText}>
      Crypt<Text style={styles.accentText}>X</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  accentText: {
    color: '#7c72ff', 
  },
});