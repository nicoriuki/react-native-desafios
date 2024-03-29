import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';

/* import { COLORS } from '../constants'; */

const ImageSelector = ({ onImage }) => {
      const [pickedUri, setPickedUri] = useState();
      const photos = useSelector((state) => state.photo);
      console.log(photos);
      const VerifyPermissions = async () => {
            const { status } =
                  await ImagePicker.requestCameraPermissionsAsync();
            console.log(status);
            if (status !== 'granted') {
                  Alert.alert('Permisos insuficientes');
                  return false;
            }
            return true;
      };

      const handlerTakeImage = async () => {
            const isCameraOk = await VerifyPermissions();
            if (!isCameraOk) return;

            const image = await ImagePicker.launchCameraAsync({
                  allowsEditing: true,
                  aspect: [16, 16],
                  quality: 1,
            });
            console.log(image.assets);
            setPickedUri(image.assets[0].uri);
            onImage(image.assets[0].uri);
      };

      return (
            <View style={styles.container}>
                  <View style={styles.preview}>
                        {!pickedUri ? (
                              <Text>No hay imagen seleccionada...</Text>
                        ) : (
                              <Image
                                    style={styles.image}
                                    source={{ uri: pickedUri }}
                              />
                        )}
                  </View>
                  <Button
                        title="Tomar foto"
                        color="pink"
                        onPress={handlerTakeImage}
                  />
            </View>
      );
};

export default ImageSelector;

const styles = StyleSheet.create({
      container: {
            marginBottom: 10,
      },
      preview: {
            width: '100%',
            height: 100,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'pink',
            borderWith: 1,
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      /* image: {
            width: '100%',
            height: '100%',
      }, */
});
