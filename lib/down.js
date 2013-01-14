var downloadFromUrl = require('../nodeMisc/lib/downloadFromUrl.js');
var fs = require('fs');






var z = 0;
var y = 0;
var x = 0;


var host = ['a.', 'b.', 'c.'];


var server = 'tile.cloudmade.com';

var apiKey = '/1a1b06b230af4efdbb989ea99e9841af';

var style = '/998';

var size = '/256';

var index = Math.floor(Math.random() * 3);

var currentZoom = 0;

var limits = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144];

var pathBase = "C:\cloudmadeImages";

if(!fs.exists(pathBase)){
    console.log('got');
    fs.mkdirSync(pathBase);
}


    

//for(currentZoom=0;currentZoom<19;currentZoom++){
    

