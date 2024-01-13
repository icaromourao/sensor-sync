import React from 'react';
import { View, Text } from 'react-native';
import {
  Chart,
  Line,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import styles from './styles';

export default function MyChart({ data, title }) {
  return (
    <View>
      <Text style={styles.chartTitle}>{ title }</Text>
      <Chart
        disableGestures
        style={styles.chart}
        data={data}
        padding={{
          left: 40, bottom: 20, right: 20, top: 20,
        }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis
          tickCount={10}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={5} />
        <Line theme={{
          stroke: { color: '#B947FF', width: 2 },
          scatter: { default: { width: 2, height: 4, rx: 2 } },
        }}
        />
      </Chart>
    </View>
  );
}
