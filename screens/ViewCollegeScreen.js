import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const ViewCollegeScreen = ( {  route, navigation } ) => {
  const { name, addr, email } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>{JSON.stringify(name)}</Text>
      <Text>{JSON.stringify(addr)}</Text>
      <Text>{JSON.stringify(email)}</Text>
    </View>
  );
}
 
  export default ViewCollegeScreen;

  const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      // backgroundColor: '#fff',
      margin: 10,
      padding: 8,
      color: 'black',
      borderBottomColor:'#728FCE',
      borderBottomWidth:2,
      fontSize: 18,
      fontWeight: '500',
      
    },
    container: {
      flex: 1,
      justifyContent: 'center',
     alignItems: 'center'
    },
    button: {
      marginTop: 20,
      width: 75,
      height: 30,
      fontSize: 30,
      textAlign: 'center',
      // borderRadius: 10,
      borderColor: '#728FCE',
      borderWidth: 2,
      borderRadius: 5,
    // backgroundColor: '#728FCE',
      alignItems: 'center'
    },
    text: {
      color: '#728FCE',
      paddingLeft: 20,
      fontSize: 35
    },
  })