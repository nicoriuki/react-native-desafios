import { TextInput, View, Button } from 'react-native';
import { styles } from '../styles/style';

const NewItemHeader = ({ onChangeText, itemText, addItemToState }) => {
      return (
            <View style={styles.addItemInputContainer}>
                  <TextInput
                        placeholder="Ingrese un producto"
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={itemText}
                  />
                  <Button title="Agregar" onPress={addItemToState} />
            </View>
      );
};

export default NewItemHeader;
