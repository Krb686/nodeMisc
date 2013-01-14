//Dependencies
var fs = require('fs');
var http = require('http');
var url = require('url');


function downloadFromUrl (fileUrl, path) {
    var fileName = fileUrl.split('/').pop();

    var options = {
        host: url.parse(fileUrl).host,
        port: 80,
        path: url.parse(fileUrl).pathname
    };
    
    var file = fs.createWriteStream(path + fileName);
    
    http.get(options, function(res) {
        res.on('data', function(data) {
                file.write(data);
            }).on('end', function() {
                file.end();
                console.log('-downloaded ' + fileName + ' to ' + path);
            });
    });
}

module.exports = downloadFromUrl;