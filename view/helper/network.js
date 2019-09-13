/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';

export default class home extends Component {
  
  getDataUsingGet() {
    //GET request
    fetch('http://ln.hako.re', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.text())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        // alert(JSON.stringify(responseJson));
        alert(responseJson);
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  getDataUsingPost() {
    //POST json
    var dataToSend = { title: 'foo', body: 'bar', userId: 1 };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {/*Running GET Request*/}
        <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />

        {/*Running POST Request*/}
        <Button title="Get Data Using POST" onPress={this.getDataUsingPost} />
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
