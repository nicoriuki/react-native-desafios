import { useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setName } from '../actions/dateActions';
import { Button, Card, Input } from '../components/';

import { styles } from '../styles/style';

const FormScreen = ({ navigation }) => {
      const dispatch = useDispatch();

      const [confirmedNombre, setConfirmedNombre] = useState(false);
      const [confirmedEmail, setConfirmedEmail] = useState(false);

      const confirmedInputNombre = () => {
            setConfirmedNombre(true);
      };
      const setNombre = (text) => {
            dispatch(setName(text));
      };
      const setEmailForm = (text) => {
            dispatch(setEmail(text));
      };
      const confirmedInputEmail = () => {
            setConfirmedEmail(true);
            Keyboard.dismiss();
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
                                    onChangeText={setEmailForm}
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

export default FormScreen;
