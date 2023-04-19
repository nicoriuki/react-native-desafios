import { FlatList } from 'react-native';
import Item from './DateItem';
import { useSelector } from 'react-redux';

const List = () => {
      const dates = useSelector((state) => state.dates);
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
