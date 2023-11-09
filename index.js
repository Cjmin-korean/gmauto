var cors = require('cors');


console.log('ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = require('./routes')(app);
var server = app.listen(port, function () { console.log("Express server has started on port " + port) });

const PORT = 3001;

const corsOptions = {
    origin: '*',
    credentials: true,
};

console.log('corsOptions', corsOptions)
console.log('process.env', process.env.PORT)
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://gmauto.xyz");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 정적 파일 불러오기
app.use(express.static(__dirname + "/views"));

app.get("/", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
});
app.get("/main", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/mainmenu.html");
});



app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
