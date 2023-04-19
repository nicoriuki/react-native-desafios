import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { optionHeader } from '../CONSTANTS/options';
import { PatientsScreen, NewPatientScreen } from '../screens';
let options = optionHeader;
const Stack = createNativeStackNavigator();

const PatientsNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="Pacientes">
                  <Stack.Screen
                        name="Pacientes"
                        component={PatientsScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Pacientes" />
                              ),
                        }}
                  />
                  <Stack.Screen
                        name="nuevoPaciente"
                        component={NewPatientScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Nuevo Paciente" />
                              ),
                        }}
                  />
            </Stack.Navigator>
      );
};

export default PatientsNavigator;
