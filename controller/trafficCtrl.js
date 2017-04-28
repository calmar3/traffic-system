exports.getStreetTraffic = getStreetTrafficFn;

function getStreetTrafficFn(request,response) {

    //get traffic info from request.params.name
    var hours = {
        "8-10":0.7,
        "12-13":0.5,
        "16-17":0.7,
        "19-20":0.7
    };
    var time = new Date();
    var actualHour = time.getHours();
    if (8 <= actualHour &&  actualHour< 10)
        traffic = hours["8-10"];
    else if (12 <= actualHour && actualHour < 13)
        traffic = hours["12-13"];
    else if (16 <= actualHour && actualHour < 17)
        traffic = hours["16-17"];
    else if (19 <= actualHour && actualHour< 20)
        traffic = hours["19-20"];
    else
        traffic = 0.1;
    console.log("Hour - Traffic:"+ JSON.stringify(actualHour) + JSON.stringify(traffic));
    response.status(200).send({street:request.params.name,traffic:traffic});
    return;
}

