import { useContext, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { AuthContext } from '../contexts/authContext';

export default function RootLayout() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login'); // Redirect to login if not authenticated
    } else {
      router.replace('/home'); // Go to home if authenticated
    }
  }, [isAuthenticated]);

  return <Stack screenOptions={{ headerShown: false }} />;
}