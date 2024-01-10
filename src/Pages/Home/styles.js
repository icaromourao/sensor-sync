import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F2F5F9',
  },
  homeContainer: {
    flex: 1,
  },
  homeCard: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 16,
  },
  cardImage: {
    width: 65,
    height: 74.63,
    marginRight: 16,
  },
  homeCardTextsContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#1B1B1B',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#1B1B1B',
    fontSize: 9.89,
  },
});

export default styles;
