var downloadFromUrl = require('./downloadFromUrl.js');

var fileUrl = 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Planisph%C3%A6ri_c%C5%93leste.jpg/800px-Planisph%C3%A6ri_c%C5%93leste.jpg';
var path = "C:\\testdl\\";

downloadFromUrl(fileUrl, path); 