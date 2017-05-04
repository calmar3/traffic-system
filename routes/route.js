

module.exports = function (app) {


    var trafficCtrl = require('../controller/trafficCtrl');

    /**
     *  REST API for traffic system
     *  Returns { status:"S", traffic:%}
     */
    app.get('/street/:name', trafficCtrl.getStreetTraffic);

};
