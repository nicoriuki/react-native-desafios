import { useEffect, useState } from 'react';
import {
      StyleSheet,
      Text,
      TextInput,
      View,
      Button,
      TouchableWithoutFeedback,
      Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const FormScreen = ({ confirmSelectDateScreen, dateForm, setDateForm }) => {
      const [dates, setDates] = useState();

      const [confirmedNombre, setConfirmedNombre] = useState(false);
      const [confirmedEmail, setConfirmedEmail] = useState(false);
      const [confimedDate, setConfimedDate] = useState(false);
      const confirmedInputNombre = () => {
            setConfirmedNombre(true);
      };
      const setName = (text) => {
            setDateForm({
                  ...dateForm,
                  nombre: text,
            });
      };
      const setEmail = (text) => {
            setDateForm({
                  ...dateForm,
                  email: text,
            });
      };
      const confirmedInputEmail = () => {
            setConfirmedEmail(true);
      };
      const confirmedInputDate = () => {
            setConfimedDate(true);
      };

      return (
            <View style={styles.container}>
                  <Card style={styles.inputContainer}>
                        <Text style={styles.inputDectiptionText}>
                              Escriba su Nombre
                        </Text>
                        <Input
                              style={styles.input}
                              blurOnSubmit
                              autoCapitalize="none"
                              autoCorrect={false}
                              onChangeText={setName}
                        />
                        <View style={styles.buttonsContainer}>
                              <View style={styles.button}>
                                    <Button
                                          title="Aceptar"
                                          onPress={() => confirmedInputNombre()}
                                    />
                              </View>
                        </View>
                  </Card>

                  {confirmedNombre && (
                        <Card style={styles.inputContainer}>
                              <Text style={styles.inputDectiptionText}>
                                    Escriba su Email
                              </Text>
                              <Input
                                    style={styles.input}
                                    blurOnSubmit
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={setEmail}
                              />
                              <View style={styles.buttonsContainer}>
                                    <View style={styles.button}>
                                          <Button
                                                title="Aceptar"
                                                onPress={() =>
                                                      confirmedInputEmail()
                                                }
                                          />
                                    </View>
                              </View>
                        </Card>
                  )}

                  {confirmedEmail && (
                        <Button
                              onPress={() => confirmSelectDateScreen()}
                              title="Buscar Horario"
                        />
                  )}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 10,
            alignItems: 'center',
      },
      title: {
            fontSize: 20,
            marginVertical: 10,
            fontFamily: 'open-sans-bold',
      },
      inputContainer: {
            width: 300,
            maxWidth: '80%',
            padding: 20,
            alignItems: 'center',
      },
      inputDectiptionText: {
            textAlign: 'center',
      },
      input: {
            width: 100,
            textAlign: 'center',
      },
      buttonsContainer: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 15,
      },
      button: {
            width: 100,
      },
      selectedNumberContainer: {
            marginTop: 20,
            width: 200,
            maxWidth: '80%',
            padding: 10,
            alignItems: 'center',
      },
});
export default FormScreen;
