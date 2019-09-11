/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewPage1}>
          <Text>Page 1</Text>
        </View>
        <View style={styles.viewPage2}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.viewPage3}>
          <Text>Page 3</Text>
        </View>
      </ScrollView>
    ); 
  }
}

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewPage1:{
    backgroundColor:'cyan',
    flex:1,
    width:widthDevice,
    justifyContent:'center',
    alignItems:'center',
  },
  viewPage2:{
    backgroundColor:'green',
    flex:1,
    width:widthDevice,
    justifyContent:'center',
    alignItems:'center',
  },
  viewPage3:{
    backgroundColor:'red',
    flex:1,
    width:widthDevice,
    justifyContent:'center',
    alignItems:'center',
  }
});

// adb shell input keyevent 82