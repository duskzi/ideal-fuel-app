import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2e7d32',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 42,
    boxShadow: '0 6px 16px -1px rgba(0, 0, 0, 0.4)',
    borderWidth: 1,
    borderColor: '#000000d7'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});