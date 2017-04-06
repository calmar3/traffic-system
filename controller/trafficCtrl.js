var config = require('../controller/util/config');



exports.getStreetTraffic = getStreetTrafficFn;

exports.getAllCityStreetsTraffic = getAllCityStreetsTrafficFn;



function getStreetTrafficFn(request,response) {

    //get traffic info from request.params.name
    response.status(200).send({status:"S",message:"here traffic info "});
    return;
}

function getAllCityStreetsTrafficFn(request,response) {

    //get traffic info from all streets
    response.status(200).send({status:"S",message:"here traffic info "});
    return;

}

