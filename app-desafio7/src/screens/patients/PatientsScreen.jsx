import { View, Button, Text } from 'react-native';
import { styles } from '../../styles/style';
import { useDispatch, useSelector } from 'react-redux';
import PatientsList from '../../components/pacientes/PatientsList';
import { getPatient } from '../../store/actions/patientsActions';
import { useEffect } from 'react';

const PatientsScreen = ({ navigation }) => {
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getPatient());
      }, [patients]);

      const patients = useSelector((state) => state.patients);
      return (
            <View style={styles.container}>
                  <View style={styles.botonHome}>
                        <Button
                              title="Agregar paciente"
                              color="black"
                              onPress={() =>
                                    navigation.navigate('nuevoPaciente')
                              }
                        />
                  </View>
                  <PatientsList />
            </View>
      );
};

export default PatientsScreen;
