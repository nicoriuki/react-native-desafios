import {
      StyleSheet,
      Text,
      View,
      KeyboardAvoidingView,
      TouchableOpacity,
      TextInput,
      ScrollView,
} from 'react-native';
import { useCallback, useEffect, useReducer, useState } from 'react';
import colors from '../CONSTANTS/colors';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../store/actions/authActions';
import InputRegister from './../components/InputRegister';
import { setUser, storeUser } from '../store/actions/userActions';
import ImageSelector from '../components/galeria/imageSelector';
import { addPhoto } from '../store/actions/photoAction';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
      if (action.type === FORM_INPUT_UPDATE) {
            const inputValues = {
                  ...state.inputValues,
                  [action.input]: action.value,
            };
            const inputValidities = {
                  ...state.inputValidities,
                  [action.input]: action.isValid,
            };
            let formIsValid = true;
            for (const key in inputValidities) {
                  formIsValid = formIsValid && inputValidities[key];
            }
            return {
                  formIsValid,
                  inputValidities,
                  inputValues,
            };
      }
      return state;
};

const RegisterScreen = () => {
      const dispatch = useDispatch();
      const isAuthLoading = useSelector((state) => state.auth.isLoading);
      const [imageValue, setImageValue] = useState('');
      const [loginScreen, setLoginScreen] = useState(false);
      const [formState, dispatchFormState] = useReducer(formReducer, {
            inputValues: {
                  email: '',
                  password: '',
                  nombre: '',
                  telefono: '',
            },
            inputValidities: {
                  email: true,
                  password: true,
            },
            formIsValid: false,
      });
      useEffect(() => {
            console.log(imageValue);
      }, [imageValue]);

      const register = () => {
            let user = {
                  email: formState.inputValues.email,
                  nombre: formState.inputValues.nombre,
                  telefono: formState.inputValues.telefono,
                  photo: imageValue,
            };
            dispatch(
                  signUp(
                        formState.inputValues.email,
                        formState.inputValues.password,
                        formState.inputValues.nombre,
                        formState.inputValues.telefono,
                        imageValue
                  )
            );
            /*     dispatch(storeUser(user)); */
      };
      const login = () => {
            let user = {
                  email: formState.inputValues.email,
            };
            dispatch(
                  signIn(
                        formState.inputValues.email,
                        formState.inputValues.password
                  )
            );
            console.log(formState.inputValues.email);
            dispatch(storeUser(user));
      };
      const onHandleRegister = () => {
            !loginScreen ? register() : login();
      };

      const handleChangedText = useCallback(
            (inputIdentifier, inputValue, inputValidity) => {
                  dispatchFormState({
                        type: FORM_INPUT_UPDATE,
                        value: inputValue,
                        isValid: inputValidity,
                        input: inputIdentifier,
                  });
            },
            [dispatchFormState]
      );
      const onHandleScreen = () => {
            !loginScreen ? setLoginScreen(true) : setLoginScreen(false);
      };
      useEffect(() => {
            console.log(formState.inputValues.email);
            console.log(formState.inputValues.password);
      }, [formState]);
      const savePlaceHandler = () => {
            dispatch(addPhoto(imageValue));
            /*   navigation.navigate('galeria'); */
      };
      return (
            <ScrollView>
                  <KeyboardAvoidingView
                        style={styles.screen}
                        behavior="padding"
                  >
                        <View style={styles.container}>
                              <Text style={styles.title}>REGISTRO</Text>
                              <View style={styles.form}>
                                    <InputRegister
                                          initialValue={
                                                formState.inputValues.email
                                          }
                                          initiallyValid={
                                                formState.inputValidities.email
                                          }
                                          onInputChange={handleChangedText}
                                          id="email"
                                          required
                                          email
                                          minLength={5}
                                          label="Email"
                                          errorText="Por favor, ingrese un email válido"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                    />
                                    <InputRegister
                                          initialValue={
                                                formState.inputValues.password
                                          }
                                          initiallyValid={
                                                formState.inputValidities
                                                      .password
                                          }
                                          onInputChange={handleChangedText}
                                          id="password"
                                          required
                                          minLength={5}
                                          label="Password"
                                          errorText="Por favor, ingrese un password válido"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          secureTextEntry
                                    />
                                    {!loginScreen && (
                                          <InputRegister
                                                initialValue={
                                                      formState.inputValues
                                                            .nombre
                                                }
                                                onInputChange={
                                                      handleChangedText
                                                }
                                                id="nombre"
                                                required
                                                minLength={5}
                                                label="Nombre"
                                                errorText="Por favor, ingrese un nombre válido"
                                                autoCapitalize="none"
                                                keyboardType="email-address"
                                                secureTextEntry
                                          />
                                    )}
                                    {!loginScreen && (
                                          <InputRegister
                                                initialValue={
                                                      formState.inputValues
                                                            .telefono
                                                }
                                                onInputChange={
                                                      handleChangedText
                                                }
                                                id="telefono"
                                                required
                                                minLength={5}
                                                label="Telefono"
                                                errorText="Por favor, ingrese un Telefono válido"
                                                autoCapitalize="none"
                                                keyboardType="email-address"
                                                secureTextEntry
                                          />
                                    )}
                                    {!loginScreen && (
                                          <ImageSelector
                                                onImage={(image) =>
                                                      setImageValue(image)
                                                }
                                          />
                                    )}
                                    <TouchableOpacity
                                          style={styles.loginButton}
                                          onPress={onHandleRegister}
                                    >
                                          <Text style={styles.loginButtonText}>
                                                {isAuthLoading
                                                      ? 'Loading...'
                                                      : !loginScreen
                                                      ? 'Registrarse'
                                                      : 'Iniciar Sesion'}
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                              <View style={styles.prompt}>
                                    <Text style={styles.promptMessage}>
                                          {loginScreen
                                                ? 'No tenes un usuario '
                                                : '¿Ya tienes una cuenta?'}
                                    </Text>
                                    <TouchableOpacity onPress={onHandleScreen}>
                                          <Text style={styles.promptButton}>
                                                {loginScreen
                                                      ? 'Registrarse'
                                                      : 'Iniciar sesión?'}
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </ScrollView>
      );
};

export default RegisterScreen;

const styles = StyleSheet.create({
      screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      title: {
            fontSize: 24,
            /*    fontFamily: 'OpenSans_700Bold', */
            marginBottom: 12,
            textAlign: 'center',
      },
      container: {
            width: '80%',
            maxWidth: 400,
            padding: 12,
            margin: 12,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#fff',
      },
      form: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'flex-start',
      },
      label: {
            fontSize: 16,
            /*   fontFamily: 'OpenSans_700Bold', */
      },
      textInput: {
            width: '100%',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 12,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      loginButton: {
            width: '100%',
            justifyContent: 'center',
            height: 40,
            backgroundColor: colors.primary,
            marginVertical: 12,
      },
      loginButtonText: {
            fontSize: 18,
            /*         fontFamily: 'OpenSans_700Bold', */
            textAlign: 'center',
            color: '#fff',
      },
      prompt: {
            alignItems: 'center',
      },
      promptMessage: {
            fontSize: 16,
            /*  fontFamily: 'OpenSans_400Regular', */
            color: '#333',
      },
      promptButton: {
            fontSize: 16,
            /*   fontFamily: 'OpenSans_700Bold', */
            color: colors.primary,
      },
      button: {
            backgroundColor: colors.primary,
            marginVertical: 20,
      },
});
