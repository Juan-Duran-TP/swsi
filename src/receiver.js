const http = require('http');


function receiver() {  
  return new Promise((resolve, reject) => {

    // construct the http options
    let opts = {
      host: 'http://localhost:42069',
      path: '/emp'
    };

    // create a callback function to handle the response
    function callback(res) {
      let buffers = [];
      res.on('data', (buffer) => buffers.push(buffer));
      res.on('error', reject);
      res.on('end', () => res.statusCode === 200 
          ? resolve(Buffer.concat(buffers))
          : reject(Buffer.concat(buffers)));
    }

    // initiate the http request
    let req = http.request(opts, callback);
    req.on('error', reject);
    req.end();

  });
}



export default receiver;