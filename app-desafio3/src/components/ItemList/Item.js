import { Text, Pressable, Image, View } from 'react-native';
import { styles } from '../../styles/style';
const Item = ({ itemData }) => {
      console.log('nombre', itemData.nombre);
      return (
            <View style={styles.itemContainer}>
                  <Text style={styles.item}>{itemData.nombre}</Text>
            </View>
      );
};

export default Item;
