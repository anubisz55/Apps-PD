import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fafafa', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff4081', 
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  input: {
    height: 55,
    borderColor: '#ff4081',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, 
  },
  button: {
    backgroundColor: '#ff4081',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  result: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fce4ec', 
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;


