import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { ConfirmDate } from '../components';
import uuid from 'react-native-uuid';
const SelectDate = ({ dateForm, setDateForm, onCancelDate, onConfirmDate }) => {
      const [selectedDate, setSelectedDate] = useState('');
      const [modalVisible, setModalVisible] = useState(false);
      const selectFecha = (date) => {
            setDateForm({
                  ...dateForm,
                  fecha: date,
            });
      };
      /*   const onCancelModal = () => {
            setModalVisible(!modalVisible);
      }; */
      useEffect(() => {
            console.log(selectedDate);
            selectFecha(selectedDate);
      }, [selectedDate]);
      const mostrar = () => {
            setDateForm({
                  ...dateForm,
                  id: uuid.v4(),
            });
            setModalVisible(true);
      };
      useEffect(() => {
            console.log(modalVisible);
      }, [modalVisible]);

      return (
            <View>
                  <Text>SelectDate 1</Text>
                  <DatePicker
                        onSelectedChange={(date) => setSelectedDate(date)}
                  />
                  <Button title="Confirmar Cita" onPress={mostrar} />
                  <ConfirmDate
                        modalVisible={modalVisible}
                        onConfirmDate={onConfirmDate}
                        onCancelDate={onCancelDate}
                        date={dateForm}
                  />
            </View>
      );
};

export default SelectDate;
