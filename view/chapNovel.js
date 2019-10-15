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
      dataHeader:[],
      chapter:[]
    };
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
    this.renImage = this.renImage.bind(this);
    this.renTitle = this.renTitle.bind(this);
    this.renChapter = this.renChapter.bind(this);
  }
  componentDidMount() {
    this.getDataUsingGet();
  }
  getDataUsingGet() {
    //GET request
    fetch(hrefVol, {
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
        x['img'] = $(el).find('.img-in-ratio').css('background-image').replace(/(?:^url\(["']?|["']?\)$)/g, "");

        x['title'] = [];
        $(el).find('.series-name-group').each((i, el2) => {
          let y={};
          y['volumeName'] = $(el2).find('.volume-name').find('a').text();
          y['seriesName'] = $(el2).children('.series-name').find('a').text();
          x['title'].push(y);
        })

        x['info'] = [];
        $(el).find('.series-information').each((i, el2) => {
          let y={};
          y['author'] = $(el2).children('.info-item').eq(0).text().replace(/\s+/g, ' ').trim();
          y['artist'] = $(el2).children('.info-item').eq(1).text().replace(/\s+/g, ' ').trim();
          y['update'] = $(el2).children('.info-item').eq(2).text().replace(/\s+/g, ' ').trim();
          x['info'].push(y);
        })
        jsInfo.push(x);
      })
      this.setState({dataHeader: jsInfo});

      let jsChap = [];
      $('main.sect-body',container1).find('ul.list-chapters').find('li').each((i, el) => {
        let x={};
        x['chapName']= $(el).find('.chapter-name').find('a').attr('title');
        x['chapHref']= $(el).find('.chapter-name').find('a').attr('href');    
        x['timeUpdate']= $(el).find('.chapter-time').text();  
        jsChap.push(x);
      })
      this.setState({chapter: jsChap});
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
  }
  renImage(){
    while(this.state.dataHeader.length){
      return <Image
                source={{uri:this.state.dataHeader[0].img}}
                style={styles.imgNovel}
              />
    }
  }
  renTitle(){
    while(this.state.dataHeader.length){
      return this.state.dataHeader[0].title.map((item,index) => (
              <View>
                <Text style={styles.txtTitle}>{item.volumeName}{"\n"}</Text>
                <Text style={styles.txtTitleSmall}>{item.seriesName}{"\n"}</Text>
              </View>
            ))
    }
  }
  renInfo(){
    while(this.state.dataHeader.length){
      return this.state.dataHeader[0].info.map((item,index) => (
              <Text style={styles.txtInfoChild}>
                  <Text>{item.author}{"\n"}</Text>
                  <Text>{item.artist}{"\n"}</Text>
                  <Text>{item.update}{"\n"}</Text>
              </Text>
            ))
    }
  }
  renChapter(){
    while(this.state.chapter.length){
      return this.state.chapter.map((item,index) => (
              <TouchableOpacity
                key = {index}
                style={styles.txtVolChild}
                onPress={() => this.props.navigation.navigate('ReadChap',{hrefChap: item.chapHref})}
              >
                <Text>{item.chapName}{"\n"}</Text>
              </TouchableOpacity>
            ))
    }
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
              <View style={styles.mainDetail}>
                {this.renImage()}
                {this.renTitle()}
                <View style={styles.info}>
                  {this.renInfo()}
                </View>
              </View>
              <View style={styles.listVolume}>
                <Text style={{fontSize: 14,fontWeight:'bold',}}>List chapter:{"\n"}</Text>
                {this.renChapter()}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    ); 
  }
}

let hrefVol = '';
const cheerio = require('react-native-cheerio');