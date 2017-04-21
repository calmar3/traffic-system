//var config = require('../controller/util/config');



exports.getStreetTraffic = getStreetTrafficFn;

exports.getAllCityStreetsTraffic = getAllCityStreetsTrafficFn;



function getStreetTrafficFn(request,response) {

    //get traffic info from request.params.name
    var values = [0.5,0.4,0.7];
    var value = values[Math.floor(Math.random()*values.length)];
    response.status(200).send({street:request.params.name,traffic:value});
    return;
}

function getAllCityStreetsTrafficFn(request,response) {

    //get traffic info from all streets
    response.status(200).send({status:"S",message:"here traffic info "});
    return;

}

