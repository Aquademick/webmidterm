const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const port = 3000;
const http = require("https");
app.set('view engine', 'ejs');

const options = {
    "method": "GET",
    "hostname": "quotes15.p.rapidapi.com",
    "port": null,
    "path": "/quotes/random/",
    "headers": {
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        "X-RapidAPI-Key": "b2b22bd1eemsh7abec8758689230p1d5a9ejsnf3c16c5f342c",
        "useQueryString": true
    }
};

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.use("/sign_up", (req,res)=>{
    let register = req.body.register
    let sign_in = req.body.signin

    res.send("");
})

app.get('/register',((req, res) => {
    res.sendFile(__dirname+'/register.html')
}))
app.post('/register',((req, res) => {
    res.sendFile(__dirname+'/register.html')
}))
app.get('/api',((req, res) => {
    res.sendFile(__dirname+'/api.html')
}))
app.post('/api',((req, res) => {
    res.sendFile(__dirname+'/api.html')
}))
app.get('/index',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.post('/index',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.get('/sign_in',((req, res) => {
    res.sendFile(__dirname+'/sign_in.html')
}))
app.post('/sign_in',((req, res) => {
    res.sendFile(__dirname+'/sign_in.html')
}))

app.post('/buy', (req,res)=>{
    res.render(__dirname + "/views/Buy.ejs", {name: "green mile"});
})

app.get('/quote', (req,res)=>{
    const request = http.request(options, function (response) {
        const chunks = [];

        response.on("data", function (chunk) {
            chunks.push(chunk);
        });

        response.on("end", function () {
            const body = Buffer.concat(chunks);
            const information = JSON.parse(body);
            res.render(__dirname + "/views/Quotes.ejs", {content: information.content, author: information.originator.name})
        });
    });

    request.end();
})


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
/*
 * in order to fix errors:
 * 1) add a route '/home' with get method which will send 'sign_in.html' as a response
 * 2) go to the file "index.html" and change <a href="sign_in.html"> to <a href="sign_in.html">
 */