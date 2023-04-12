import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PhotoItem from './../../components/galeria/Galeria';

const GaleriaScreen = ({ navigation }) => {
      const photos = useSelector((state) => state.photo);
      const renderPlaceItem = (data) => (
            <PhotoItem title="hola" image={data.item.image} />
      );

      return (
            <FlatList
                  style={{ flex: 1 }}
                  data={photos.photos}
                  renderItem={renderPlaceItem}
                  keyExtractor={(item) => item.id}
            />
      );
};

export default GaleriaScreen;
