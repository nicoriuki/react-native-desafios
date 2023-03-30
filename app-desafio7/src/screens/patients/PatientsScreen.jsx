import { View, Button, Text } from 'react-native';
import { styles } from '../../styles/style';
import { useSelector } from 'react-redux';
import PatientsList from '../../components/pacientes/PatientsList';

const PatientsScreen = ({ navigation }) => {
      const patients = useSelector((state) => state.patients);
      console.log(patients);
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
