/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';
// import cheerio from 'react-native-cheerio'

export default class home extends Component{
  
  getDataUsingGet() {
    //GET request
    fetch(urlWeb, {
      method: 'GET',
      //Request Type
    })
      .then(response => response.text())
      //If response is in json then in success
      .then(text => {
        //Success
        const $ = cheerio.load(text);
        // const x = $('body #mainpart .container .row').eq(1).children().html();
        // const x = $('main .container').html();
        // const x = $('.thumb-wrapper a').attr('href');
        const x = $('.thumb-wrapper a').data();
        alert(x);
        console.log(text);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {/*Running GET Request*/}
        <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
});
const urlWeb = 'http://ln.hako.re';
const cheerio = require('react-native-cheerio');