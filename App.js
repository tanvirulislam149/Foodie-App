import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
