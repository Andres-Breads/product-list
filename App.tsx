import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './src/routes/MainRouter';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRouter />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}