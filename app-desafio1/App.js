import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './style.js';

export default function App() {
      return (
            <View style={styles.screen}>
                  <View>
                        <TextInput placeholder="item" style={styles.input} />
                        <Button title="AGREGAR" style={styles.button} />
                  </View>
                  <View></View>
            </View>
      );
}
