import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen'
import LoginScreen from './LoginScreen'
import StudentRegScreen from './StudentRegScreen'
import JobseekerRegScreen from './JobseekerRegScreen'
import UserTypeScreen from './UserTypeScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name= "SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name= "LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name= "UserTypeScreen" component={UserTypeScreen}/>
        <RootStack.Screen name= "StudentRegScreen" component={StudentRegScreen}/>
        <RootStack.Screen name= "JobseekerRegScreen" component={JobseekerRegScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;