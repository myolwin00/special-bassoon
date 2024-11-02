import { useState } from 'react';
import { ExpoRouter } from 'expo-router';
import { AuthContext } from './contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ExpoRouter />
    </AuthContext.Provider>
  );
}