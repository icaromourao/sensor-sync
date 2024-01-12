import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styles from './styles';
import Button from '../../components/Button';
import SensorSelect from '../../components/SensorSelect';

export default function DataCollect() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
    Accelerometer.setUpdateInterval(1000);
  };

  const unsubscribe = () => {
    if (subscription) subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>

      <SensorSelect />

      <View style={styles.statusBoard}>
        <Text style={styles.statusBoardTitle}>Coleta de dados</Text>
        <Text style={styles.statusBoardStatus}>Ativa</Text>
      </View>

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
            g
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
            g
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
            g
          </Text>
        </View>
        <Text style={styles.note}>
          * Aceleração: (em gs onde 1g = 9.81 m/s^2)
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          backgroundColor="#28A745"
          textColor="#FFF"
          marginBottom="16"
          title="Ativar Coleta"
          onPress={() => {}}
        />
        <Button
          backgroundColor="#DC3545"
          textColor="#FFF"
          marginBottom="16"
          title="Desativar Coleta"
          onPress={() => {}}
        />
        <Button
          title="Ver dados"
          marginBottom="16"
          borderWidth="1"
          borderColor="#1B1B1B"
          textColor="#1B1B1B"
          onPress={() => {}}
        />
      </View>

    </View>
  );
}
