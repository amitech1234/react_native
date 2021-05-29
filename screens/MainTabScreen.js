import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native';


import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'
import CollegeScreen from './CollegeScreen'
import CompanyScreen from './CompanyScreen'
import NotificationScreen from './NotificationScreen'
import { Avatar } from 'react-native-paper';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegistrationStack = createStackNavigator();
const CollegeStack = createStackNavigator();
const CompanyStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#728FCE' }}
    >
      
        <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="College"
        component={CollegeStackScreen}
        options={{
          tabBarLabel: 'College',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-school-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Company"
        component={CompanyStackScreen}
        options={{
          tabBarLabel: 'Company',
          tabBarIcon: ({ color }) => (
            <Icon name="md-business" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#fff',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <View style={{marginLeft:10}}>
          <Icon.Button 
          name="ios-menu" 
          size={30} 
          color='#728FCE'
          backgroundColor = "#fff" 
          onPress = { () => navigation.openDrawer()}
          />
          </View>
        ),
        headerRight: () => (
        <View style={{flexDirection:'row', marginRight:10 }}>
          <Icon.Button 
          name="ios-search" 
          size={30} 
          color='#728FCE'
          backgroundColor = "#fff" 
          onPress = { () => {}}
          />
          <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
           onPress={() => {navigation.navigate('Profile');}}>
          <Avatar.Image 
            source={{
              url: '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqtKnc1U_Bex5Lt_z_O-JF8xXiFox92DNpg&usqp=CAU"'
            }}
            size={30}
          />
          </TouchableOpacity>
        </View>
        )
      }}/>
    </HomeStack.Navigator>
  );
  
  const LoginStackScreen = ({navigation}) =>(
    <LoginStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <LoginStack.Screen name="Login" component={LoginScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={30} 
          backgroundColor = "#728FCE" onPress = { () =>
            navigation.openDrawer()
          }></Icon.Button>
        )
      }}/>
    </LoginStack.Navigator>
  );
  
  const RegistrationStackScreen = ({navigation}) =>(
    <RegistrationStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <RegistrationStack.Screen name="Register" component={RegistrationScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={30} 
          backgroundColor = "#728FCE" onPress = { () =>
            navigation.openDrawer()
          }></Icon.Button>
        )
      }}/>
    </RegistrationStack.Navigator>
  );


  const CollegeStackScreen = ({navigation}) =>(
    <CollegeStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#fff',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CollegeStack.Screen name="College" component={CollegeScreen} options={{
       headerLeft: () => (
        <View style={{marginLeft:10}}>
        <Icon.Button 
        name="ios-menu" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => navigation.openDrawer()}
        />
        </View>
      ),
      headerRight: () => (
      <View style={{flexDirection:'row', marginRight:10 }}>
        <Icon.Button 
        name="ios-search" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => {}}
        />
        <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
         onPress={() => {navigation.navigate('Profile');}}>
        <Avatar.Image 
          source={{
            url: '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqtKnc1U_Bex5Lt_z_O-JF8xXiFox92DNpg&usqp=CAU"'
          }}
          size={30}
        />
        </TouchableOpacity>
      </View>
      )
    }}/>
    </CollegeStack.Navigator>
  );

  const CompanyStackScreen = ({navigation}) =>(
    <CompanyStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#fff',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CompanyStack.Screen name="Company" component={CompanyScreen} options={{
       headerLeft: () => (
        <View style={{marginLeft:10}}>
        <Icon.Button 
        name="ios-menu" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => navigation.openDrawer()}
        />
        </View>
      ),
      headerRight: () => (
      <View style={{flexDirection:'row', marginRight:10 }}>
        <Icon.Button 
        name="ios-search" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => {}}
        />
        <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
         onPress={() => {navigation.navigate('Profile');}}>
        <Avatar.Image 
          source={{
            url: '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqtKnc1U_Bex5Lt_z_O-JF8xXiFox92DNpg&usqp=CAU"'
          }}
          size={30}
        />
        </TouchableOpacity>
      </View>
      )
    }}/>
    </CompanyStack.Navigator>
  );

  const NotificationStackScreen = ({navigation}) =>(
    <NotificationStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#fff',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
       headerLeft: () => (
        <View style={{marginLeft:10}}>
        <Icon.Button 
        name="ios-menu" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => navigation.openDrawer()}
        />
        </View>
      ),
      headerRight: () => (
      <View style={{flexDirection:'row', marginRight:10 }}>
        <Icon.Button 
        name="ios-search" 
        size={30} 
        color='#728FCE'
        backgroundColor = "#fff" 
        onPress = { () => {}}
        />
        <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
         onPress={() => {navigation.navigate('Profile');}}>
        <Avatar.Image 
          source={{
            url: '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqtKnc1U_Bex5Lt_z_O-JF8xXiFox92DNpg&usqp=CAU"'
          }}
          size={30}
        />
        </TouchableOpacity>
      </View>
      )
    }}/>
    </NotificationStack.Navigator>
  );