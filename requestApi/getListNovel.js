import React from 'react';

const urlWeb = 'https://ln.hako.re/danh-sach';
const cheerio = require('react-native-cheerio');

function getDataUsingGet() {
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
    const container1 = $('main .container').eq(1);
    let json = [];
    $('main.row',container1)
    .find('.thumb-item-flow ').each((i, el) => {
      let x={};
      x['title'] = $(el).find('.series-title').find('a').attr('title');
      x['href'] = $(el).find('.series-title').find('a').attr('href');
      x['img'] = $(el).find('.a6-ratio').find('div').css('background-image').replace(/(?:^url\(["']?|["']?\)$)/g, "");
      json.push(x);
    })
    return json;
  })
  //If response is not in json then in error
  .catch(error => {
    //Error
    alert(JSON.stringify(error));
    console.error(error);
  });
}

export default getDataUsingGet();