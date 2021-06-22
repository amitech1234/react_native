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
// import SearchScreen from './screens/SearchScrean'
// import RootStackScreen from './screens/RootStackScreen';
// import ClgSrchScreen from './screens/ClgSrchScreen';
// import CmpSrchScreen from './screens/CmpSrchScreen';
// import { View } from 'react-native-animatable';
// import { ActivityIndicator } from 'react-native';
// import { useEffect } from 'react';

// import { AuthContext } from './component/context';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
      <NavigationContainer>
          {/* <RootStackScreen/>  */}
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component = { MainTabScreen } />
                <Drawer.Screen name="Home" component = { HomeScreen } />
                <Drawer.Screen name="Profile" component = { ProfileScreen } />
                <Drawer.Screen name="Bookmarks" component = { BookmarkScreen } />
                <Drawer.Screen name="Settings" component = { SettingsScreen } />
                <Drawer.Screen name="Login" component = { LoginScreen } />
                <Drawer.Screen name="Register" component = { RegistrationScreen } />
                {/* <Drawer.Screen name="Search" component = { SearchScreen } /> */}
                {/* <Drawer.Screen name="ClgSrch" component = { ClgSrchScreen } />
                <Drawer.Screen name="CmpSrch" component = { CmpSrchScreen } /> */}
             </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

