import { useContext, useEffect, useState } from 'react';
import {
      StyleSheet,
      Text,
      TextInput,
      View,
      TouchableWithoutFeedback,
      Keyboard,
} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import { myContext } from '../components/DateContext';
import Input from '../components/Input';

const FormScreen = ({ navigation }) => {
      const { setDateForm, dateForm, setConfirmSelectDateScreen } =
            useContext(myContext);

      const [confirmedNombre, setConfirmedNombre] = useState(false);
      const [confirmedEmail, setConfirmedEmail] = useState(false);

      const confirmedInputNombre = () => {
            setConfirmedNombre(true);
      };
      const setName = (text) => {
            setConfirmSelectDateScreen(false);
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
                              onChangeText={setName}
                        />
                        <View style={styles.buttonsContainer}>
                              <Button
                                    title="Aceptar"
                                    onPress={() => confirmedInputNombre()}
                              />
                        </View>
                  </Card>

                  {confirmedNombre && (
                        <Card style={styles.inputContainer}>
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
                              <View style={styles.buttonsContainer}>
                                    <Button
                                          title="Aceptar"
                                          onPress={() => confirmedInputEmail()}
                                    />
                              </View>
                        </Card>
                  )}

                  {confirmedEmail && (
                        <View style={styles.buttonsContainer}>
                              <Button
                                    onPress={() =>
                                          navigation.navigate('Select')
                                    }
                                    title="Buscar Horario"
                              />
                        </View>
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
            marginTop: 10,
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
