import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const SENSOR_OPTIONS = [
  { id: 0, name: 'Acelerômetro' },
  { id: 1, name: 'Magnetômetro' },
];

export default function SensorSelect({ parentCallback }) {
  const [activeOption, setOption] = useState(0);

  return (
    <View style={styles.selectContainer}>
      {
        SENSOR_OPTIONS.map((option) => (
          <Pressable
            key={option.id}
            style={styles.pressable}
            onPress={() => {
              setOption(option.id);
              parentCallback(option.id);
            }}
          >
            <View style={[
              styles.selectItem,
              activeOption === option.id ? styles.selectItemActive : {}]}
            >
              <Text style={[
                styles.selectItemText,
                activeOption === option.id ? styles.selectItemTextActive : {}]}
              >
                {option.name}
              </Text>
            </View>
          </Pressable>
        ))
      }
    </View>
  );
}
