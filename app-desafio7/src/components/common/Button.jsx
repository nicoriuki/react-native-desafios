import { Text, Pressable } from 'react-native';
import { styles } from '../../styles/style';

const Button = ({ styleButtonType, onPress, title }) => {
      return (
            <Pressable style={[styles.button]} onPress={onPress}>
                  <Text style={[styles.textButton]}>{title}</Text>
            </Pressable>
      );
};

export default Button;
