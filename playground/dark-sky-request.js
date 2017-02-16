const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/5015a49661c69c761114d5530ba8f199/45.4396385,10.6865449',
    json: true
},(error, response, body) => {
    console.log(JSON.stringify(body.currently.temperature, undefined, 2));
});




