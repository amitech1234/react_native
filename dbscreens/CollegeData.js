import React from 'react'
import {
        View,
        Text,
        FlatList,
        StyleSheet,
        ActivityIndicator
     } from 'react-native';

class CollegeData extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            isloading: true,
            dataSource: null,
        }
    }
    async componentDidMount()
    {
        const response = await fetch('http://127.0.0.1:8000/api/cldis');
        const responseJson = await response.json();
        this.setState({
            isloading: false,
            dataSource: responseJson.college,
        });
    }
   render(){

        if(this.state.isloading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                    <Text>Loading</Text>
                </View>
            )
        } else {

            let college = this.state.dataSource.map((val, key) => {
                return <View key={key} style={styles.item}>
                    <Text>{val.c_name}</Text>
                </View>
            });        

            return(
                <View style={styles.container}>
                    {college}
                </View>
            );
        }
   }
}
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

export default CollegeData;