const request = require('request');

var getWeather = (latidue, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/5015a49661c69c761114d5530ba8f199/${latidue},${longitude}`,
        json: true
    },(error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
