import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import ViewCompanyScreen from './screens/ViewCompanyScreen'
import ViewCollegeScreen from './screens/ViewCollegeScreen'
import ClgSearchScreen from './screens/ClgSearchScreen'
import CmpSearchScreen from './screens/CmpSearchScreen'
import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
       <NavigationContainer>
          {/* <RootStackScreen/> */}
                 <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                 <Drawer.Screen name="HomeDrawer" component = { MainTabScreen } 
                 options={({ route, navigation }) => {
                    return {
                      swipeEnabled: false,
                    };
                  }}/>
                 <Drawer.Screen name="Home" component = { HomeScreen } />
                 <Drawer.Screen name="Profile" component = { ProfileScreen } />
                 <Drawer.Screen name="CmpSearch" component = { CmpSearchScreen } />
                 <Drawer.Screen name="ClgSearch" component = { ClgSearchScreen } />
                 <Drawer.Screen name="ViewClg" component = { ViewCollegeScreen } />
                 <Drawer.Screen name="ViewCmp" component = { ViewCompanyScreen } />
              </Drawer.Navigator>
     </NavigationContainer>
  );
}
export default App;
