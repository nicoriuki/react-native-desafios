import { FlatList } from 'react-native';
import React from 'react';
import Item from './Item';

const List = ({ items, openModal, sumItem, restItem }) => {
      return (
            <FlatList
                  data={items}
                  renderItem={(itemData) => {
                        return (
                              <Item
                                    itemData={itemData}
                                    openModal={openModal}
                                    sumItem={sumItem}
                                    restItem={restItem}
                              />
                        );
                  }}
                  keyExtractor={(item) => item.id.toString()}
            />
      );
};

export default List;
