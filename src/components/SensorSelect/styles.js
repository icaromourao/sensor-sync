import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  selectItem: {
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
  selectItemActive: {
    borderBottomColor: '#B947FF',
    borderBottomWidth: 2,
  },
  selectItemTextActive: {
    color: '#1B1B1B',
    fontWeight: '500',
  },
});

export default styles;
