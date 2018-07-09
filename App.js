import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { RecipeList } from './components';
import { DetailsScreen } from './components';
import { LoginScreen } from './components';
import { MenuScreen } from './components';
import { FavoritesScreen } from './components';
import { AddRecipeScreen } from './components';
import { SignUpScreen } from './components';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#f2f2f4',
  },
});

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjj6o6p4p010f0166wpw0thye',
});

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Список рецептов',
  };

  render() {
    return (
      <View style={styles.backgroundColor}>
        <RecipeView navigation={this.props.navigation} />
      </View>
    );
  }
}

class RecipeView extends React.Component {
  render() {
    return (
      <View>
        <RecipeList navigation={this.props.navigation} />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    List: ListScreen,
    Details: DetailsScreen,
    Menu: MenuScreen,
    AddRecipe: AddRecipeScreen,
    Favorites: FavoritesScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#cc0d52',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}
