import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { optionHeader } from '../CONSTANTS/options';
import List from '../components/dates/DatesList';

let options = optionHeader;
const Stack = createNativeStackNavigator();

const DatesNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="Citas">
                  <Stack.Screen
                        name="Citas"
                        component={List}
                        options={{
                              ...options,
                              headerTitle: (props) => (
                                    <Header {...props} title="Citas" />
                              ),
                        }}
                  />
            </Stack.Navigator>
      );
};

export default DatesNavigator;
