var cors = require('cors');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
console.log('')
var router = require('./routes')(app);
// // [RUN SERVER]
var server = app.listen(port, function () { console.log("Express server has started on port " + port) });

// const express = require("express");
// const app = express();
const PORT = 3001;

const corsOptions = {
    origin: '*',
    credentials: true,
};
console.log('corsOptions', corsOptions)
console.log('process.env', process.env.PORT)
app.use(cors(corsOptions));

// app.use(express.static(__dirname + "/views/"));

// 라우팅 정의.start.html
app.get("/", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/main/index.html");
});


app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
