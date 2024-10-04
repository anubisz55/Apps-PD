import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', 
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    color: '#FFFFFF', 
    fontSize: 36, 
    fontWeight: 'bold',
    fontFamily: 'Montserrat', 
    textAlign: 'center',
    letterSpacing: 1.2, 
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 140, 
    borderWidth: 6,
    borderColor: '#FFFFFF', 
    alignSelf: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10, 
  },
  text: {
    color: '#B0B0B0',
    fontSize: 18,
    fontFamily: 'Montserrat-Light', 
    lineHeight: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export { styles };
