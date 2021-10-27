const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const exceldata = require('./js/helper');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(5000, () => {
    console.log("Listening to Port 5000")
})

app.get('/sign-up', (req, res) => {
    res.render('index');
})

app.post('/sign-up', (req, res) => {
    try{
        console.log(req.body);
        // console.log(res.body);
        var newUser = {
            username: req.body.username,
            password: req.body.password,
            ph_no: req.body.ph_no
        }
        exceldata.fun_name(newUser);
        res.redirect('/login');
    } catch(e) {
        console.log("Error: ", e);
        res.redirect('/sign-up');
    }
})

app.get('/login', (req, res) => {
    res.render('login')
})

