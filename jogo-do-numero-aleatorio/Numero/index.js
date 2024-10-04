import React, { useState } from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import styles from './styles'; 

const Numero = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleDiscover = () => {
    const generatedNumber = Math.floor(Math.random() * 10) + 1; 
    setRandomNumber(generatedNumber);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtDAhdze2p3SDWaMvRFfj1CAnfESu2P8UEMFMVicVdCMfl0XrkXyQ0tXqqD7O4nF0TGLPlmPNN6q1pZjBUX4elHjE-0tWXXXTU2vxuiQ5u4tGRkwagdPWeMM8bvHnVsK80LrFuVHLJcxs/s1600/Captura+de+tela+2017-07-22+11%253A09%253A06.png' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pense em um número de 1 a 10!</Text>
        <Button title="Descobrir" onPress={handleDiscover} />
        {randomNumber !== null && (
          <Text style={styles.resultText}>O número gerado foi: {randomNumber}</Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default Numero;


