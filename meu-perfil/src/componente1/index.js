import { View, Text, Image } from 'react-native';
import {styles} from './styles'

function Componente(){
  let nome = 'Nubia Abreu de Oliveira';
    let img = 'https://i.pinimg.com/550x/49/88/21/498821435726040a731f849a8c9d9244.jpg';

return (
    <View style={styles.container}>
      <Text style={styles.title}>App Meu Perfil</Text>
      <Image
        source={{ uri: img }}
        style={styles.image}
      />
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Idade: 21</Text>
      <Text style={styles.text}>Formação: Faculdade de Tecnologia de Praia Grande</Text>
      <Text style={styles.text}>Experiência: Assistente Administrativo</Text>
      <Text style={styles.text}>Projetos: App Meu Perfil</Text>
    </View>
  );
}


export default Componente;
