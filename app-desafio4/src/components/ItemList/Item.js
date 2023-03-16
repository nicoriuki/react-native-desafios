import { Text, Pressable, Image, View } from 'react-native';
import { styles } from '../../styles/style';
const Item = ({ itemData }) => {
      return (
            <View style={styles.itemContainer}>
                  <Text style={styles.item}>
                        {itemData.item.nombre} , {itemData.item.fecha}{' '}
                  </Text>
            </View>
      );
};

export default Item;
