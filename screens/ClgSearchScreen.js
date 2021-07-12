import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput
} from 'react-native';
import filter from 'lodash.filter';

const API_ENDPOINT = 'http://192.168.1.8:8000/api/searchclg/'

const ClgSearchScreen = ( { navigation } ) => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  
    // state variables defined

    useEffect(() => {
      setIsLoading(true);
  
      fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(results => {
          setData(results);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, []);

    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      );
    }
  
    if (error) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18}}>
            Error fetching data... Check your network connection!
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Search Colleges and Cources Here</Text>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.searchView}>
              <View style={styles.metaInfo}>
                <Text style={styles.title}>{`${item.c_name}`}</Text>
                <Text>{`${item.cemail_id}`}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );

    function renderHeader() {
      return (
        <View
          style={styles.searchView}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={styles.search}
          />
        </View>
      );
    }
}
export default ClgSearchScreen;

const handleSearch = text => {
  const formattedQuery = text.toLowerCase();
  const filteredData = filter(fullData, user => {
    return contains(user, formattedQuery);
  });
  setData(filteredData);
  setQuery(text);
};

const contains = ({ name, email }, query) => {
  const { first, last } = name;

  if (first.includes(query) || last.includes(query) || email.includes(query)) {
    return true;
  }

  return false;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  searchView: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: '#728FCE',
    height: 50
  },
  search: {
    paddingHorizontal: 20,
    width: 350
  },
  title: {
    fontSize: 18,
    width: 200,
    // padding: 10
  }
});

