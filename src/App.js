import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './Component/common';
import LoginForm from './Component/Loginform';

class App extends Component {
  state = {loggedIn: null};
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBnbbUG3A3KuX3kuJ9Ynh9glqKXEAptgu8',
      authDomain: 'authentication-43da9.firebaseapp.com',
      databaseURL: 'https://authentication-43da9.firebaseio.com',
      projectId: 'authentication-43da9',
      storageBucket: 'authentication-43da9.appspot.com',
      messagingSenderId: '349261349547',
      appId: '1:349261349547:web:fe59779deb446a373eedee',
      measurementId: 'G-VY3QL1GYZE',
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()} >log Out</Button>)
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
