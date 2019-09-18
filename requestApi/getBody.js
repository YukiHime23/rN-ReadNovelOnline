export function html() {
  return fetch(urlWeb, {
    method: 'GET',
    //Request Type
  })
    .then(response => response.text())
    //If response is in json then in success
    .then(text => {
      //Success
      let $ = cheerio.load(text);
      let html = $('body main').html();
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      error;
    });
}