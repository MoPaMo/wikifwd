//import express
const express = require("express");
//require axios
const axios = require("axios");

// create express server
const app = express();

//get requests for /
app.get("/", (req, res) => {
res.sendFile('index.html' , { root : __dirname});})


app.get("/style.css", (req, res) => {
  res.sendFile("style.css", { root: __dirname });
});
app.get("/script.js", (req, res) => {
  res.sendFile("client.js", { root: __dirname });
});
app.get("/w/*", (req, res) => {
  let r = req.originalUrl;
  res.redirect("https://en.wikipedia.org/" + r);
});

app.get("/api/*", (req, res) => {
  // get wikipedia article for name
  const name = req.path;
  //search for name on wikipedia
  const url = `https://en.wikipedia.org${name}`;

  // get content from  url using axios
  axios
    .get(url)
    .then((response) => {
      // get html from response
      // send first paragraph as response
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      // send error if error
      res.send(error);
    });
});

//get requests for /w/:name
app.get("/wiki/:name", (req, res) => {
  // get wikipedia article for name
  const name = req.params.name;
  //search for name on wikipedia
  const url = `https://en.wikipedia.org/wiki/${name}`;

  // get content from  url using axios
  axios
    .get(url)
    .then((response) => {
      // get html from response
      const html = response.data;
      // send first paragraph as response
      res.send(html + '<script src="/script.js"></script>');
    })
    .catch((error) => {
      console.log(error);
      // send error if error
      res.send(error);
    });
});
app.get("/search", (req,res)=>{
res.sendFile('index.html' , { root : __dirname});})
//listen on port 3000
app.listen(3000, () => {
  console.log("listening on port 3000");
});
