import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button(props) {
  const {
    backgroundColor,
    borderWidth,
    borderColor,
    marginBottom,
    onPress,
    textColor,
    title,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.button, {
        backgroundColor,
        borderWidth,
        borderColor,
        marginBottom: marginBottom
          ? Number.parseInt(marginBottom, 10)
          : 0,
      },
      ]}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}
