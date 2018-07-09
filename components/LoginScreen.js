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
      backgroundColor: '#FFFFFF80',
    },
    login: {
      flex: 1,
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
    },
    textInput: {
      height: 36,
      backgroundColor: 'white',
      borderRadius: 2,
    },
    textInputView: {
      marginBottom: 8,
      opacity: 0.7,
    },
    forSignUp: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 40,
      opacity: 0.9,
    },
  });
  
  class LoginScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    state = {
      username: '',
      password: '',
    };
  
    handleLogIn = () => {
      return this.props.navigation.navigate('Menu');
    };
  
    handleSignUp = () => {
      return this.props.navigation.navigate('SignUp');
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
          <View style={styles.ultimateContainer}>
            <View style={styles.login}>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
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
                    onChangeText={username =>
                      this.setState({ username: username })
                    }
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
                    onChangeText={password =>
                      this.setState({ password: password })
                    }
                    secureTextEntry
                  />
                </View>
                <View style={{ opacity: 0.9 }}>
                  <Button
                    title="войти"
                    color="#cc0d52"
                    onPress={this.handleLogIn}
                    style={{ height: 36 }}
                  />
                </View>
              </View>
              <View style={styles.forSignUp}>
                <Text style={{ fontSize: 16 }}>У вас еще нет аккаунта?</Text>
                <Button
                  title="зарегистрироваться"
                  color="#cc0d52"
                  onPress={this.handleSignUp}
                  style={{ height: 36 }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
  
  export default LoginScreen;
  