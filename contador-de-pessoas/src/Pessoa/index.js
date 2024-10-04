import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

const Pessoa = () => {
  const [number, setNumber] = useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const buttonAnim = useRef(new Animated.Value(1)).current;

  const animateNumber = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
    animateNumber();
  };

  const decrement = () => {
    setNumber(prevNumber => prevNumber - 1);
    animateNumber();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Animated.Text style={[styles.number, { transform: [{ scale: scaleAnim }] }]}>
        {number}
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
          <TouchableOpacity
            style={styles.button}
            onPress={increment}
            onPressIn={animateButtonPress}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
          <TouchableOpacity
            style={styles.button}
            onPress={decrement}
            onPressIn={animateButtonPress}
          >
            <Text style={styles.buttonText}>Remover</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Pessoa;

