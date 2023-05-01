import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import MainRouter from './src/routes/MainRouter';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Avenir-Black': require('./assets/fonts/AvenirLTStd-Black.otf'),
          'Avenir-Book': require('./assets/fonts/AvenirLTStd-Book.otf'),
          'Avenir-Roman': require('./assets/fonts/AvenirLTStd-Roman.otf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    
    prepare();
  });

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRouter />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}