import { Text, ScrollView, View } from "react-native";
import SensorSelect from "../../components/SensorSelect";
import styles from './styles';
import {
  Chart,
  Line,
  HorizontalAxis,
  VerticalAxis } from 'react-native-responsive-linechart'
import Button from "../../components/Button";

export default function DataVisualize() {

  const DATA = [
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <SensorSelect/>

        <ScrollView
          showsVerticalScrollIndicator={false}
          onStartShouldSetResponder={() => true}
          style={styles.chartsContainer}>
          <Text style={styles.chartTitle}>Coordenada X</Text>
          <Chart
            disableGestures={true}
            style={styles.chart}
            data={DATA}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: -2, max: 10 }}
            yDomain={{ min: 0, max: 20 }}>
            <VerticalAxis
              tickCount={10}
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
            <HorizontalAxis tickCount={5} />
            <Line theme={{
              stroke: { color: '#B947FF', width: 2 },
              scatter: { default: { width: 2, height: 4, rx: 2 }} }} />
          </Chart>

          <Text style={styles.chartTitle}>Coordenada Y</Text>
          <Chart
            disableGestures={true}
            style={styles.chart}
            data={DATA}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: -2, max: 10 }}
            yDomain={{ min: 0, max: 20 }}>
            <VerticalAxis
              tickCount={10}
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
            <HorizontalAxis tickCount={5} />
            <Line theme={{
              stroke: { color: '#B947FF', width: 2 },
              scatter: { default: { width: 2, height: 4, rx: 2 }} }} />
          </Chart>

          <Text style={styles.chartTitle}>Coordenada Z</Text>
          <Chart
            disableGestures={true}
            style={styles.chart}
            data={DATA}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: -2, max: 10 }}
            yDomain={{ min: 0, max: 20 }}>
            <VerticalAxis
              tickCount={10}
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
            <HorizontalAxis tickCount={5} />
            <Line theme={{
              stroke: { color: '#B947FF', width: 2 },
              scatter: { default: { width: 2, height: 4, rx: 2 }} }} />
          </Chart>

        </ScrollView>

      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title='Ver tabela'
          backgroundColor='#B947FF'
          textColor='#FFFFFF'
          onPress={ () => {} }>
        </Button>
      </View>
    </View>
  );
}
