const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Via%20Buozzi%201%20Peschiera%20del%20garda%20Verona',
    json: true
}, (error, response, body) => {
    console.log(body);
});