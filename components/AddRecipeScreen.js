import {
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    View,
    FlatList,
    KeyboardAvoidingView,
  } from 'react-native';
  import React from 'react';
  import { Divider } from 'react-native-paper';
  import { Mutation } from 'react-apollo';
  import gql from 'graphql-tag';
  
  const CREATE_RECIPE = gql`
    mutation addRecipe($title: String!, $description: String, $ingredients: [String!], $instructions: [String!]) {
      createRecipe(title: $title, description: $description, ingredients: $ingredients, instructions: $instructions) {
        id
        title
        description
        ingredients
        instructions
      }
    }
  `;
  
  const styles = StyleSheet.create({
    textInput: {
      height: 36,
      backgroundColor: 'white',
      borderRadius: 2,
    },
    textInputView: {
      marginBottom: 8,
      opacity: 0.7,
    },
    container: {
      marginBottom: 12,
      marginTop: 12,
      marginLeft: 12,
      marginRight: 12,
    },
  });
  
  class List extends React.Component {
    state = {
      item: '',
    };
  
    handleAddItem = item => {
      this.setState({ item });
    };
  
    handleOnPress = () => {
      this.props.handleOnPress(this.state.item);
      this.setState({ item: '' });
    };
  
    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 8 }}>
            <TextInput
              style={styles.textInput}
              value={this.state.item}
              selectionColor="#cc0d52"
              underlineColorAndroid="transparent"
              onChangeText={this.handleAddItem}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button color="green" title="✓" onPress={this.handleOnPress} />
          </View>
        </View>
      );
    }
  }
  
  class AddRecipeScreen extends React.Component {
    static navigationOptions = {
      title: 'Новый рецепт',
    };
  
    state = {
      title: '',
      description: '',
      ingredients: [],
      instructions: [],
    };
  
    handleChangeTitle = title => {
      this.setState({ title });
    };
  
    handleChangeDescription = description => {
      this.setState({ description });
    };
  
    handleAddIngredient = ingredient => {
      const newIngredientList = [...this.state.ingredients, ingredient];
      this.setState({ ingredients: newIngredientList });
    };
  
    handleAddInstruction = instruction => {
      const newInstructionList = [...this.state.instructions, instruction];
      this.setState({ instructions: newInstructionList });
    };
  
    keyExtractor = (item, index) => index;
  
    renderIngredient = ({ item }) => <Text>• {item}</Text>;
  
    renderInstruction = ({ item }) => <Text>{item}</Text>;
  
    render() {
      return (
          <Mutation mutation={CREATE_RECIPE}>
            {(createRecipe, { data, loading, error }) => (
              <KeyboardAvoidingView
                keyboardVerticalOffset={64}
                behavior="position"
                enabled>
              <ScrollView
                alwaysBounceVertical={false}
                keyboardShouldPersistTaps="handled">
                {!!data && <Text>{data.name}</Text>}
                <View style={styles.container}>
                  <View style={styles.textInputView}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>ВВЕДИТЕ НАЗВАНИЕ РЕЦЕПТА</Text>
                    </View>
                    <TextInput
                      style={styles.textInput}
                      onChangeText={this.handleChangeTitle}
                      value={this.state.title}
                      selectionColor="#cc0d52"
                      underlineColorAndroid="transparent"
                    />
                  </View>
                  <View style={styles.textInputView}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>ДОБАВЬТЕ ОПИСАНИЕ</Text>
                    </View>
                    <TextInput
                      style={styles.textInput}
                      value={this.state.description}
                      selectionColor="#cc0d52"
                      underlineColorAndroid="transparent"
                      onChangeText={this.handleChangeDescription}
                    />
                  </View>
                  <View style={styles.textInputView}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>ДОБАВЬТЕ ИНГРЕДИЕНТЫ</Text>
                    </View>
                    <List handleOnPress={this.handleAddIngredient} />
                  </View>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.ingredients}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderIngredient}
                  />
                  <View style={styles.textInputView}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>ДОБАВЬТЕ ИНСТРУКЦИИ</Text>
                    </View>
                    <List handleOnPress={this.handleAddInstruction} />
                  </View>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.instructions}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderInstruction}
                  />
                  <View style={styles.textInputView}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>ДОБАВЬТЕ ФОТОГРАФИЮ</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    disabled={loading}

                    onPress={() => {
                      createRecipe({
                        variables: {
                          title: this.state.title,
                          description: this.state.description,
                          ingredients: this.state.ingredients,
                          instructions: this.state.instructions,
                        },
                      });       
                      this.props.navigation.goBack();
                    }}>
                    {loading ? (
                      <ActivityIndicator />
                    ) : (
                      <View style={{backgroundColor: "#cc0d52", height: 40, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{color: 'white'}}>ДОБАВИТЬ РЕЦЕПТ</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </ScrollView>
              </KeyboardAvoidingView>
            )}
          </Mutation>
      );
    }
  }
  
  export default AddRecipeScreen;
  