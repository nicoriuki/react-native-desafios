import { StyleSheet, Text, Pressable, Image, View } from 'react-native';
import { trash, mas, menos } from '../../../assets/';
import { styles } from '../../styles/style';
const Item = ({ itemData, openModal, sumItem, restItem }) => {
      return (
            <View style={styles.itemContainer}>
                  <Text style={styles.item}>{itemData.item.value}</Text>
                  <Pressable
                        onPress={() => {
                              restItem(itemData.item.id);
                        }}
                  >
                        <Image source={menos} style={styles.sumRest} />
                  </Pressable>
                  <Text style={styles.cont}>{itemData.item.cantidad}</Text>

                  <Pressable
                        onPress={() => {
                              sumItem(itemData.item.id);
                        }}
                  >
                        <Image source={mas} style={styles.sumRest} />
                  </Pressable>
                  <Pressable
                        onPress={() => {
                              openModal(itemData.item);
                        }}
                  >
                        <Image source={trash} style={styles.trash} />
                  </Pressable>
            </View>
      );
};

export default Item;
