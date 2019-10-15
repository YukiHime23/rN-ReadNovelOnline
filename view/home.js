/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button, 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import css          from './../styleSheet/stylesMain';
import styles       from './../styleSheet/stylesHome';
import FlatListItem from './itemNovel';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewChap:[],
      dataCompose:[],
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
      const section1 = $('section.index-section',container1).eq(0);
      const section2 = $('section.index-section',container1).eq(1);
      let json1 = [];
      $('main.row',section1).find('div.thumb-item-flow').each((i, el) => {
        let x={};
        x['newChapTitle'] = $(el).find('.thumb-wrapper').find('a').attr('title');
        x['newChapHref'] = $(el).find('.thumb-wrapper').find('a').attr('href');
        x['volumeTitle'] = $(el).find('.thumb-wrapper').find('.thumb-detail').find('.volume-title').text();
        x['novelTitle'] = $(el).find('.series-title').find('a').attr('title');
        x['novelHref'] = $(el).find('.series-title').find('a').attr('href');
        x['imageUrl'] = $(el).find('.a6-ratio').find('div').css('background-image').replace(/(?:^url\(["']?|["']?\)$)/g, "");
        json1.push(x);
      })
      this.setState({dataNewChap: json1});

      let json2 = [];
      $('main.row',section2).find('div.thumb-item-flow').each((i, el) => {
        let x={};
        x['newChapTitle'] = $(el).find('.thumb-wrapper').find('a').attr('title');
        x['newChapHref'] = $(el).find('.thumb-wrapper').find('a').attr('href');
        x['volumeTitle'] = $(el).find('.thumb-wrapper').find('.thumb-detail').find('.volume-title').text();
        x['novelTitle'] = $(el).find('.series-title').find('a').attr('title');
        x['novelHref'] = $(el).find('.series-title').find('a').attr('href');
        x['imageUrl'] = $(el).find('.a6-ratio').find('div').css('background-image').replace(/(?:^url\(["']?|["']?\)$)/g, "");
        json2.push(x);
      })
      this.setState({dataCompose: json2});
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });
  }
  // clickBackToTop(){
  //   this.scroll.scrollTo({x: 0, y: 0, animated: true});
  // }
  // backToTop(){
  //   return (<TouchableOpacity
  //             activeOpacity={0.7}
  //             onPress={this.clickBackToTop}
  //             style={css.TouchableOpacityStyle}>
  //             <Image
  //                source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
  //               }}
  //               style={css.FloatingButtonStyle}
  //             />
  //           </TouchableOpacity>)
  // }

  render() {
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
            {/* This is the slider of the body */}
            <View style={{height:100,backgroundColor:'black'}}>
              <Image
                source={{uri:'https://ln.hako.re/images/global-banner.jpg?8f7329a2ff7f213a95d0b99e3961d8d5'}}
                style={{width:Dimensions.get('window').width-8,height:92,margin:4}}
              />
            </View>

            {/* This is the flatlist New Chap novel of the body */}
            <View style={styles.viewList}>
              <View style={styles.viewTitleList}>
                <Text style={styles.txtTitle}> ~ New Chapter</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MoreNovel')}
                >
                  <Text style={styles.txtMore}> More >></Text>
                </TouchableOpacity>
              </View> 
              <FlatList
                data={this.state.dataNewChap.slice(0, -1)}
                renderItem={({item,index})=>{
                  return (
                    <TouchableHighlight
                      onPress={() => this.props.navigation.navigate('DetailNovel',{item: item})}
                    >
                      <FlatListItem item={item} index={index}></FlatListItem>
                    </TouchableHighlight>           
                  )
                }}
              />
            </View>

            {/* This is the flatlist New novel of the body */}
            <View style={styles.viewList}>
              <View style={styles.viewTitleList}>
                <Text style={styles.txtTitle}> ~ Compose novel</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MoreNovel')}
                >
                  <Text style={styles.txtMore}> More >></Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.dataCompose.slice(0, -1)}
                renderItem={({item,index})=>{
                  return (
                    <TouchableHighlight
                      onPress={() => this.props.navigation.navigate('DetailNovel',{item: item})}
                    >
                      <FlatListItem item={item} index={index}></FlatListItem>
                    </TouchableHighlight>      
                  )
                }}
              />
            </View>

            {/* This is follow the page of the body */}
            <View style={{height:100,backgroundColor:'black'}}>
              <Image
                source={{uri:'http://static.nhanam.com.vn/thumb/0x0/crop/Features/Images/2019/4/25/6HHNAJ7E.jpg'}}
                style={{width:Dimensions.get('window').width-8,height:92,margin:4}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    ); 
  }
}

const urlWeb = 'https://ln.hako.re/';
const cheerio = require('react-native-cheerio');
// adb shell input keyevent 82