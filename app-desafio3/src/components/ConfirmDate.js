import { Text, View, Modal as RNmodal } from 'react-native';
import { styles } from '../styles/style';
import Button from './Button';

const ConfirmDate = ({ modalVisible, onConfirmDate, onCancelDate, date }) => {
      return (
            <RNmodal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
            >
                  <View style={styles.modalMainView}>
                        <View style={styles.modalView}>
                              <Text style={styles.modalTitle}>Confirmar</Text>
                              <Text style={styles.modalText}>
                                    ¿Está seguro que desea confirmar la cita?
                                    {date.nombre}
                              </Text>
                              <View style={styles.modalActions}>
                                    <Button
                                          styleButtonType={styles.buttonCancel}
                                          title="Confirmar"
                                          onPress={onConfirmDate}
                                    />
                                    <Button
                                          styleButtonType={styles.buttonCancel}
                                          title="Cancelar"
                                          onPress={onCancelDate}
                                    />
                              </View>
                        </View>
                  </View>
            </RNmodal>
      );
};

export default ConfirmDate;
