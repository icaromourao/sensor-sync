import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F2F5F9',
  },
  header: {
    height: 40,
    backgroundColor: '#B947FF',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '300',
    color: '#FFFFFF',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 30,
    backgroundColor: '#FFFFFF',
  },
  headerTable: {
    borderWidth: 1,
    borderColor: '#C1C0B9',
  },
  bodyText: {
    textAlign: 'center',
    fontWeight: '300',
  },
  bodyTable: {
    borderWidth: 1,
    borderColor: '#C1C0B9',
  },
});

export default styles;
