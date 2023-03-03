import { StyleSheet, Text, View, Modal as RNmodal } from 'react-native';
import { styles } from '../styles/style';
import Button from './Button';

const Modal = ({
      modalVisible,
      selectedItem,
      onCancelModal,
      onDeleteModal,
}) => {
      return (
            <RNmodal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
            >
                  <View style={styles.modalMainView}>
                        <View style={styles.modalView}>
                              <Text style={styles.modalTitle}>
                                    Eliminar Item
                              </Text>
                              <Text style={styles.modalText}>
                                    ¿Está seguro que desea eliminar el item{' '}
                                    <Text style={styles.modalBoldText}>
                                          {selectedItem?.value}
                                    </Text>
                                    ?
                              </Text>
                              <View style={styles.modalActions}>
                                    <Button
                                          styleButtonType={styles.buttonCancel}
                                          title="Cancelar"
                                          onPress={onCancelModal}
                                    />
                                    <Button
                                          styleButtonType={styles.buttonDelete}
                                          title="Eliminar"
                                          onPress={() => {
                                                onDeleteModal(selectedItem.id);
                                          }}
                                    />
                              </View>
                        </View>
                  </View>
            </RNmodal>
      );
};

export default Modal;
