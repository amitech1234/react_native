import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './HomeScreen'
import CollegeScreen from './CollegeScreen'
import CompanyScreen from './CompanyScreen'
import ProfileScreen from './ProfileScreen'
import ClgSearchScreen from './ClgSearchScreen'
import CmpSearchScreen from './CmpSearchScreen'
import { Avatar } from 'react-native-paper';

const HomeStack = createStackNavigator();
const CollegeStack = createStackNavigator();
const CompanyStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ClgSearchStack = createStackNavigator();
const CmpSearchStack = createStackNavigator();

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
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        labeled = "false"
        name="Search"
        component={SearchStackScreen}
      /> */}
</Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        // headerLeft: () => (
        //   <View style={{marginLeft:10}}>

        //     <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
        //        onPress = { () => navigation.openDrawer()}>
        //       <Avatar.Image 
        //         source={require('../assets/menu.png')}
        //         backgroundColor = "#728FCE"
        //         size={30}
        //       />
        //     </TouchableOpacity>
    
        //   </View>
        // ),
      }}/>
    </HomeStack.Navigator>
  );

  const ClgSearchStackScreen = ({navigation}) =>(
    <ClgSearchStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ClgSearchStack.Screen name="ClgSearch" component={ClgSearchScreen} options={{
        headerLeft: () => (
          <View style={{marginLeft:10}}>

            <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
               onPress = { () => navigation.openDrawer()}>
              <Avatar.Image 
                source={require('../assets/menu.png')}
                backgroundColor = "#728FCE"
                size={30}
              />
            </TouchableOpacity>
          </View>
        ),
      }}/>
    </ClgSearchStack.Navigator>
  );

  const CmpSearchStackScreen = ({navigation}) =>(
    <CmpSearchStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CmpSearchStack.Screen name="CmpSearch" component={CmpSearchScreen} options={{
        headerLeft: () => (
          <View style={{marginLeft:10}}>

            <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
               onPress = { () => navigation.openDrawer()}>
              <Avatar.Image 
                source={require('../assets/menu.png')}
                backgroundColor = "#728FCE"
                size={30}
              />
            </TouchableOpacity>
    
          </View>
        ),
      }}/>
    </CmpSearchStack.Navigator>
  );

  const CollegeStackScreen = ({navigation}) =>(
    <CollegeStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CollegeStack.Screen name="College" component={CollegeScreen} options={{
      //  headerLeft: () => (
      //   <View style={{marginLeft:10}}>
      //   <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
      //          onPress = { () => navigation.closeDrawer()}>
      //         <Avatar.Image 
      //           source={require('../assets/menu.png')}
      //           backgroundColor = "#728FCE"
      //           size={30}
      //         />
      //       </TouchableOpacity>
      //   </View>
      // ),
      headerRight: () => (
        <View style={{marginRight:10}}>
          <TouchableOpacity
              onPress={()=>navigation.navigate('ClgSearch')}
            >
              <Avatar.Image 
                source={require('../assets/search.png')}
                backgroundColor = "#728FCE"
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
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CompanyStack.Screen name="Company" component={CompanyScreen} options={{
      //  headerLeft: () => (
      //   <View style={{marginLeft:10}}>
      //   <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
      //          onPress = { () => navigation.openDrawer()}>
      //         <Avatar.Image 
      //           source={require('../assets/menu.png')}
      //           backgroundColor = "#728FCE"
      //           size={30}
      //         />
      //       </TouchableOpacity>
      //   </View>
      // ),
      headerRight: () => (
        <View style={{marginRight:10}}>
          <TouchableOpacity
              onPress={()=>navigation.navigate('CmpSearch')}
            >
              <Avatar.Image 
                source={require('../assets/search.png')}
                backgroundColor = "#728FCE"
                size={30}
                
              />
            </TouchableOpacity>
        </View>
      )
    }}/>
    </CompanyStack.Navigator>
  );

  const ProfileStackScreen = ({navigation}) =>(
    <ProfileStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor: '#728FCE',
      },
      headerTintColor: '#333 ',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      //  headerLeft: () => (
      //   <View style={{marginLeft:10}}>
      //   <TouchableOpacity style={{paddingHorizontal:10, marginTop:5}}
      //          onPress = { () => navigation.openDrawer()}>
      //         <Avatar.Image 
      //           source={require('../assets/menu.png')}
      //           backgroundColor = "#728FCE"
      //           size={30}
      //         />
      //       </TouchableOpacity>
      //   </View>
      // ),
    }}/>
    </ProfileStack.Navigator>
  );