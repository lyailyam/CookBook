import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ImageBackground,
  } from 'react-native';
  import React from 'react';
  import { Constants } from 'expo';
  
  const styles = StyleSheet.create({
    ultimateContainer: {
      flex: 1,
      opacity: 1,
    },
    login: {
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
    },
    statusBar: {
      marginTop: Constants.statusBarHeight,
    },
    textInput: {
      height: 36,
      backgroundColor: 'white',
      borderRadius: 2,
    },
    logo: {
      height: 100,
    },
    textInputView: {
      marginBottom: 8,
      opacity: 0.7,
    },
  });
  
  class SignUpScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    state = {
      username: '',
      password: '',
    };
  
    handleSignUp = () => {
      return this.props.navigation.navigate('Menu');
    };
  
    render() {
      const { navigation } = this.props;
      const item = navigation.getParam('item');
  
      return (
        <ImageBackground
          source={{
            uri: 'http://s1.1zoom.net/big0/904/Fast_food_Pizza_White_487820.jpg',
          }}
          style={{ width: '100%', height: '100%' }}>
          <View style={{ backgroundColor: '#FFFFFF80' }}>
            <View style={styles.login}>
              <View style={styles.statusBar} />
              <View style={styles.logo} />
              <View style={styles.textInputView}>
                <View style={{ alignItems: 'center' }}>
                  <Text>ВВЕДИТЕ НИКНЕЙМ</Text>
                </View>
                <TextInput
                  style={styles.textInput}
                  value={this.state.login}
                  textContentType="username"
                  selectionColor="#cc0d52"
                  underlineColorAndroid="#cc0d52"
                  onChangeText={username => this.setState({ username: username })}
                />
              </View>
              <View style={styles.textInputView}>
                <View style={{ alignItems: 'center' }}>
                  <Text>ВВЕДИТЕ ПАРОЛЬ</Text>
                </View>
                <TextInput
                  style={styles.textInput}
                  value={this.state.password}
                  textContentType="password"
                  selectionColor="#cc0d52"
                  underlineColorAndroid="#cc0d52"
                  onChangeText={password => this.setState({ password: password })}
                  secureTextEntry
                />
              </View>
              <View style={{ opacity: 0.9 }}>
                <Button
                  title="Зарегистрироваться"
                  color="#cc0d52"
                  onPress={this.handleSignUp}
                  style={{ height: 36 }}
                />
              </View>
              <View style={{ height: 300 }} />
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
  
  export default SignUpScreen;
  