/** 
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
// import cheerio from 'react-native-cheerio'

export default class home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
  }
  componentDidMount() {
    this.getDataUsingGet();
  }
  getDataUsingGet() {
    //GET request
    fetch(urlWeb, {
      method: 'GET',
      //Request Type
    })
    .then(response => response.text())
    //If response is in json then in success
    .then((text) => {
      //Success
      const $ = cheerio.load(text);
      const container1 = $('main#mainpart div.container').eq(1);
      let json = [];
      $('main.row',container1).find('div.thumb-item-flow').each((i, el) => {
        let x={};
        x['newChapTitle'] = $(el).find('.thumb-wrapper').find('a').attr('title');
        x['newChapHref'] = $(el).find('.thumb-wrapper').find('a').attr('href');
        x['volumeTitle'] = $(el).find('.thumb-wrapper').find('.thumb-detail').find('.volume-title').text();
        x['novelTitle'] = $(el).find('.series-title').find('a').attr('title');
        x['novelHref'] = $(el).find('.series-title').find('a').attr('href');
        x['imageUrl'] = $(el).find('.a6-ratio').find('div').css('background-image').replace(/(?:^url\(["']?|["']?\)$)/g, "");
        json.push(x);
      })
      this.setState({data: json});
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
      <View>
        {/*Running GET Request*/}
        <ScrollView>
          <View>
            { this.state.data.map((item) => (
              <View>
                <Text>{JSON.stringify(this.state.data)}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
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
const urlWeb = 'https://ln.hako.re/';
const cheerio = require('react-native-cheerio');