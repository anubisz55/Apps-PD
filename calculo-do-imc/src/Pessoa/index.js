// src/Pessoa/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles';

const Pessoa = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const formatarPeso = (valor) => {
    return valor.replace(/[^0-9,]/g, ''); 
  };

  const formatarAltura = (valor) => {
    const numero = valor.replace(/[^0-9]/g, '');
    return numero.length >= 3 ? `${numero.slice(0, -2)}.${numero.slice(-2)}` : numero; 
  };

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    if (pesoNum && alturaNum) {
      const imc = pesoNum / (alturaNum * alturaNum);
      let classificacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
      } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade grau I';
      } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade grau II';
      } else {
        classificacao = 'Obesidade grau III/Mórbida';
      }

      setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      Keyboard.dismiss(); 
      calcularIMC(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(formatarPeso(text))}
        onSubmitEditing={handleKeyPress} 
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(formatarAltura(text))}
        onSubmitEditing={handleKeyPress} 
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={{ color: '#ffffff', textAlign: 'center' }}>Calcular IMC</Text>
      </TouchableOpacity>
      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
};

export default Pessoa;






