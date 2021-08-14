import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { Component } from 'react'
import {
        View,
        Text,
        FlatList,
        StyleSheet,
        ActivityIndicator,
        SafeAreaView,
        Image,
     } from 'react-native';


class CompanyData extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSourse: []
        }
    }

    renderItemv= ({ item }) => {
        return(
            <View>
                {/* <Image 
                source={{ uri:  item}}
                /> */}
                <Text>
                    { item.c_name}
                </Text>
                <Text>
                    { item.clocation}
                </Text>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://192.168.1.8:8000/api/Collegesshow/'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.SsetState({
                dataSourse: responseJson.
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSourse}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}

export default CompanyData;

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