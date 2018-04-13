var https = require("https");

const url =
  "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries/5a2e8810758c6e4347e5ece1?$format=json"


https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    res.render("index.ejs", {data: body.DisasterDeclarationsSummaries })
    console.log(
      `state: ${body.DisasterDeclarationsSummaries.state} -`

    );
  });
});