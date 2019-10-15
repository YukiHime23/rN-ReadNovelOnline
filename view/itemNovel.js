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
  Image,
} from 'react-native';

class itemTheme extends Component{
  render() {
    return (
      <View style={{
        flex:1,
        flexDirection: 'row',
        backgroundColor: this.props.index % 2 == 0 ? 'lightgray' : 'white',
        borderBottomWidth:2,
        borderBottomColor:'crimson',
      }}>

        <Image
          source={{uri: this.props.item.imageUrl}}
          style={{width:80,height:100,margin:5}}
        >
          
        </Image>
      
        <View style={{
          flex:1,
          flexDirection: 'column',
        }}>
      
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
          }}
          ellipsizeMode='tail' 
          numberOfLines={2}
          >{this.props.item.novelTitle}</Text>
      
          <Text style={{
            fontSize: 12,
            fontStyle:'italic',
          }}
          ellipsizeMode='tail' 
          numberOfLines={3}
          >{this.props.item.volumeTitle}</Text>

          <Text style={{
            fontSize: 12,
            fontStyle:'italic',
          }}
          ellipsizeMode='tail' 
          numberOfLines={3}
          >{this.props.item.newChapTitle}</Text>
      
        </View>
      </View>
    );
  }
}

export default itemTheme;