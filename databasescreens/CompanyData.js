import React from 'react'
import {
        View,
        Text,
        FlatList,
        StyleSheet,
        ActivityIndicator
     } from 'react-native';

class CompanyData extends React.Component {
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
        const url = ' http://192.168.1.8:8000/api/cldis/'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) =>{

            this.setState({
                dataSource: responseJson.response,
                isloading: false,
            })
        })
        .catch((error) => {
            alert("Error connection" +error);
        })
        // const responseJson = await response.json();   
    }
   render(){

        if(this.state.isloading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else {

            let company = this.state.dataSource.map((val, key) => {
                return <View key={key} style={styles.item}>
                    <Text>{val.c_name}</Text>
                </View>
            });        

            return(
                <View style={styles.container}>
                    {company}
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

export default CompanyData;