const fs = require('fs');

// create file
const file = fs.createWriteStream('./big.file');

// add too much data to the file
for(let i=0; i<= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
  }

  file.end();

  // create server
const server = require('http').createServer();

server.on('request', (req, res) => {

    // use stream and pipe for better performance
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
  
});

server.listen(8000);





