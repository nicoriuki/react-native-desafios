import { View, Button } from 'react-native';
import { styles } from '../../styles/style';

const Home = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <View style={styles.botonHome}>
                        <Button
                              title="Agendar Cita"
                              color="black"
                              onPress={() => navigation.navigate('Form')}
                        />
                  </View>
            </View>
      );
};

export default Home;
