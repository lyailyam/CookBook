import { StyleSheet, Text, View, ScrollView, FlatList, Switch, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';

const styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: 'white',
    },
    container: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8,
    },
    center: {
        justifyContent: 'center',
        height: 36,
    },
    forTitles: {
        fontWeight: 'bold',
        fontSize: 16,
    }
  })
  
class Heart extends React.Component {

    handleOnPress = () => {
        alert('Рецепт был добавлен в избранное');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handleOnPress}>
                <Image 
                    style={{width: 32, height: 32}} 
                    source={{
                        uri:'http://www.iconsplace.com/icons/preview/white/hearts-256.png'
                    }}
                />
            </TouchableOpacity>
        )
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.item.title}`,
      headerRight: <Heart/>,
    });

    renderIngredients = ({item}) => (
        <View style={{flex:1, height: 20}}>
            <Text>• {item}</Text>
        </View>
    )

    renderInstructions = ({item}) => (
        <View>
            <Text>{item}</Text>
        </View>
    )

    render() {
      const { navigation } = this.props;
      const item = navigation.getParam('item');
 
      return (
        <View style={styles.backgroundColor}>
            <ScrollView style={styles.container}>  
                <View style={styles.center}>   
                    <Text style={styles.forTitles}>{item.title}</Text>
                </View>
                    <Text style={{color:'grey'}}>{item.description}</Text>
                <View style={styles.center}>   
                    <Text style={styles.forTitles}>Ингредиенты</Text>
                </View>
                <FlatList
                keyExtractor={(item) => item.id}
                data={item.ingredients}
                ItemSeparatorComponent={Divider}
                renderItem={this.renderIngredients}
                />   
                <View style={styles.center}>   
                    <Text style={styles.forTitles}>Инcтрукции</Text>
                </View>
                <FlatList
                keyExtractor={(item) => item.id}
                data={item.instructions}
                ItemSeparatorComponent={Divider}
                renderItem={this.renderInstructions}
                />   
                
            </ScrollView>
        </View>
      );
    }
  }
  
  export default DetailsScreen;