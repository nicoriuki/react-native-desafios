import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/style';
import { Image, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
/* import { fetchUser, logOutUser, logUser } from '../../db'; */
/* import { logOut } from './../../store/actions/authActions'; */
const Header = ({ title }) => {
      const dispatch = useDispatch();
      /* const email = useSelector((state) => state.user.list.email); */
      const logOut = async (email) => {
            console.log(email);
            /*      await logUser(email, 0);
            dispatch(logOut());
            const dbResult = await fetchUser();
            console.log('Db result: ', dbResult.rows._array); */
      };
      return (
            <View style={styles.containerHeader}>
                  <Text style={styles.textHeader}>{title}</Text>
                  <Image
                        style={styles.imageHeader}
                        source={require('../../../assets/agenda.png')}
                  />
                  <View style={styles.logout}>
                        <Ionicons
                              name="md-create"
                              style={styles.imageLogOut}
                              size={24}
                              color={'white'}
                              onPress={() => logOut(email)}
                        />
                  </View>
            </View>
      );
};

export default Header;
