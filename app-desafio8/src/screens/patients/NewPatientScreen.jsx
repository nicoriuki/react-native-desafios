import { View, Text } from 'react-native';
import { styles } from '../../styles/style';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Card } from './../../components';
import { useState, useEffect } from 'react';
import { getPatient, setPatients } from '../../store/actions/patientsActions';

let patientInitialState = {
      nombre: '',
      email: '',
      telefono: '',
      user: '',
};
const NewPatientScreen = ({ navigation }) => {
      const patients = useSelector((state) => state.patients);
      const [patient, setPatient] = useState(patientInitialState);
      const [confirmedNombre, setConfirmedNombre] = useState(false);

      /*  useEffect(() => {
            console.log(patient);
      }, [patient]); */

      const dispatch = useDispatch();
      const setNombre = (text) => {
            setPatient({ ...patient, nombre: text });
      };
      const setEmail = (text) => {
            setPatient({ ...patient, email: text });
      };
      const setTelefono = (text) => {
            setPatient({ ...patient, telefono: text });
      };
      const confirmedPatient = () => {
            dispatch(setPatients(patient));
            setPatient(patientInitialState);
            navigation.navigate('Pacientes');
      };

      return (
            <View style={styles.container}>
                  <Card style={styles.inputContainer}>
                        <Text style={styles.inputDectiptionText}>
                              Escriba el Nombre
                        </Text>
                        <Input
                              style={styles.input}
                              blurOnSubmit
                              autoCapitalize="none"
                              autoCorrect={false}
                              onChangeText={setNombre}
                        />
                        <Text style={styles.inputDectiptionText}>
                              Escriba el Email
                        </Text>
                        <Input
                              style={styles.input}
                              blurOnSubmit
                              autoCapitalize="none"
                              autoCorrect={false}
                              onChangeText={setEmail}
                        />
                        <Text style={styles.inputDectiptionText}>
                              Escriba el Telefono
                        </Text>
                        <Input
                              style={styles.input}
                              blurOnSubmit
                              autoCapitalize="none"
                              autoCorrect={false}
                              onChangeText={setTelefono}
                        />
                        <View style={styles.buttonsContainer}>
                              <Button
                                    title="Aceptar"
                                    onPress={() => confirmedPatient()}
                              />
                        </View>
                  </Card>
            </View>
      );
};

export default NewPatientScreen;
