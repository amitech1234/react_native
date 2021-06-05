import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';

import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserTypeScreen =({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                   // duration="1500"
                    source={require('../assets/fyf.jpg')}
                    style={styles.logo}
                    resizeMod="stretch"
                />
            </View>
            <Animatable.View
                 animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.title}>Select User Type</Text>
                <Text style={styles.text}>Student</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('StudentRegScreen')}
                    style ={styles.button}
                >
                <Text>Student Register</Text>   
                </TouchableOpacity>

                <Text style={styles.text}>Job Seeker</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('JobseekerRegScreen')}
                    style ={styles.button}
                >
                    <Text>Job seeker Register</Text>
                    
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );

};


export default UserTypeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#728FCE'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#728FCE",
    borderColor: '#728FCE',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});