import { ActivityIndicator,StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { Divider } from 'react-native-paper';

const styles = StyleSheet.create({

    container: {
      justifyContent: 'center',
      height: 80,
      backgroundColor: 'white',
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
    },
    forTextView: {
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    description: {
      color: 'grey',
    }
  });

const GET_FAV_RECIPES = gql`
{
  allRecipes {
    id
    title
    description
    ingredients
    instructions
  }
}
`;
  

class FavoritesScreen extends React.Component {

    static navigationOptions = {
      title: 'Избранные рецепты',
    };
    keyExtractor = (item) => item.id;

    handleOnPress = (item) => {
      return this.props.navigation.navigate('Details', {item});
    }
    
    renderItem = ({item}) => (
      <TouchableOpacity onPress={() => this.handleOnPress(item)}>
        <View style={styles.container}>
          <View style={styles.forTextView}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.description}> 
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
  
    )
  
    render() {
      return (
<View/>
      );
    };
}

export default FavoritesScreen;