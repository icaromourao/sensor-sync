import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import SensorSelect from '../../components/SensorSelect';
import AccelerometerComponent from '../../components/Accelerometer';
import MagnetometerComponent from '../../components/Magnetometer';

export default function DataCollect() {
  const [activeOption, setOption] = useState(0);
  let sensorPage;

  if (activeOption === 0) {
    sensorPage = <AccelerometerComponent />;
  } else {
    sensorPage = <MagnetometerComponent />;
  }

  const callback = (value) => {
    setOption(value);
  };

  return (
    <View style={styles.container}>

      <View style={{ height: 60 }}>
        <SensorSelect parentCallback={callback} />
      </View>

      <View>
        <View style={styles.statusBoard}>
          <Text style={styles.statusBoardTitle}>Coleta de dados</Text>
          <Text style={styles.statusBoardStatus}>Ativa</Text>
        </View>

        {sensorPage}

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
    </View>
  );
}
