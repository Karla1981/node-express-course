const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below and ";
let item2 = " and enter something else next to it.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.   <p>${num2}</p>
const form = () => {
  return `
  <body style="color:green; font-size: 22px" font-family: "Courier New", Courier, monospace;" >
  <p>${item} ${item2}</p>
  <form method="POST">
  <input name="item"></input>
  <input name="item2"><?item>
  <button style="color:white; background-color:lightblue; opacity: 0.6;font-size: 22px; border: none;" type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item", "item2"]) {
        item = body["item"];
        item2 = body["item2"];
      } else {
        item = "Nothing was entered.";
        item2 = "Nothing was entered here!";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});
server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
})
server.listen(3000);
console.log("The server is listening on port 3000.");
