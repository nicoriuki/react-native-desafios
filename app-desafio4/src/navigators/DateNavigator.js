import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { Home, FormScreen, SelectDate } from './../screens';

let options = {
      headerStyle: {
            backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 50,
      },
};
const Stack = createNativeStackNavigator();

const DateNavigator = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                              name="Home"
                              component={Home}
                              options={{
                                    ...options,
                                    headerTitle: (props) => (
                                          <Header {...props} title="Citas" />
                                    ),
                              }}
                        />
                        <Stack.Screen
                              name="Form"
                              component={FormScreen}
                              options={{
                                    ...options,
                                    headerTitle: (props) => (
                                          <Header
                                                {...props}
                                                title="Agregar Cita"
                                          />
                                    ),
                              }}
                        />
                        <Stack.Screen
                              name="Select"
                              component={SelectDate}
                              options={{
                                    ...options,
                                    headerTitle: (props) => (
                                          <Header
                                                {...props}
                                                title="Nueva fecha"
                                          />
                                    ),
                              }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
};

export default DateNavigator;
