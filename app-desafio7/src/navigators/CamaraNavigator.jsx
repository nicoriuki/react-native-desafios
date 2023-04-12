import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { optionHeader } from '../CONSTANTS/options';

import GaleriaScreen from './../screens/camara/GaleriaScreen';
import CamaraScreen from './../screens/camara/CamaraScreen';

/* import { COLORS } from '../constants'; */

let options = optionHeader;
const Stack = createNativeStackNavigator();

const CamaraNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="camara">
                  <Stack.Screen
                        name="camara"
                        component={CamaraScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="camara" />
                              ),
                        }}
                  />
                  <Stack.Screen
                        name="galeria"
                        component={GaleriaScreen}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Galeria" />
                              ),
                        }}
                  />
            </Stack.Navigator>
      );
};

{
      /*       <PlaceStack.Screen
                  name="Detalle"
                  component={PlaceDetailScreen}
                  options={{ title: 'Detalle direccion' }}
            />
            <PlaceStack.Screen
                  name="Nuevo"
                  component={NewPlaceScreen}
                  options={{ title: 'Nueva direccion' }}
            />
            <PlaceStack.Screen
                  name="Map"
                  component={MapScreen}
                  options={{ title: 'Mapa' }}
            /> */
}
{
      /*       </PlaceStack.Navigator> */
}
{
      /* ); */
}

export default CamaraNavigator;
