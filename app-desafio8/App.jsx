import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import store from './src/store/index';
import MainNavigator from './src/navigators/MainNAvigatior';
import { init } from './src/db';

SplashScreen.preventAutoHideAsync();

init()
      .then(() => {
            console.log('Initialized database');
      })
      .catch((err) => {
            console.log('Initializing db failed.');
            console.log(err);
      });
export default function App() {
      const [fontsLoaded] = useFonts({
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            AbrilFatface: require('./assets/fonts/AbrilFatface-Regular.ttf'),
      });
      useEffect(() => {
            if (fontsLoaded) {
                  SplashScreen.hideAsync();
            }
      }, [fontsLoaded]);

      if (!fontsLoaded) {
            return null;
      }

      return (
            <Provider store={store}>
                  <MainNavigator />
            </Provider>
      );
}
