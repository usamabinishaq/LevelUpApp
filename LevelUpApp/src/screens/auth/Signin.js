import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          onPress={() => this.props.navigation.navigate('GettingStarted')}
          style={{fontSize: 18, fontWeight: 'bold'}}>
          Signin Page Reached
        </Text>
      </View>
    );
  }
}

export default Signin;
