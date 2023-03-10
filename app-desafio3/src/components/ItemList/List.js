import { FlatList } from 'react-native';
import React from 'react';
import Item from './Item';

const List = ({ dates }) => {
      return (
            <FlatList
                  data={dates}
                  renderItem={(itemData) => {
                        return <Item itemData={itemData} />;
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default List;
