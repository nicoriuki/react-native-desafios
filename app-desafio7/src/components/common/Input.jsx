import { TextInput } from 'react-native';
import { styles } from '../../styles/style';

const Input = ({ style, ...otherPros }) => {
      return <TextInput style={[styles.inputForm, style]} {...otherPros} />;
};

export default Input;
