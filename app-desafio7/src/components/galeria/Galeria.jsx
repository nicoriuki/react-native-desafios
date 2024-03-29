import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

/* import { COLORS } from '../constants'; */

const PhotoItem = ({ title, image }) => {
      return (
            <TouchableOpacity style={styles.placeItem}>
                  <Image style={styles.image} source={{ uri: image }} />
                  <View style={styles.info}>
                        <Text style={styles.title}>{title}</Text>
                  </View>
            </TouchableOpacity>
      );
};

export default PhotoItem;

const styles = StyleSheet.create({
      placeItem: {
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
      },
      image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'blue',
      },
      info: {
            marginLeft: 25,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
      },
      title: {
            color: 'red',
            fontSize: 18,
            marginBottom: 6,
      },
      address: {
            color: '#777',
            fontSize: 16,
      },
});
