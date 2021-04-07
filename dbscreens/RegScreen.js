import React, { Component } from 'react';
import {
  StyleSheet,
  Text, Image,
  View, TouchableOpacity, Vibration, TextInput,
} from 'react-native';

class Registration extends React.Component {
 constructor()
  {
    super()
    this.state={
      name:'',
      email:'',
      password:'',
    }
  }

  updateValue(text,field){

    if(field=='name')
    {
      this.setState({
        name:text,
      })
    }
    else if(field=='email')
    {
      this.setState({
        email:text,
      })
    }
    else if(field=='password')
    {
      this.setState({
        password:text,
      })
    }

  }
  submit()
  {
    let user={}
    user.name=this.state.name,
    user.email=this.state.email,
    user.password=this.state.password
    console.warn(user);

    fetch('http://192.168.1.9:8000/api/register', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(user => {
      console.log('Success:', user);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={ styles.text}>
                    Welcome Register to continue
                  </Text>
        <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text)=>this.updateValue(text,'name')}
        />

        <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text)=>this.updateValue(text,'email')}
        />

        <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(text)=>this.updateValue(text,'password')}
        />

        <TouchableOpacity
        onPress={()=>this.submit()}
        style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    // backgroundColor: '#fff',
    margin: 10,
    padding: 8,
    color: 'black',
    borderBottomColor:'#728FCE',
    borderBottomWidth:2,
    fontSize: 18,
    fontWeight: '500',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
   alignItems: 'center'
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#728FCE",
    borderColor: '#728FCE',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  text: {
    color: '#728FCE',
    paddingLeft: 20,
    fontSize: 35
  },
})

export default Registration;