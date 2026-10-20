
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function BotonPersonalizado({ title, onPress }) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && { opacity: 0.85 }
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6c5ce7', 
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#6c5ce7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});