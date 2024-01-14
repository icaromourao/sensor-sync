import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  coordinatesContainer: {
    borderWidth: 1.5,
    borderColor: '#6E6E6E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 32,
  },
  coordinatesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  coordinatesImage: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  coordinatesText: {
    fontSize: 16,
  },
});

export default styles;
