import CompanyData from '../databasescreens/CompanyData';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const CompanyScreen = ( { navigation } ) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.76.93:8000/api/Companiesshow/')
      .then((response) => response.json())
      .then((json) => { setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 150 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.comp_name}, {item.caddress}</Text>
          )}
        />
      )}
    </View>
  );
  }
  export default CompanyScreen;