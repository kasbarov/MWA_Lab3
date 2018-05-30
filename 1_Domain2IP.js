var dns = require('dns');

dns.resolve4('www.google.edu',(err, addresses)=>{

    if (err) throw err;

 addresses.forEach((elem)=>{
    console.log(elem);
 }) ; 
});