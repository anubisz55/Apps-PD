import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EAF0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#34495E',
    marginBottom: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  number: {
    fontSize: 80,
    color: '#1ABC9C',
    marginVertical: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 30,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#2980B9',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default styles;


