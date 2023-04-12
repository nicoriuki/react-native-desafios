import React from 'react';
import {
      View,
      Text,
      StyleSheet,
      ScrollView,
      TextInput,
      Button,
} from 'react-native';
/* import { COLORS } from '../constants'; */
import { useDispatch } from 'react-redux';

import ImageSelector from './../../components/galeria/imageSelector';
import { ADD_PHOTO } from './../../store/actions/photoAction';

const CamaraScreen = ({ navigation }) => {
      const dispatch = useDispatch();
      const [titleValue, setTitleValue] = React.useState('');
      const [imageValue, setImageValue] = React.useState('');

      const titleChangeHandler = (text) => {
            setTitleValue(text);
      };

      const savePlaceHandler = () => {
            dispatch(addPhoto(titleValue, imageValue));
            navigation.navigate('galeria');
      };

      return (
            <ScrollView>
                  <View style={styles.container}>
                        <Text style={styles.label}>Titulo</Text>
                        <TextInput
                              style={styles.input}
                              onChangeText={titleChangeHandler}
                        />
                        <ImageSelector
                              onImage={(image) => setImageValue(image)}
                        />
                        <Button
                              title="Guardar"
                              color="green"
                              onPress={savePlaceHandler}
                        />
                  </View>
            </ScrollView>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            margin: 30,
      },
      label: {
            fontSize: 18,
            marginBottom: 16,
      },
      input: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 2,
            paddingVertical: 4,
      },
});

export default CamaraScreen;
