const urlWeb = 'https://ln.hako.re/truyen/2624-kou-2-ni-timeleap-shita-boku-ga-touji-sukidatta-sensei-ni-kokutta-kekka/c56561-chuong-60-be-boi-phan-2';
const cheerio = require('react-native-cheerio');

const list = fetch(urlWeb, {
    method: 'GET',
    //Request Type
  })
  .then(response => response.text())
  //If response is in json then in success
  .then(text => {
    //Success
    const $ = cheerio.load(text);
    const container1 = $('main .container').eq(1);
    // const x = $('main.row',container1).find('a').nextAll().attr('href');
    // const x = $('main.row',container1).find('a').eq(2) .text();
    let json = [];
    $('main.row',container1)
    .find('.series-title').find('a').each((i, el) => {
      let x={};
      x['title'] = $(el).eq(0).attr('title');
      x['href'] = $(el).eq(0).attr('href');
      json.push(x);
    })
  })
  //If response is not in json then in error
  .catch(error => {
    //Error
    console.error(error);
  });

module.exports = list;