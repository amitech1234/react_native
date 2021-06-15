//import CompanyData from '../databasescreens/CompanyData';
import React, { useEffect, useState } from 'react';
import {
   ActivityIndicator,
    FlatList,
     Text,
      View,
      StyleSheet,
      Image,
      TouchableOpacity
     } from 'react-native';

const CompanyScreen = ( { navigation } ) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.8:8000/api/Companiesshow/')
      .then((response) => response.json())
      .then((json) => { setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {/* <Image
                style={styles.img}
                source={require('../assets/fyf.jpg')}
              /> */}
              <TouchableOpacity>
                <Text style={styles.text_header}>{item.comp_name}</Text>
              </TouchableOpacity>
            <Text style={styles.text_footer}>{item.caddress}</Text>
            <Text style={styles.text_footer}>{item.cemail}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
  }
  export default CompanyScreen;

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex:1,
        alignSelf: 'stretch',
        margin: 10,
        //height: 150,
        borderWidth:1,
        borderColor:'#728FCE',
        borderRadius: 15,
    },
    text_header: {
      marginLeft: 155,
      color: '#728FCE',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
    marginLeft: 155,
    color: '#05375a',
    fontSize: 18,
  },
  img: {
    height: 147,
    width: 147,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  }
})