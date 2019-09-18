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
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import styles from './../styleSheet/stylesHome';
import FlatListItem from './itemNovel';
import FlatListData from './../requestApi/listNovel';

export default class home extends Component {
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
          source={require('../image/logo.png')}
          style={styles.logoImg}
          />
          <Text style={styles.textContent}>NyanNovel - Read novel online</Text>
        </ImageBackground>

        {/* This is the body of the application */}
        <View style={styles.viewBody}>
          <ScrollView>
            {/* This is the slider of the body */}
            <View style={{height:100,backgroundColor:'black'}}>
              <Image
                source={{uri:'https://ln.hako.re/images/global-banner.jpg?8f7329a2ff7f213a95d0b99e3961d8d5'}}
                style={{width:Dimensions.get('window').width-8,height:92,margin:4}}
              />
            </View>

            {/* This is the flatlist novel of the body */}
            <View style={styles.viewList}>
              <View style={styles.viewTitleList}>
                <Text style={styles.txtTitle}> ~ Top novel</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('More')}
                >
                  <Text style={styles.txtMore}> More >></Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={FlatListData}
                renderItem={({item,index})=>{
                  return (
                    <FlatListItem item={item} index={index}></FlatListItem>
                  )
                }}
              />
            </View>

            {/* This is the flatlist novel of the body */}
            <View style={styles.viewList}>
              <View style={styles.viewTitleList}>
                <Text style={styles.txtTitle}> ~ New novel</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('More')}
                >
                  <Text style={styles.txtMore}> More >></Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={FlatListData}
                renderItem={({item,index})=>{
                  return (
                    <FlatListItem item={item} index={index}></FlatListItem>
                  )
                }}
              />
            </View>
            
            {/* This is the flatlist novel of the body */}
            <View style={styles.viewList}>
              <View style={styles.viewTitleList}>
                <Text style={styles.txtTitle}> ~ Complete novel</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('More')}
                >
                  <Text style={styles.txtMore}> More >></Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={FlatListData}
                renderItem={({item,index})=>{
                  return (
                    <FlatListItem item={item} index={index}></FlatListItem>
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

// adb shell input keyevent 82