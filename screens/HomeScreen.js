import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native';

const HomeScreen = ( { navigation } ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
       <Text>This is home</Text>
      </View>
    );
  }

  export default HomeScreen;