import { useContext, useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { ConfirmDate } from '../components';
import uuid from 'react-native-uuid';
import { myContext } from '../components/DateContext';
const SelectDate = ({ navigation }) => {
      const {
            dateForm,
            setDateForm,
            onCancelDate,
            onConfirmDate,
            confirmSelectDateScreen,
      } = useContext(myContext);
      const [selectedDate, setSelectedDate] = useState('');
      const [modalVisible, setModalVisible] = useState(false);
      const selectFecha = (date) => {
            setDateForm({
                  ...dateForm,
                  fecha: date,
            });
      };

      useEffect(() => {
            confirmSelectDateScreen && navigation.navigate('Home');
      }, [confirmSelectDateScreen]);
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
                  <DatePicker
                        onSelectedChange={(date) => setSelectedDate(date)}
                  />
                  <Button
                        title="Confirmar Cita"
                        onPress={mostrar}
                        color="black"
                  />
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
