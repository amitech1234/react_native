import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Vibration,
   TextInput,
   StatusBar,
} from 'react-native';

// const history =  useHistory ();


// import HomeScreen from '../screens/HomeScreen'
// import RootStackScreen from '../screens/RootStackScreen';
// import {useHistory} from 'react-router-dom';
import Feather from 'react-native-vector-icons/Feather';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

 import { AuthContext } from '../component/context';
import HomeScreen from '../screens/HomeScreen';

class Login extends React.Component {

 constructor()
  {
    super()
    this.state={
    //   name:'',
      email:'',
      password:'',
    }
  }

  updateValue(text,field){

     if(field=='email')
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
    // user.name=this.state.name,
    user.username=this.state.email,
    user.password=this.state.password
    console.warn(user);
 
    fetch('http://192.168.15.93:8000/api/userlogin', {
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
          <StatusBar backgroundColor='#728FCE' barStyle="light-content"/>
        <Animatable.View
          animation="zoomIn"
         style={styles.header}>
        <Text style={ styles.text_header}>Login to continue</Text> 
        </Animatable.View>

        <Animatable.View
        animation="fadeInUpBig" 
        style={styles.footer}>
          <Text style={[styles.text_footer, {
            marginTop: 20
          }]}>Email</Text> 

          <View style={styles.action}>      
            <FontAwsome
              name="user-o"
              color="#05375a"
              size={20}
            />

            <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(text)=>this.updateValue(text,'email')}
          //  onChangeText={(val)=> textInputChange(val)}
            />

            {/* { data.check_textInputChange ? */}

            {/* <Feather 
              name="check-circle"
              color="green"
              size={20}
            /> */}

            {/* : null } */}

        </View>

        <Text style={[styles.text_footer, {
          marginTop: 20
        }]}>Password</Text>

        <View style={styles.action}>
          <FontAwsome
              name="lock"
              color="#05375a"
              size={20}
            />

            <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text)=>this.updateValue(text,'password')}
            />

            <Feather 
              name="eye-off"
              color="grey"
              size={20}
            />

        </View> 

        <TouchableOpacity
        onPress={()=>this.submit()}
       // onPress={() => {this.signIn()}}
        style={styles.button}>
          <Text style={styles.text_footer}>Login</Text>
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
  color: '#05375a',
},
})

export default Login;