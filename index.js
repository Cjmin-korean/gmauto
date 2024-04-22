var cors = require('cors');
var multer = require('multer');
var path = require('path');
var fs = require('fs');


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
    res.sendFile(__dirname + "/views/html/index.html");
});
app.get("/mainall", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/mainmenu.html");
});
app.get("/userui", cors(), (req, res) => {
    res.sendFile(__dirname + "/views/html/linecode.html");
});
app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/html/pwmain.html'));
});
try {
    fs.readdirSync('1');
} catch (error) {
    console.error('1 폴더가 없어 1 폴더를 생성합니다.');
    fs.mkdirSync('1');
}
// 파일 업로드를 위한 multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('ok');
});

// uploads 폴더의 정적 파일 불러오기
app.use('/1', express.static(path.join(__dirname, '1')));




app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
