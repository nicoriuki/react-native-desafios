import { styles } from '../styles/style';
import { Image, View, Text } from 'react-native';
const Header = ({ title }) => {
      return (
            <View style={styles.containerHeader}>
                  <Text style={styles.textHeader}>{title}</Text>
                  <Image
                        style={styles.imageHeader}
                        source={require('../../assets/agenda.png')}
                  />
            </View>
      );
};

export default Header;
