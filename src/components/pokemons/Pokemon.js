import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const Pokemon = props => {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async url => {
    const response = await fetch(url);
    setPokemon(await response.json());
  };
  useEffect(() => {
    fetchPokemon(props.url);
  }, [props.url]);

  return Object.keys(pokemon).length ? (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            Colors['background_type_' + pokemon.types[0].type.name],
        },
      ]}>
      <View>
        <View style={styles.idContainer}>
          <Text style={styles.id}>
            #{('00' + pokemon.id.toString()).slice(-3)}
          </Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://pokeres.bastionbot.org/images/pokemon/' +
              pokemon.id +
              '.png',
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 115,
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  id: {
    fontFamily: 'SFProDisplay',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(23, 23, 27, 0.6)',
  },
  nameContainer: {
    marginLeft: 20,
    marginBottom: 50,
  },
  name: {
    fontFamily: 'SFProDisplay',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    marginRight: 10,
    marginTop: -20,
  },
  image: {
    width: 130,
    height: 130,
  },
});

export default Pokemon;
