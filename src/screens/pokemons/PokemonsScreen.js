import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PokemonsScreen = props => {
  return (
    <View>
      <Text style={{fontFamily: 'SFProDisplay'}}>PokemonsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

PokemonsScreen.navigationOptions = {
  headerShown: false,
};

export default PokemonsScreen;
