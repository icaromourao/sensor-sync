import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import DataCollect from './src/Pages/DataCollect';
import DataVisualize from './src/Pages/DataVisualize';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: 'SensorSync' }}
          />
        <Stack.Screen
          name="DataCollect"
          component={ DataCollect }
          options={{ title: 'Coletar dados' }}
          />
        <Stack.Screen
          name="DataVisualize"
          component={ DataVisualize }
          options={{ title: 'Ver dados' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
