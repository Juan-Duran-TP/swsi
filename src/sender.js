const http = require('http');
const fetch = require("node-fetch")

async function sender(index, status) {  
    //console.log(index,status)
    try {
        await fetch("http://localhost:3001/emp", {
          method: "POST",
          body: JSON.stringify({index,status})
        });
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
};



export default sender;