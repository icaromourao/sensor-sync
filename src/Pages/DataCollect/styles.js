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
  note: {
    fontSize: 9.89,
    textAlign: 'center',
  },
  buttonsContainer: {},
});

export default styles;
