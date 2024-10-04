import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10, 
    margin: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00FF00',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 28, 
    color: '#FFFFFF', 
    marginTop: 20,
    padding: 15,
    borderColor: '#00FF00', 
    borderWidth: 3, 
    borderRadius: 10, 
    backgroundColor: '#000000',
    textAlign: 'center', 
  },
  button: {
    backgroundColor: '#00FF00', 
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 50, 
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 2, 
    borderColor: '#00FF00', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#000000', 
    fontSize: 20, 
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
});




