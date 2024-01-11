import { TouchableOpacity, Text } from "react-native";
import styles from './styles';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={ [styles.button, {
          backgroundColor: props.backgroundColor,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          marginBottom: props.marginBottom
            ? Number.parseInt(props.marginBottom, 10)
            : 0,
        }
      ]}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={props.onPress}>
        <Text style={[ styles.buttonText, { color: props.textColor }]}>
          { props.title }
        </Text>
    </TouchableOpacity>
  );
}
