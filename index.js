const express = require('express');
const path = require('path');
const fs = require('fs');
const  multer = require('multer');




const upload = multer({ dest: 'public/images' });
const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
   // res.send('Todo bien');
   res.render('index');
});


app.post('/upload', upload.single('imagen'), (req, res) =>{
    fs.renameSync(req. file.path, req. file.path + '.' + req.file.
    mimetype.split('/')[1]);
    res.send('Check Imagen');
});
app. listen(3000,() => {
    console.log('Servidor escuchando en el puerto 3000');
});
