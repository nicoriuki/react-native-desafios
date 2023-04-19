import {
      View,
      Text,
      StyleSheet,
      ScrollView,
      TextInput,
      Button,
      Image,
} from 'react-native';
/* import { COLORS } from '../constants'; */
import { useSelector } from 'react-redux';

const PerfilScreen = ({ navigation }) => {
      const user = useSelector((state) => state.user.list);

      console.log(user[0].email);

      return (
            <ScrollView>
                  <View style={styles.container}>
                        <Text style={styles.label}>{user[0].nombre}</Text>
                        <Text style={styles.label}>{user[0].email}</Text>
                        <Text style={styles.label}>{user[0].telefono}</Text>
                        <Image
                              style={styles.image}
                              source={{ uri: user[0].photo }}
                        />
                  </View>
            </ScrollView>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            margin: 30,
      },
      label: {
            fontSize: 18,
            marginBottom: 16,
      },
      input: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 2,
            paddingVertical: 4,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
});

export default PerfilScreen;
