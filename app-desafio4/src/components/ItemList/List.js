import { FlatList } from 'react-native';
import React, { useContext } from 'react';
import Item from './Item';
import { myContext } from '../DateContext';

const List = () => {
      const { dates } = useContext(myContext);
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
