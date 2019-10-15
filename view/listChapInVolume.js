/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text, 
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import css          from './../styleSheet/stylesMain';
import styles       from './../styleSheet/stylesHome';
import FlatListItem from './itemNovel';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { navigation } = this.props;
    hrefVol = navigation.getParam('hrefVol', 'hrefVol defaut');

    return (
      <View style={css.viewMain}>
        <StatusBar hidden={true} />

        {/* This is the title of the application */}
        <ImageBackground source={{uri:'https://get.wallhere.com/photo/white-black-monochrome-dark-texture-atmosphere-light-background-line-surface-darkness-spots-computer-wallpaper-black-and-white-monochrome-photography-701877.jpg'}} 
        style={css.viewContent}>
          <Image
          source={require('../image/logo.png')}
          style={css.logoImg}
          />
          <Text style={css.textContent}>NyanNovel - Read novel online</Text>
        </ImageBackground>

        {/* This is the body of the application */}
        <View style={css.viewBody}>
          <ScrollView>
            <View>
              <Text>kou-2-ni-timeleap-shita-boku-ga-touji-sukidatta-sensei-ni-kokutta-kekka</Text>
              <Text>Chương ?</Text>
              <View></View>
            </View>
          </ScrollView>
        </View>
      </View>
    ); 
  }
}

let hrefVol = '';
const cheerio = require('react-native-cheerio');