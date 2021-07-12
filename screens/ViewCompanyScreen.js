import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const ViewCompanyScreen = ( {  route, navigation } ) => {
  const { name, addr, email } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text>{JSON.stringify(name)}</Text>
        <Text>{JSON.stringify(addr)}</Text>
        <Text>{JSON.stringify(email)}</Text>
      </View>
    );
  }

  export default ViewCompanyScreen;

 