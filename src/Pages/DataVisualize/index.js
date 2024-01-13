import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import SensorSelect from '../../components/SensorSelect';
import Button from '../../components/Button';
import styles from './styles';
import Request from '../../helpers/Request';
import MyChart from '../../components/MyChart';

export default function DataVisualize({ navigation }) {
  const [activeOption, setOption] = useState(0);
  const [accelerometerData, setAccelerometerData] = useState([]);
  const [magnetometerData, setMagnetometerData] = useState([]);
  const [entireAccelerometerData, setEntireAccelerometerData] = useState([]);
  const [entireMagnetometerData, setEntireMagnetometerData] = useState([]);
  const accelerometerChartsData = [
    { id: 'AccX', title: 'Coordernada X', data: accelerometerData[0] },
    { id: 'AccY', title: 'Coordernada Y', data: accelerometerData[1] },
    { id: 'AccZ', title: 'Coordernada Z', data: accelerometerData[2] },
  ];
  const magnetometerChartsData = [
    { id: 'MagX', title: 'Coordernada X', data: magnetometerData[0] },
    { id: 'MagY', title: 'Coordernada Y', data: magnetometerData[1] },
    { id: 'MagZ', title: 'Coordernada Z', data: magnetometerData[2] },
  ];
  const keysFilter = (data, keys) => data.map((objeto, index) => {
    const novoObjeto = {};
    keys.forEach((chave) => {
      novoObjeto.y = objeto[chave];
      novoObjeto.x = index + 1;
    });
    return novoObjeto;
  });
  const processData = (data, dataType) => {
    const xArray = keysFilter(data, ['x']);
    const yArray = keysFilter(data, ['y']);
    const zArray = keysFilter(data, ['z']);

    if (dataType === 0) {
      setAccelerometerData([xArray, yArray, zArray]);
    } else {
      setMagnetometerData([xArray, yArray, zArray]);
    }
  };
  const getAccelerometerData = () => {
    Request('accelerometer', 'GET')
      .then((data) => {
        setEntireAccelerometerData(data);
        processData(data, 0);
      });
  };
  const getMagnetometerData = () => {
    Request('magnetometer', 'GET')
      .then((data) => {
        setEntireMagnetometerData(data);
        processData(data, 1);
      });
  };
  const sensorSelectCallback = (value) => {
    setOption(value);

    if (value === 0 && accelerometerData.length === 0) {
      getAccelerometerData();
    }
    if (value === 1 && magnetometerData.length === 0) {
      getMagnetometerData();
    }
  };

  const chartsJSX = [];

  if (accelerometerData.length !== 0 && activeOption === 0) {
    accelerometerChartsData.forEach((chartData) => {
      const minXvalue = chartData.data.reduce((prev, curr) => (prev.x < curr.x ? prev : curr)).x;
      const maxXvalue = chartData.data.reduce((prev, curr) => (prev.x > curr.x ? prev : curr)).x;
      const minYvalue = chartData.data.reduce((prev, curr) => (prev.y < curr.y ? prev : curr)).y;
      const maxYvalue = chartData.data.reduce((prev, curr) => (prev.y > curr.y ? prev : curr)).y;

      chartsJSX.push(<MyChart
        key={chartData.id}
        title={chartData.title}
        data={chartData.data}
        xDomain={{ min: minXvalue, max: maxXvalue }}
        yDomain={{ min: minYvalue, max: maxYvalue }}
      />);
    });
  }
  if (magnetometerData.length !== 0 && activeOption === 1) {
    magnetometerChartsData.forEach((chartData) => {
      const minXvalue = chartData.data.reduce((prev, curr) => (prev.x < curr.x ? prev : curr)).x;
      const maxXvalue = chartData.data.reduce((prev, curr) => (prev.x > curr.x ? prev : curr)).x;
      const minYvalue = chartData.data.reduce((prev, curr) => (prev.y < curr.y ? prev : curr)).y;
      const maxYvalue = chartData.data.reduce((prev, curr) => (prev.y > curr.y ? prev : curr)).y;

      chartsJSX.push(<MyChart
        key={chartData.id}
        title={chartData.title}
        data={chartData.data}
        xDomain={{ min: minXvalue, max: maxXvalue }}
        yDomain={{ min: minYvalue, max: maxYvalue }}
      />);
    });
  }

  useEffect(() => {
    if (activeOption === 0) {
      getAccelerometerData();
    } else {
      getMagnetometerData();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        <View style={{ height: 60 }}>
          <SensorSelect parentCallback={sensorSelectCallback} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          onStartShouldSetResponder={() => true}
          style={styles.chartsContainer}
        >
          {chartsJSX}
        </ScrollView>

      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Ver tabela"
          backgroundColor="#B947FF"
          textColor="#FFFFFF"
          onPress={() => {
            if (activeOption === 0) {
              navigation.navigate('TableView', { data: entireAccelerometerData });
            } else {
              navigation.navigate('TableView', { data: entireMagnetometerData });
            }
          }}
        />
      </View>
    </View>
  );
}
