import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Vibration, 
  TextInput, 
  RadioGroup
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


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

        <Animatable.View
          animation="zoomIn"
         style={styles.header}>
        <Text style={ styles.text_header}>Welcome</Text> 
        </Animatable.View>

        <Animatable.View
        animation="fadeInUpBig" 
        style={styles.footer}>

          <Text style={[styles.text_footer, {
            marginTop: 20
          }]}>Full Name</Text>
          <View style={styles.action}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            onChangeText={(text)=>this.updateValue(text,'name')}
            />
          </View>

          {/* <Text style={[styles.text_footer, {
            marginTop: 20
          }]}>Gender</Text>
          <View style={styles.action}>
          <RadioGroup
            options={[
              { id: 1, label: 'male' },
              { id: 2, label: 'female' },
            ]}
            activeButtonId={1}
          />
          </View> */}

          <Text style={[styles.text_footer, {
            marginTop: 20
          }]}>Email</Text>      
          <View style={styles.action}>      
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={(text)=>this.updateValue(text,'email')}
            />
        </View>

        <Text style={[styles.text_footer, {
          marginTop: 20
        }]}>Password</Text>
        <View style={styles.action}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(text)=>this.updateValue(text,'password')}
          />
        </View>

        <Text style={[styles.text_footer, {
          marginTop: 20
        }]}>Confirm Password</Text>
        <View style={styles.action}>
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          style={styles.textInput}
          onChangeText={(text)=>this.updateValue(text,'password')}
          />
        </View>

        <TouchableOpacity
        onPress={()=>this.submit()}
        style={styles.button}>
          <Text style={styles.text_footer}>Register</Text>
        </TouchableOpacity>
      </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#728FCE'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#728FCE",
    borderColor: '#728FCE',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 15,
},
text_footer: {
  color: '#05375a',
  fontSize: 18,
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  borderBottomWidth: 2,
  borderBottomColor:'#728FCE',
  color: '#05375a',
},
})


export default Registration;