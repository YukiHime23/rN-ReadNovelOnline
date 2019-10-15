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
import css from './../styleSheet/stylesMain';
import styles from './../styleSheet/stylesDetail';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
    this.renTitle = this.renTitle.bind(this);
    this.renContent = this.renContent.bind(this);
  }
  componentDidMount() {
    this.getDataUsingGet();
  }
  getDataUsingGet() {
    //GET request
    fetch(hrefChap, {
      method: 'GET',
      //Request Type
    })
    .then(response => response.text())
    //If response is in json then in success
    .then((text) => {
      //Success
      const $ = cheerio.load(text);
      const container1 = $('main#mainpart div.container');
      
      let json = [];
      $('div.reading-content',container1).each((i, el) => {
        let x={};
        x['title']= [];
        $(el).find('.title-top').each((i, el2) => {
          let y={};
          y['volumeName'] = $(el2).find('h2').text();
          y['chapName']   = $(el2).find('h4').text();
          y['more']       = $(el2).find('h5').text();
          x['title'].push(y);
        });

        x['text']= [];
        $(el).find('#chapter-content').find('p').each((i, el2) => {
          let y={};
          y['p'] = $(el2).text();
          x['text'].push(y);
        })

        json.push(x);
      })
      this.setState({content: json});
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
  }
  renTitle(){
    while(this.state.content.length){
      return this.state.content[0].title.map((item,index) => (
              <View>
                <Text style={styles.txtTitle}>{item.volumeName}{"\n"}</Text>
                <Text style={styles.txtTitleSmall}>{item.chapName}{"\n"}</Text>
                <Text style={styles.txtTitleSmall}>{item.more}{"\n"}</Text>
              </View>
            ))
    }
  }
  renContent(){
    while(this.state.content.length){
      return this.state.content[0].text.map((item,index) => (
              <Text>
                  <Text>{item.p}{"\n"}</Text>
              </Text>
            ))
    }
  }

  render() {
    const { navigation } = this.props;
    hrefChap = navigation.getParam('hrefChap', 'hrefChap defaut');

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
              <View style={styles.mainDetail}>
                {this.renTitle()}
              </View>
              <View>
                {this.renContent()}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    ); 
  }
}

let hrefChap = '';
const cheerio = require('react-native-cheerio');