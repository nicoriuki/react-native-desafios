import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { Home, FormScreen, SelectDate } from '../screens';
import { optionHeader } from '../CONSTANTS/options';

let options = optionHeader;
const Stack = createNativeStackNavigator();

const DateNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Agenda" />
                              ),
                        }}
                  />
                  <Stack.Screen
                        name="Form"
                        component={FormScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Agregar Cita" />
                              ),
                        }}
                  />
                  <Stack.Screen
                        name="Select"
                        component={SelectDate}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Nueva fecha" />
                              ),
                        }}
                  />
            </Stack.Navigator>
      );
};

export default DateNavigator;
