require("dotenv").config();
 var keys = require("./keys");
 var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});
console.log(spotify);
console.log(client);
