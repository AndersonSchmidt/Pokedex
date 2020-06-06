import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../../components/SearchBar';

const PokemonsScreen = props => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pokédex</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
  titleContainer: {
    marginTop: 100,
  },
  title: {
    fontFamily: 'SFProDisplay',
    fontSize: 32,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 21,
  },
  description: {
    fontFamily: 'SFProDisplay',
    fontSize: 16,
    color: '#747476',
  },
});

PokemonsScreen.navigationOptions = {
  headerShown: false,
};

export default PokemonsScreen;
