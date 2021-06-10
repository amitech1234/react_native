import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class CollegeList extends Component {

  static propTypes = {
    college: PropTypes.array.isRequired
  }; 
  render() {
    return (
      <View style={styles.collegeList}>
        {this.props.college.map((college) => {
            return (
                <View key={college.col_id}>
                    <Text style={styles.cldistext}>{college.c_name} | { college.clocation }</Text>
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    collegeList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cldistext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});