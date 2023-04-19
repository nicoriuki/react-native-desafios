import { View, Button } from 'react-native';
import { styles } from '../styles/style';
import List from '../../components/dates/DatesList';
styles;
const DatesScreen = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <List />
            </View>
      );
};

export default DatesScreen;
