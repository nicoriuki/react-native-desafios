import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-native-modern-datepicker';
import uuid from 'react-native-uuid';
import { ConfirmDate } from '../../components';
import { setTime, setId, delDate } from '../../store/actions/dateActions';
import { newDate } from '../../store/actions/datesActions';

const SelectDate = ({ navigation }) => {
      const dates = useSelector((state) => state.date);
      const dispatch = useDispatch();
      const [selectedDate, setSelectedDate] = useState('');
      const [modalVisible, setModalVisible] = useState(false);
      const selectFecha = (date) => {
            dispatch(setTime(date));
      };
      const setDates = () => {
            dispatch(newDate(dates));
            dispatch(delDate());
            navigation.navigate('Home');
      };
      const onCancelDate = () => {
            dispatch(delDate());
            navigation.navigate('Home');
      };
      useEffect(() => {
            selectFecha(selectedDate);
      }, [selectedDate]);
      const mostrar = () => {
            dispatch(setId(uuid.v4()));
            setModalVisible(true);
      };

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
                        setDates={setDates}
                        modalVisible={modalVisible}
                        onCancelDate={onCancelDate}
                        date={dates}
                  />
            </View>
      );
};

export default SelectDate;
