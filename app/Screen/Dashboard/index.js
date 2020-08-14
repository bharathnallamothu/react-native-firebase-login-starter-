// components/dashboard.js

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import firebase from '../../database/firebase';

import styles from '@Screen/Dashboard/Style'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      displayName: '',
      url: this.props.route.params.url
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
        <Text style={styles.textStyle}>
          uid:{this.state.uid}
        </Text>
        <Image style={{
          width: 400,
          height: 400,
        }}
          source={{ uri: this.state.url }}
        />
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
  componentDidMount() {
    this.setState({
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    })
  }
}
