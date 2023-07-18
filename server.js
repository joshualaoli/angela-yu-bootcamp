const express = require ('express');
const app = express ();

app.get ('/', function (req, res) {
    res.send ('Hello Joshua')
})

app.get ('/contact' ,  function (req, res) {
    res.send ('Contact me at hello.joshualaoli@outlook.com')
})

app.get ('/about', function (req, res) {
    res.send ('Hello Joshua Laoli here')
    ')
})

app.listen (3000, function () {
    console.log ('Hey, we use port 3000')
})