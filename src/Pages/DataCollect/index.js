import { Text, View } from "react-native";
import styles from "../DataCollect/styles";
import Button from "../../components/Button";

export default function DataCollect() {
  return (
    <View style={styles.container}>

      <View style={styles.selectContainer}>
        <View style={styles.selectItem}>
          <Text style={styles.selectItemText}>Acelerômetro</Text>
        </View>
        <View style={styles.selectItem}>
          <Text style={styles.selectItemText}>Magnetômetro</Text>
        </View>
      </View>

      <View style={styles.statusBoard}>
        <Text style={styles.statusBoardTitle}>Coleta de dados</Text>
        <Text style={styles.statusBoardStatus}>Ativa</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          backgroundColor='#28A745'
          textColor='#FFF'
          marginBottom='16'
          title='Ativar Coleta'
          onPress={ () => {} }>
        </Button>
        <Button
          backgroundColor='#DC3545'
          textColor='#FFF'
          marginBottom='16'
          title='Desativar Coleta'
          onPress={ () => {} }>
        </Button>
        <Button
          title='Ver dados'
          marginBottom='16'
          borderWidth='1'
          borderColor='#1B1B1B'
          textColor='#1B1B1B'
          onPress={ () => {} }>
        </Button>

      </View>

    </View>
  );
}
