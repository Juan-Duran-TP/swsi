const http = require("http");
const dispatcher = new (require('httpdispatcher'))
const hostname = "localhost";
const url = require('url')
const port = 3001;



const employees = [0,0,0,0,0,0,0,0,0,0]

dispatcher.onGet("/emp", function(request, response) {
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(JSON.stringify(employees));
  response.end();
  //response.end('Page One');
}); 

dispatcher.onPost("/emp", function(request, response) {
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log("POST Received!")
    let body = [];
    const reqUrl = url.parse(request.url, true);
    console.log(reqUrl)
    //     request.on("data", function(chunk){
//         body.push(chunk);
//     }).on("end"), () => {
//         body = Buffer.concat(body).toString();
//         console.log(JSON.parse(body));
//         employees = JSON.parse(body);
//         response.end();
  
//   //response.end('Page Two');
// }
});


var server = http.createServer((request, response) => {
  
  response.setHeader("Access-Control-Allow-Origin", "*");

  // try {
  //   dispatcher.dispatch(request, response)
  // }
  // catch (error) {
  //   console.log("ignore me");
  // }
  


  if (request.method === "GET" && request.url === "/emp") {
    console.log("Contact made, sending employees")
    console.log("Sending: ", employees)
    response.write(JSON.stringify(employees));
    response.end();
  }
  if(request.method === "POST" && request.url === "/emp") {
    console.log("POST Received!")
    let body = [];
    request.on("data", function(chunk){
        body.push(chunk);
        let myObj = (JSON.parse(body.toString()))
        //console.log(parseInt(myObj['status']))
        employees[parseInt(myObj['index'])] = myObj['status']
    })//.on("end"), () => {
    //console.log(body)
      //     body = Buffer.concat(body).toString();
    //     console.log(JSON.parse(body));
    //     employees = JSON.parse(body);
    //     response.end();
    // }

  }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

