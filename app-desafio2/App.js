import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { InputItem, List, Modal } from './src/components';
import uuid from 'react-native-uuid';
import { styles } from './src/styles/style.js';
export default function App() {
      const [itemText, setItemText] = useState('');
      const [items, setItems] = useState([]);

      const [modalVisible, setModalVisible] = useState(false);
      const [selectedItem, setSelectedItem] = useState(null);

      const onChangeText = (text) => {
            setItemText(text);
      };

      useEffect(() => {
            console.log('useEffect', 'itemText', itemText, 'ITEMS', items);
      }, []);

      const addItemToState = () => {
            console.log('addItemToState - start SIN JSON', items, itemText);
            console.log(
                  'addItemToState - start CON JSON',
                  JSON.stringify({ items, itemText })
            );
            if (!itemText) {
                  return;
            } else {
                  const newArr = [
                        ...items,
                        { id: uuid.v4(), value: itemText, cantidad: 1 },
                  ];
                  setItems(newArr);
                  setItemText('');
                  console.log('addItemToState - end', 'items', newArr);
            }
      };
      const sumItem = (id) => {
            let item = items.filter((item) => item.id === id);
            let sum = (item[0].cantidad += 1);
            const items1 = items.filter((item) => item.id !== id);
            const newArr = [
                  ...items1,
                  { id: item[0].id, value: item[0].value, cantidad: sum },
            ];
            setItems(newArr);
      };
      const openModal = (item) => {
            setSelectedItem(item);
            setModalVisible(true);
      };
      const restItem = (id) => {
            let item = items.filter((item) => item.id === id);
            let resta;
            const items1 = items.filter((item) => item.id !== id);
            console.log(item[0].cantidad);

            item[0].cantidad <= 0
                  ? (resta = 0)
                  : (resta = item[0].cantidad -= 1);

            const newArr = [
                  ...items1,
                  { id: item[0].id, value: item[0].value, cantidad: resta },
            ];
            setItems(newArr);
      };

      const onCancelModal = () => {
            setModalVisible(!modalVisible);
      };

      const onDeleteModal = (id) => {
            setModalVisible(!modalVisible);
            setItems((oldArry) => oldArry.filter((item) => item.id !== id));
            setSelectedItem(null);
      };

      return (
            <View style={styles.screen}>
                  <Text>Lista de Compras </Text>
                  <InputItem
                        onChangeText={onChangeText}
                        itemText={itemText}
                        addItemToState={addItemToState}
                  />
                  <List
                        items={items}
                        openModal={openModal}
                        sumItem={sumItem}
                        restItem={restItem}
                  />
                  <Modal
                        modalVisible={modalVisible}
                        selectedItem={selectedItem}
                        onCancelModal={onCancelModal}
                        onDeleteModal={onDeleteModal}
                  />
            </View>
      );
}
