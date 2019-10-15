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

export default class moreNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsInfo:[],
      jsVol:[]
    };
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
    this.renTomtat = this.renTomtat.bind(this);
    this.renInfo = this.renInfo.bind(this);
    this.renVolume = this.renVolume.bind(this);

  }
  componentDidMount() {
    this.getDataUsingGet();
  }
  getDataUsingGet() {
    //GET request
    fetch(item.novelHref, {
      method: 'GET',
      //Request Type
    })
    .then(response => response.text())
    //If response is in json then in success
    .then((text) => {
      //Success
      const $ = cheerio.load(text);
      const container1 = $('main .container').eq(1);
      let jsInfo = [];
      $('main.section-body',container1).each((i, el) => {
        let x={};
        x['title'] = $(el).find('.series-name').find('a').text();
        x['info'] = [];
        $(el).find('.series-information').each((i, el2) => {
          let y={};
          y['author'] = $(el2).children('.info-item').eq(0).text().replace(/\s+/g, ' ').trim();
          y['artist'] = $(el2).children('.info-item').eq(1).text().replace(/\s+/g, ' ').trim();
          y['status'] = $(el2).children('.info-item').eq(2).text().replace(/\s+/g, ' ').trim();
          x['info'].push(y);
        })
        x['tomtat'] = $(el).find('.summary-content').text().trim();
        jsInfo.push(x);
      })
      this.setState({jsInfo: jsInfo});

      let jsVol = [];
      $('section.volume-list',container1).each((i, el) => {
        let x={};
        x['volume'] = $(el).find('.sect-title').find('a').text();
        x['hrefVol'] = $(el).find('.sect-title').find('a').attr('href');
        jsVol.push(x);
      })
      this.setState({jsVol: jsVol});
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
  }
  renTitle(){
    while(this.state.jsInfo.length){
      return <Text style={styles.txtTitle}>{this.state.jsInfo[0].title}</Text>
    }
  }
  renInfo(){
    while(this.state.jsInfo.length){
      return <Text style={styles.txtInfoChild}>
                  <Text>{this.state.jsInfo[0].info[0].author}{"\n"}</Text>
                  <Text>{this.state.jsInfo[0].info[0].artist}{"\n"}</Text>
                  <Text>{this.state.jsInfo[0].info[0].status}{"\n"}</Text>
              </Text>
    }
  }
  renTomtat(){
    while(this.state.jsInfo.length){
      return <Text style={styles.txtInfoChild}>
                <Text style={{fontSize: 14,fontWeight:'bold',}}>Tom tat:{"\n"}</Text>
              {this.state.jsInfo[0].tomtat}</Text>
    }
  }
  renVolume(){
    while(this.state.jsVol.length){
      return this.state.jsVol.map((item,index) => (
              <TouchableOpacity
                key = {index}
                style={styles.txtVolChild}
                onPress={() => this.props.navigation.navigate('ChapNovel',{hrefVol: item.hrefVol})}
              >
                <Text style={{fontSize: 16,}}>{item.volume}{"\n"}</Text>
              </TouchableOpacity>
            ))
    }
  }

  render() {
    const { navigation } = this.props;
    item = navigation.getParam('item', 'item defaut');

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
          <Text style={css.textContent}>YukiNovel - Read novel online</Text>
        </ImageBackground>

        {/* This is the body of the application */}
        <View style={css.viewBody}>
          <ScrollView>
            <View>
              <View style={styles.mainDetail}>
                <Image
                  source={{uri:item.imageUrl}}
                  style={styles.imgNovel}
                />
                <View style={styles.info}>
                  {this.renTitle()}
                  {this.renInfo()}
                  {this.renTomtat()}
                </View>
              </View>
              <View style={styles.listVolume}>
                <Text style={{fontSize: 14,fontWeight:'bold',}}>List volume:{"\n"}</Text>
                {this.renVolume()}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    ); 
  }
}

let item = '';
const cheerio = require('react-native-cheerio');