require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");
const fs = require('fs-extra')
var searchName = process.argv.splice(3).join("-");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
});

var arg = process.argv.slice(2);

    spotify
        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });

    function myTweets() {
        var params = {
            screen_name: "Anthonyh_bootcamp"
        };
        client.get('statuses/user_timeline', {
            count: 20
        }, function (error, tweet, response) {
            if (!error) {
                console.log("========================");
                console.log("These are the last 20 tweets!.");
                console.log("========================");
                for (var i = 0; i < tweets.length; i++) {
                    console.log("------------------------");
                    console.log(
                        tweets[i].user.name + " created this tweet on " + tweets[i].created_at
                    );
                    console.log("Tweet: " + tweets[i].text);
                }
                console.log("------------------------");
                console.log("========================");
                console.log("These are the last 20 tweets!.");
                console.log("========================");
            } else {
                console.log("Error occurred: " + error);
            }
        });
    }

    function movieFinder(movie) {
        request(
            "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy",
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var result = JSON.parse(body);
                    var ratings = result.Ratings;
                    var rtRating = "not rated";
                    for (var key in ratings) {
                        var obj = ratings[key];
                        if (obj.Source === "Rotten Tomatoes") {
                            rtRating = obj.Value;
                        }
                    }
                    console.log("=============");
                    console.log("Title: " + result.Title);
                    console.log("Year: " + result.Year);
                    console.log("IMDB Rating: " + result.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + rtRating);
                    console.log("Country(s): " + result.Country);
                    console.log("Language(s): " + result.Language);
                    console.log("Plot: " + result.Plot);
                    console.log("Actors: " + result.Actors);
                    console.log("=============");
                }
            }
        );
    }
