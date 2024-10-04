import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
import Resultado from './Resultado';

const Multiplicar = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const multiplicar = () => {
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);

    if (!isNaN(valor1) && !isNaN(valor2)) {
      const resultadoMultiplicacao = valor1 * valor2;
      setResultado(resultadoMultiplicacao);
    } else {
      alert("Por favor, insira números válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite o primeiro número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Número 1"
      />
      <Text style={styles.label}>Digite o segundo número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Número 2"
      />
      <Button title="Calcular Multiplicação" onPress={multiplicar} />
      <Resultado resultado={resultado} />
    </View>
  );
};

export default Multiplicar;