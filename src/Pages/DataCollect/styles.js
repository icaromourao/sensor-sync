import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F2F5F9',
  },
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
  buttonsContainer: {},

});

export default styles;
