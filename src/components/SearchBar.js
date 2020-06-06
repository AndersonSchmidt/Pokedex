import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput placeholder="What Pokémon are you looking for?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  searchIcon: {
    marginVertical: 22,
    marginRight: 8,
    marginLeft: 27,
  },
});

export default SearchBar;
