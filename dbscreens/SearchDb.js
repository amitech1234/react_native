import React from 'react';

import { SearchBar } from 'react-native-elements';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: '#728FCE'
  }
})