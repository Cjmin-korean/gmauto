const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://gmauto.xyz");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 정적 파일 불러오기
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
});

app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
});

app.get("/mainall", (req, res) => {
    res.sendFile(__dirname + "/views/html/mainmenu.html");
});

app.get("/userui", (req, res) => {
    res.sendFile(__dirname + "/views/html/linecode.html");
});

app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});

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

app.post('/uploads', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('ok');
});

// uploads 폴더의 정적 파일 불러오기
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
