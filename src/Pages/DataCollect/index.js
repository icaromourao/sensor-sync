import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import SensorSelect from '../../components/SensorSelect';

export default function DataCollect() {
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
          <Text style={styles.coordinatesText}>X: 0,00165 m/s²</Text>
        </View>
        <View style={styles.coordinatesItem}>
          <Image
            style={styles.coordinatesImage}
            source={require('../../../assets/coordinates.png')}
          />
          <Text style={styles.coordinatesText}>Y: 0,00165 m/s²</Text>
        </View>
        <View style={styles.coordinatesItem}>
          <Image
            style={styles.coordinatesImage}
            source={require('../../../assets/coordinates.png')}
          />
          <Text style={styles.coordinatesText}>Z: 0,00165 m/s²</Text>
        </View>
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
