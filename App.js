import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text>Open up App.js to start working on your app!!!!!!!!!!!</Text>
        <Greeting name='Emrys' />
      </View>
    </SafeAreaView>
  );
}

const Greeting = props => {
  return (
    <Text>Hello, {props.name}!</Text>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
