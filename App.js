import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// 

export default function App() {
  return (
    
    <View style={styles.container}>
   
      <Text style={styles.title}>Álcool ou Gasolina?</Text>

      <Text>Preço do Etanol:</Text>
      <TextInput style={styles.input} placeholder='Digite o preço do etanol...' />

      <Text>Preço da Gasolina:</Text>
      <TextInput style={styles.input} placeholder='Digite o preço da gasolina...' />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 16,
    marginBottom: 24,
  },
  input: {
    padding: 8,
    margin: 6,
    color: 'grey',
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
  }
});