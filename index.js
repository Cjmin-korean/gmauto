var cors = require('cors');
const multer = require('multer');
const path = require('path');


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
const fs = require('fs');

// try {
//     fs.readdirSync('uploads');
// } catch (error) {
//     console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//     fs.mkdirSync('uploads');
// }

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, done) {
            done(null, 'views/img/');
        },
        filename: function (req, file, done) {
            done(null, file.originalname);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
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
    res.sendFile(__dirname + "/views/html/pwmain.html");
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'pwmain.html'));
});
app.post('/upload', upload.single('image'), (req, res) => {

});
app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
