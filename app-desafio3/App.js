import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FormScreen from './src/screens/FormScreen';
import SelectDate from './src/screens/SelectDate';
import { Header, List } from './src/components';

SplashScreen.preventAutoHideAsync();
let dateInitialState = {
      nombre: '',
      email: '',
      fecha: '',
      id: '',
};
export default function App() {
      const [fontsLoaded] = useFonts({
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      });
      useEffect(() => {
            if (fontsLoaded) {
                  SplashScreen.hideAsync();
            }
      }, [fontsLoaded]);
      const [dateForm, setDateForm] = useState(dateInitialState);
      const [confirmSelectDateScreen, setConfirmSelectDateScreen] =
            useState(false);

      const [dates, setDates] = useState([]);
      const confirmSelectDate = () => {
            setConfirmSelectDateScreen(true);
      };
      const onConfirmDate = () => {
            setDates([...dates, dateForm]);
            setDateForm(dateInitialState);
            setConfirmSelectDateScreen(false);
      };

      const onCancelDate = () => {
            setDateForm(dateInitialState);
            setConfirmSelectDateScreen(false);
      };

      if (!fontsLoaded) {
            return null;
      }
      return (
            <View style={styles.container}>
                  <Header title="Seleciones su cita" />

                  {!confirmSelectDateScreen ? (
                        <FormScreen
                              confirmSelectDateScreen={confirmSelectDate}
                              dateForm={dateForm}
                              setDateForm={setDateForm}
                        />
                  ) : (
                        <SelectDate
                              dateForm={dateForm}
                              setDateForm={setDateForm}
                              onConfirmDate={onConfirmDate}
                              onCancelDate={onCancelDate}
                        />
                  )}

                  <List dates={dates} />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
});
