import React, { useState, useEffect } from 'react';
import { Magnetometer } from 'expo-sensors';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function MagnetometerComponent({ callback }) {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(Magnetometer.addListener(setData));
    Magnetometer.setUpdateInterval(1000);
  };

  const unsubscribe = () => {
    if (subscription) subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    callback({ x, y, z });
    return () => unsubscribe();
  }, [x, y, z]);

  return (
    <View style={styles.coordinatesContainer}>
      <View style={styles.coordinatesItem}>
        <Image
          style={styles.coordinatesImage}
          source={require('../../../assets/coordinates.png')}
        />
        <Text style={styles.coordinatesText}>
          X:
          {' '}
          {x}
        </Text>
      </View>
      <View style={styles.coordinatesItem}>
        <Image
          style={styles.coordinatesImage}
          source={require('../../../assets/coordinates.png')}
        />
        <Text style={styles.coordinatesText}>
          Y:
          {' '}
          {z}
        </Text>
      </View>
      <View style={styles.coordinatesItem}>
        <Image
          style={styles.coordinatesImage}
          source={require('../../../assets/coordinates.png')}
        />
        <Text style={styles.coordinatesText}>
          Z:
          {' '}
          {y}
        </Text>
      </View>
    </View>
  );
}
