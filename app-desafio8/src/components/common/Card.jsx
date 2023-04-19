import { View } from 'react-native';

import { styles } from '../../styles/style';
const Card = ({ style, children }) => {
      return <View style={[styles.cardContainer, style]}>{children}</View>;
};

export default Card;
