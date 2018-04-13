// var https = require("https");

// const url =
//   "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries/5a2e8810758c6e4347e5ece1?$format=json"


// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     res.render("index.ejs", {data: body.DisasterDeclarationsSummaries })
//     console.log(
//       `state: ${body.DisasterDeclarationsSummaries.state} -`

//     );
//   });
// });


var express = require('express')
var app = express()
var path = ('path')
var http = require('http')
var https = require('https');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Views'));

function get_json(url, callback) {
  https.get(url, function(res) {
      var body = '';
      res.on('data', function(chunk) {
          body += chunk;
      });

      res.on('end', function() {
          var response = JSON.parse(body);
// call function ----v
          callback(response);
      });
  });
}

       // -----------the url---v         ------------the callback---v
var mydata = get_json("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries", function (resp) {
  console.log(mydata)
});

app.get('/',function(req,res){
    res.sendFile('./index.html');
    //It will find and locate index.html from View or Scripts
  });

var fs = require("fs");


app.listen(process.env.PORT || 3000)