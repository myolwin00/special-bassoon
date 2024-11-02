import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/authContext';
import { useRouter } from 'expo-router';

const AuthScreen = () => {

  const { setIsAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    setIsAuthenticated(true);
    router.replace('/home'); // Navigate to home after login
  };

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <Text>Login Screen</Text>
        <Button title="Log In" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

export default AuthScreen;
