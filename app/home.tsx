import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
