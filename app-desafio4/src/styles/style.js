import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
      //button
      button: {
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: 'black',
      },
      textButton: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
      },
      //Card
      cardContainer: {
            marginTop: 10,
            marginBottom: 5,
            shadowColor: 'black',
            shadowOffset: {
                  width: 5,
                  height: 10,
            },
            shadowRadius: 6,
            shadowOpacity: 0.5,
            elevation: 7,
            borderRadius: 13,
            backgroundColor: 'white',
      },
      //Header
      containerHeader: {
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'black',

            alignItems: 'center',
            justifyContent: 'flex-start',
      },
      textHeader: {
            fontFamily: 'AbrilFatface',
            fontSize: 25,
            color: 'white',
      },
      imageHeader: {
            width: 40,
            height: 40,
            marginStart: 20,
      },
      //input
      inputForm: {
            height: 30,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginVertical: 10,
      },

      //item
      itemContainer: {
            borderWidth: 1,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',

            margin: 10,
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#ccc',
            shadowColor: 'black',
            shadowOffset: {
                  width: 5,
                  height: 10,
            },
            shadowRadius: 6,
            shadowOpacity: 0.5,
            elevation: 7,
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

      //Modal
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

      modalButtonCancel: {
            backgroundColor: '#2196F3',
      },
      modalButtonDelete: {
            backgroundColor: '#f44336',
      },
});
