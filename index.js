const express = require('express');
const multer = require('multer');

function fileFilter(req, file, cb) {
    const { mimetype } = file;
    if (mimetype === 'image/png' || mimetype === 'image/jpeg') {
        return cb(null, true);
    }
    // cb(null, false);
    cb(new Error('Loi dinh dang file!'));
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public');
    },
    filename(req, file, cb) {
        cb(null, req.body.username + file.originalname);
    }
});

const upload = multer({ storage, fileFilter });

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/upload', upload.single('avatar'), (req, res) => {
    console.log(req.file);
    res.send('upload thanh cong');
});

app.listen(3000, () => console.log('Server started!'));
