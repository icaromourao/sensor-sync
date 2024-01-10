import {
  Image,
  SafeAreaView,
  Text,
  View,
  Pressable } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>

        <Pressable onPress={() => {
          navigation.navigate('DataCollect');
        }}>
          <View style={styles.homeCard}>
            <Image
              style={styles.cardImage}
              source={require('../../../assets/sensor.png')}
              />
            <View style={styles.homeCardTextsContainer}>
              <Text style={styles.cardTitle}>Coletar dados</Text>
              <Text style={styles.cardDescription}>Inicie uma coleta de dados com sensores do seu smartphone</Text>
            </View>
          </View>
        </Pressable>

        <Pressable>
          <View style={styles.homeCard}>
            <Image
              style={{ width: 65, height: 65, marginRight: 16 }}
              source={require('../../../assets/exploration.png')}
              />
            <View style={styles.homeCardTextsContainer}>
              <Text style={styles.cardTitle}>Ver dados</Text>
              <Text style={styles.cardDescription}>Visualize e analise os dados coletados a partir de sensores de seu smartphone</Text>
            </View>
          </View>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}
