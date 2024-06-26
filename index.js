const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');



console.log('ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=')

var app = express();
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



const storage = multer.diskStorage({
    destination: function (req, file, done) {
        done(null, 'views/img/');
    },
    filename: function (req, file, done) {
        done(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
});

// 정적 파일 불러오기
app.use(express.static('views'));

app.get("/", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
});
app.get("/main", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
});
app.get("/mainall", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/mainmenu.html");
});
app.get("/userui", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/linecode.html");
});
app.get("/selectpwmain", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/0.html");
});


app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).send(`File ${req.file.originalname} uploaded successfully.`);
});

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
