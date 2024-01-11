import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function SensorSelect() {
  return (
    <View style={styles.selectContainer}>
      <View style={styles.selectItem}>
        <Text style={styles.selectItemText}>Acelerômetro</Text>
      </View>
      <View style={styles.selectItem}>
        <Text style={styles.selectItemText}>Magnetômetro</Text>
      </View>
    </View>
  );
}
