import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F2F5F9',
  },
  statusBoard: {
    marginBottom: 32,
  },
  statusBoardTitle: {
    color: '#6E6E6E',
    fontSize: 9.89,
    textAlign: 'center',
    marginBottom: 4,
  },
  statusBoardStatus: {
    color: '#28A745',
    fontSize: 25.89,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statusBoardStatusDisabled: {
    color: '#dc3545',
  },
  buttonsContainer: {},
});

export default styles;
