var express = require("express");
app = express();
const axios = require("axios").default;

app.set("view engine", "ejs");

const API = "http://omdbapi.com/?apikey=thewdb&s=trump";

app.listen(3002, function () {
  console.log("Movie App Server is now listening.....");
});

//creating routes

app.get("/results", function (req, res) {
  //we now use axios library to make an API call to the given address

  axios
    .get(API)
    .then(function (response) {
      // handle success

      //our data will be in response.data
      res.render("results.ejs", { data: response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});
