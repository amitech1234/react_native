import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native';
import Registration from '../dbscreens/StudRegScreen';
//import { SearchBar } from 'react-native-elements';
//import Swiper from 'react-native-swiper';
import JobRegistration from '../dbscreens/JobRegScreen'

const JobseekerRegScreen = ( { navigation } ) => {
    return (
      <JobRegistration/>
    );
  }

  export default JobseekerRegScreen;