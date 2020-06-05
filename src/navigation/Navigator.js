import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Colors from '../constants/Colors';
import PokemonsScreen from '../screens/pokemons/PokemonsScreen';
import PokemonScreen from '../screens/pokemons/PokemonScreen';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
      //   fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      //   fontFamily: 'open-sans',
    },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    // headerTitle: 'A Screen',
  },
};

const PokemonNavigator = createStackNavigator(
  {
    Pokemons: PokemonsScreen,
    Pokemon: PokemonScreen,
  },
  {
    defaultNavigationOptions: {
      defaultStackNavOptions,
    },
  },
);

export default createAppContainer(PokemonNavigator);
