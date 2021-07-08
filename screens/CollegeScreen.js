
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList, 
    Text, 
    View, 
    StyleSheet,
    Image, 
    TouchableOpacity,
    TextInput
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'


const CollegeScreen = ( { navigation } ) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.8:8000/api/viewclgimage/')
      .then((response) => response.json())
      .then((json) => { setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View>
      <View style={styles.searchView}>
        <TextInput 
          placeholder="Type here.."
          // value={value}
          style={styles.search}
        />
        <View style={styles.searchImgView}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Search')}
          >
            <Icon name="md-search" size={26} />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? 
      <ActivityIndicator 
        size="large" 
        color="#728FCE" 
        style={ styles.container, styles.horizontal }
        /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.img}
                source={{ uri:item.image }}
              />
              <View>
              <TouchableOpacity>
            <Text style={styles.text_header}>{item.c_name}</Text>
            </TouchableOpacity>
            <Text style={styles.text_footer}>{item.caddress}</Text>
            <Text style={styles.text_footer}>{item.cemail_id}</Text>
            </View>
            </View>
          )}
        />
      )}
    </View>
  );
  }

  export default CollegeScreen;

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
        height: 300,
        borderWidth:1,
        borderColor:'#333',
        //borderRadius: 15,
        backgroundColor: '#BCC6CC'
    },
    text_header: {
      marginLeft: 10,
      color: '#728FCE',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
    marginLeft: 10,
    color: '#05375a',
    fontSize: 18,
  },
  img: {
    height: 150,
    width: 389,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
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
  searchImgView: {
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    borderRadius: 8,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 300
  }
})
