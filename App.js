import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, View, 
  Image, 
  TextInput, 
  Dimensions,
  ScrollView,
  SafeAreaView,
}
from 'react-native';

/*
  Para manter boas práticas estou nomeando 
  todas as variáveis em inglês.

  | Qualquer dúvida enviar email para:
    felipekuhl321@gmail.com

  | Copyright © 2026 Felipe Kühl Pereira
  | All rights reserved
*/

/* Importes dos meus componentes */
import ResultCard from './components/ResultCard';
import AppButton from './components/AppButton';

/* Função principal */
export default function App() {

  const [price1, setPrice1] = useState(null); // Preço do primeiro input
  const [price2, setPrice2] = useState(null); // Preço do segundo input
  const [resultado, setResultado] = useState(null); // Resultado

  /* Verificar o preço e setar os valores do card */
  function verify() {

    if (!price1 || !price2) return;
    const recomendacao = price1 / price2 < 0.7 ? 'Etanol' : 'Gasolina';
    const percentual = ((price1 / price2) * 100).toFixed(1);
    setResultado({ recomendacao, percentual });
  }

  /* Retorna o preço caso os valores estejam corretos */
  function priceText(price) {

    return price === null || isNaN(price) ? '' : 'R$'+price;
  }

  /*
      Header: 
        SafeAreaView para a barra de status do celular
        não cobrir o ícone e o título
      
      Input: 
        Renderiza as bordas em vermelho caso o texto
        digitado não for um número
      
      Card:
        Só aparece depois de clicar no botão verde após
        digitar os preços
  */
  return (

    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.header}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXtOOhMFHRVBhLgUi5nliSWrD-CNrOcmtTA&s' }} 
          style={{width: 32, height: 32}} 
        />
        <Text style={styles.title}>Etanol ou Gasolina?</Text>
      </SafeAreaView>

      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/gas-station-map-location-black-icon.png' }} 
          style={styles.image} 
        />

        <Text>Preço do Etanol: {priceText(price1)}</Text>
        <TextInput 
          style={[
            styles.input,
            price1 !== null && isNaN(price1) && { borderColor: 'red' }
          ]} 
          placeholder='Digite o preço do etanol...'  
          onChangeText={(text) => setPrice1(parseFloat(text))}
        />

        <Text>Preço da Gasolina: {priceText(price2)}</Text>
        <TextInput 
          style={[
            styles.input,
            price2 !== null && isNaN(price2) && { borderColor: 'red' }
          ]} 
          placeholder='Digite o preço da gasolina... '
          onChangeText={(text) => setPrice2(parseFloat(text))}
        />

        {/* Se o resultado não for NULL, rederiza o elemento */}
        {resultado ? (
          <ResultCard recomendation={resultado.recomendacao} percentual={resultado.percentual} />
        ) : null}
      </View>

      {/* Botão */}
      <AppButton title='Verificar vantagem' onPress={verify} />

      {/* Barra de status com altura automática */}  
      <StatusBar height='auto' />
    </ View>
  );
}

/* Stylesheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  }, 
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    width: Dimensions.get('window').width - 64,
    padding: 12,
    marginBottom: 12,
    marginTop: 8,
    color: 'grey',
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    borderColor: 'grey',
    borderWidth: 1,
  },
  image: {
    width: 180,
    height: 180,
    margin: 32,
  }
});