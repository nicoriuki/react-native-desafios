import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, List } from '../components';

const Home = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <View style={styles.boton}>
                        <Button
                              title="Agendar Cita"
                              color="black"
                              onPress={() => navigation.navigate('Form')}
                        />
                  </View>
                  <List />
            </View>
      );
};

export default Home;
const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
      boton: {
            alignSelf: 'center',
            marginTop: 30,
            width: 250,
      },
});
