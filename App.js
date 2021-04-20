import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import { DrawerContent } from './screens/DrawerContent'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import SettingsScreen from './screens/SettingsScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import RootStackScreen from './screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';

import { AuthContext } from './component/context';

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
 const [userToken, setUserToken] = React.useState(null);

 const initialLoginState ={
   isLoading : true,
   userName : null,
   userToken : null,
 };

 const loginReducer = (prevState, action) => {
   switch( action.type ){
     case 'RETRIEVE_TOKEN':
       return{
         ...prevState,
         userToken: action.token,
         isLoading: false,
       };
     case 'LOGIN':
       return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
       };
     case 'LOGOUT':
       return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
       };
     case 'REGISTER':
       return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
       };
   }
 };

 const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() =>({
    signIn: (userName, password) => {
      // setUserToken('lol');
      // setIsLoading(false);
      let userToken;
      userName = null;
      if( userName == 'user' && password == 'pass' ) {
        userToken = 'lol';
      } 
      dispatch({ type:'LOGIN', id: userName, token: userToken});
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('lol');
      setIsLoading(false);
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type:'RETRIEVE_TOKEN', token: 'loool'});
    },1000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItem:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState. userToken !== null ? (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component = { MainTabScreen } />
                <Drawer.Screen name="Home" component = { HomeScreen } />
                <Drawer.Screen name="Profile" component = { ProfileScreen } />
                <Drawer.Screen name="Bookmarks" component = { BookmarkScreen } />
                <Drawer.Screen name="Settings" component = { SettingsScreen } />
                <Drawer.Screen name="Login" component = { LoginScreen } />
                <Drawer.Screen name="Register" component = { RegistrationScreen } />
             </Drawer.Navigator>
        )
      :
      <RootStackScreen/> 
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;

