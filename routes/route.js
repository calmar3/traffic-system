var express = require('express');


module.exports = function (app) {


    var trafficCtrl = require('../controller/trafficCtrl');


    app.get('/street/:name', trafficCtrl.getStreetTraffic);

};
