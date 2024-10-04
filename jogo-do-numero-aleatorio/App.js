import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';
export default function App() {
  return (
    <View style={styles.container}>
      <Numero /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

