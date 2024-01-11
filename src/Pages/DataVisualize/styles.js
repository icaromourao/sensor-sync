import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F2F5F9',
  },
  chartsContainer: {},
  chartTitle: {
    fontSize: 16,
    color: '#1B1B1B',
  },
  chart: {
    height: 200,
    width: '100%',
    marginBottom: 32,
  },
  buttonWrapper: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    backgroundColor: '#F2F5F9',
    bottom: 0,
    left: 0,
  },
});

export default styles;
