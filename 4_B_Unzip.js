var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();

// file to unzip
var file2UnCompress = fs.createReadStream (__dirname + '/3_Clock.js.gz');

// resulting unziped file
var uncompressed = fs.createWriteStream(__dirname + '/uncompressed.js');

// unzip
file2UnCompress.pipe(gunzip).pipe(uncompressed);
