import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  selectItem: {
    flex: 1,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6E6E6E',
    paddingBottom: 8,
  },
  selectItemText: {
    fontSize: 16,
    color: '#6E6E6E',
    textAlign: 'center',
  },
});

export default styles;
