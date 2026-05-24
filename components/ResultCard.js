import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function ResultCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.resultCardTitle}>Abasteça com: {props.recomendation}</Text>
      <Text style={styles.resultCardSub}>
        O etanol está custando {props.percentual}% da gasolina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
    borderColor: '#81d085',
    borderWidth: 1,
    width: Dimensions.get('window').width - 64,
  },
  resultCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  resultCardSub: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});