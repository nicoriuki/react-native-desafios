import { FlatList } from 'react-native';
import Item from './Patient';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPatient } from '../../store/actions/patientsActions';

const PatientsList = () => {
      const dispatch = useDispatch();
      const patients = useSelector((state) => state.patients.list);
      useEffect(() => {
            dispatch(getPatient());
      }, []);

      useEffect(() => {
            console.log('aca', patients);
      }, [patients]);
      return (
            <FlatList
                  data={patients}
                  renderItem={(itemData) => {
                        return <Item itemData={itemData} />;
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default PatientsList;
