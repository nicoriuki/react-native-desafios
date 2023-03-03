import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
      screen: {
            marginTop: 20,
            padding: 30,
            flex: 1,
            backgroundColor: '#fff',
      },
      button: {
            borderRadius: 20,
            padding: 10,
            marginHorizontal: 10,
      },
      addItemInputContainer: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      },
      input: {
            width: 200,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
      },
      itemContainer: {
            borderWidth: 1,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',

            margin: 10,
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#ccc',
      },
      item: {
            padding: 10,
      },
      cont: {
            padding: 10,
      },
      trash: {
            padding: 10,
            marginTop: 5,
            width: 30,
            height: 30,
      },
      sumRest: {
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
      },
      modalMainView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
      },
      modalTitle: {
            padding: 10,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      modalText: {
            marginBottom: 15,
            textAlign: 'center',
      },
      modalBoldText: {
            fontWeight: 'bold',
            textDecorationLine: 'underline',
      },
      modalActions: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },

      buttonCancel: {
            backgroundColor: '#2196F3',
      },
      buttonDelete: {
            backgroundColor: '#f44336',
      },
});
