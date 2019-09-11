/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail:'',
      txtPass:'',
    };
  }
  _onPress() {
    alert(this.state.txtEmail+'/'+this.state.txtPass)
  }

  render() {
    return (
      <View style={styles.viewMain}>
        <StatusBar hidden={true} />
        <View style={styles.viewInput}>
          <TextInput
          style={styles.txtInput}
          keyboardType='email-address'
          placeholder="Enter your email"
          placeholderTextColor='red'
          onChangeText={(txtEmail) => this.setState({txtEmail})}
          value={this.state.txtEmail}
          />
          <TextInput
            style={styles.txtInput}
            keyboardType='default' 
            secureTextEntry={true}
            onChangeText={(txtPass) => this.setState({txtPass})}
            value={this.state.txtPass}
          />
        </View>

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={this._onPress.bind(this)}
        >
          <Text> Touch Here </Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewMain:{
    flex:1,
    backgroundColor:'cyan',
    // justifyContent:'center',
    // alignItems:'center',
  },
  viewInput:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
  },
  txtInput:{
    height: 40, 
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    padding:10,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  btn:{
    width:widthDevice/2,
  },
  btnSubmit:{
    width:widthDevice/3,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
}); 

// adb shell input keyevent 82