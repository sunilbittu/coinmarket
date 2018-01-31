
var request = require('request');

module.exports = {
    performRequest: function (url, method, data, success, fail) {
    request({
        url: url,
        method: method,
        json: true,
        headers: {
            "content-type": "application/json"
        },
        body: data
    }, function (error, response, body) {
        console.log('performing request to: ' + JSON.stringify(body));
        if (error) {
           
            fail(error);
    
        } else {
            success(body);
        }
    });
},
getSourceData : function() {

    var source = {
        
    };

    return source;
}

}