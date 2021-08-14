import React from 'react'
import {
        View,
        Text,
        FlatList,
        StyleSheet,
        ActivityIndicator
     } from 'react-native';

class CollegeData extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isloading: true,
            dataSource: null,
        }
    }
    async componentDidMount()
    {
     try {
        const response = await fetch('https://facebook.github.io/react-native/movies.json');
        const responseJson = await response.json();
        // console.log(json)
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });
      } catch (error) {
        console.error(error);
      }
    }
    render() {
    if(this.state.isloading){
                  return(
                      <View style={styles.container}>
                          <ActivityIndicator/>
                          <Text>lul</Text>
                      </View>
                  )
              } else {
      
                  let movies = this.state.dataSource.map((val, key) => {
                      return <View key={key} style={styles.item}>
                          <Text>{val.title}</Text>
                      </View>
                  });        
      
                  return(
                      <View style={styles.container}>
                          {movies}
                      </View>
                  );
              }
         }
     }
export default CollegeData;

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
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        //borderBottomWidth: 1,
        borderColor:'#728FCE',
        borderRadius: 15,
        //borderBottomColor: '#728FCE',
    }
})