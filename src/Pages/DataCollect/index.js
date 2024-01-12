import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import SensorSelect from '../../components/SensorSelect';
import AccelerometerComponent from '../../components/Accelerometer';
import MagnetometerComponent from '../../components/Magnetometer';
import Request from '../../helpers/Request';

let ACCELEROMETER_DATA = [];
let MAGNETOMETER_DATA = [];

export default function DataCollect() {
  const [activeOption, setOption] = useState(0);
  const [
    isEnabledAccelerometerDataCollection,
    setIsEnabledAccelerometerDataCollection,
  ] = useState(false);
  const [
    isEnabledMagnetometerDataCollection,
    setIsEnabledMagnetometerDataCollection,
  ] = useState(false);
  let sensorPage;
  let statusBoard;
  const sensorSelectCallback = (value) => {
    setIsEnabledAccelerometerDataCollection(false);
    setIsEnabledMagnetometerDataCollection(false);
    setOption(value);
  };
  const accelerometerCallback = (data) => {
    if (isEnabledAccelerometerDataCollection) {
      ACCELEROMETER_DATA.push(data);
    }
  };
  const magnetometerCallback = (data) => {
    if (isEnabledMagnetometerDataCollection) {
      MAGNETOMETER_DATA.push(data);
    }
  };
  const enableDataCollection = () => {
    if (activeOption === 0) {
      setIsEnabledAccelerometerDataCollection(true);
    } else {
      setIsEnabledMagnetometerDataCollection(true);
    }
  };
  const disableDataCollection = () => {
    if (activeOption === 0) {
      setIsEnabledAccelerometerDataCollection(false);
    } else {
      setIsEnabledMagnetometerDataCollection(false);
    }
  };

  if (activeOption === 0) {
    sensorPage = <AccelerometerComponent callback={accelerometerCallback} />;
    statusBoard = (
      <Text style={[
        styles.statusBoardStatus,
        isEnabledAccelerometerDataCollection ? {} : styles.statusBoardStatusDisabled]}
      >
        { isEnabledAccelerometerDataCollection ? 'Ativa' : 'Desativada'}
      </Text>
    );
  } else {
    sensorPage = <MagnetometerComponent callback={magnetometerCallback} />;
    statusBoard = (
      <Text style={[
        styles.statusBoardStatus,
        isEnabledMagnetometerDataCollection ? {} : styles.statusBoardStatusDisabled]}
      >
        { isEnabledMagnetometerDataCollection ? 'Ativa' : 'Desativada'}
      </Text>
    );
  }

  useEffect(() => () => {
    if (ACCELEROMETER_DATA.length !== 0) {
      Request(
        'storeAccelerometerData',
        'POST',
        { accelerometerData: ACCELEROMETER_DATA },
      )
        .then(() => {
          // do nothing
        })
        .catch((error) => {
          console.log('Api call error: ', error.message);
        });
    }
    if (MAGNETOMETER_DATA.length !== 0) {
      Request(
        'storeMagnetometerData',
        'POST',
        { magnetometerData: MAGNETOMETER_DATA },
      )
        .then(() => {
          // do nothing
        })
        .catch((error) => {
          console.log('Api call error: ', error.message);
        });
    }
    setIsEnabledAccelerometerDataCollection(false);
    setIsEnabledMagnetometerDataCollection(false);
    ACCELEROMETER_DATA = [];
    MAGNETOMETER_DATA = [];
  }, []);

  return (
    <View style={styles.container}>

      <View style={{ height: 60 }}>
        <SensorSelect parentCallback={sensorSelectCallback} />
      </View>

      <View>
        <View style={styles.statusBoard}>
          <Text style={styles.statusBoardTitle}>Coleta de dados</Text>
          {statusBoard}
        </View>

        {sensorPage}

        <View style={styles.buttonsContainer}>
          <Button
            backgroundColor="#28A745"
            textColor="#FFF"
            marginBottom="16"
            title="Ativar Coleta"
            onPress={() => { enableDataCollection(); }}
          />
          <Button
            backgroundColor="#DC3545"
            textColor="#FFF"
            marginBottom="16"
            title="Desativar Coleta"
            onPress={() => { disableDataCollection(); }}
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
