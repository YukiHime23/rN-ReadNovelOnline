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
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import styles from './../styleSheet/stylesDetail';

export default class detailNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.viewMain}>
        <StatusBar hidden={true} />

        {/* This is the title of the application */}
        <ImageBackground source={{uri:'https://get.wallhere.com/photo/white-black-monochrome-dark-texture-atmosphere-light-background-line-surface-darkness-spots-computer-wallpaper-black-and-white-monochrome-photography-701877.jpg'}} 
        style={styles.viewContent}>
          <Image
          source={require('../image/logo-9.png')}
          style={styles.logoImg}
          />
          <Text style={styles.textContent}>YukiNovel - Read novel online</Text>
        </ImageBackground>

        {/* This is the body of the application */}
        <View style={styles.viewBody}>
          <ScrollView>
            
          </ScrollView>
        </View>
      </View>
    ); 
  }
}