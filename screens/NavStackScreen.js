import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './SearchScreen'

const NavStack = createStackNavigator();

const NavStackScreen = ({navigation}) =>(
    <NavStack.Navigator headerMode='none'>
        <NavStack.Screen name= "SearchScreen" component={SearchScreen}/>
    </NavStack.Navigator>
);

export default NavStackScreen;