import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { Divider } from 'react-native-paper';
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      opacity: 1,
    },
    views: {
      flex: 2,
      backgroundColor: 'white',
      opacity: 0.6,
    },
    menuView: {
      flex: 3,
      backgroundColor: '#FFFFFF80',
    },
    menus: {
      flex: 1,
      backgroundColor: '#cc0d52',
      marginLeft: 40,
      marginRight: 40,
      marginTop: 24,
      marginBottom: 24,
      borderRadius: 2,
      opacity: 0.9,
      justifyContent: 'center',
      alignItems: 'center',
    },
    forMenusText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
  class MenuScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    goToList = () => {
      return this.props.navigation.navigate('List');
    };
  
    goToFavorites = () => {
      return this.props.navigation.navigate('Favorites');
    };
  
    goToAddRecipe = () => {
      return this.props.navigation.navigate('AddRecipe');
    };
  
    render() {
      return (
        <ImageBackground
          source={{
            uri: 'http://s1.1zoom.net/big0/904/Fast_food_Pizza_White_487820.jpg',
          }}
          style={{ width: '100%', height: '100%' }}>
          <View style={styles.statusBar} />
          <View style={{ backgroundColor: '#FFFFFF80', flex: 1 }}>
            <View style={styles.views} />
            <View style={styles.menuView}>
              <TouchableOpacity style={styles.menus} onPress={this.goToList}>
                <Text style={styles.forMenusText}>ВСЕ РЕЦЕПТЫ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menus} onPress={this.goToFavorites}>
                <Text style={styles.forMenusText}>ИЗБРАННЫЕ РЕЦЕПТЫ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menus} onPress={this.goToAddRecipe}>
                <Text style={styles.forMenusText}>ДОБАВИТЬ НОВЫЙ РЕЦЕПТ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.views} />
          </View>
        </ImageBackground>
      );
    }
  }
  
  export default MenuScreen;
  