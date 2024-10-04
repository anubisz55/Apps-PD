import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Resultado = ({ resultado }) => {
  return (
    <View>
      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
};

export default Resultado;