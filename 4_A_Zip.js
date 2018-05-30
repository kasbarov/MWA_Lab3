var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

// file to zip
var file2Compress = fs.createReadStream (__dirname + '/3_Clock.js');

// result zipped file
var compressed = fs.createWriteStream(__dirname + '/3_Clock.js.gz');

// zip file
file2Compress.pipe(gzip).pipe(compressed);





