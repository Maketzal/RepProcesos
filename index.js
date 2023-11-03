const fs = require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");

const passport = require('passport');
const cookieSession = require("cookie-session");
const bodyParser=require("body-parser");
require("./servidor/passport-setup.js");


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

let sistema = new modelo.Sistema();

app.get("/", function(request,response){
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});

app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
});

app.use(cookieSession({
    name: 'Makegame',
    keys: ['key1', 'key2']
}));

app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.agregarUsuario(nick);
    response.send(res);
});

app.get("/obtenerUsuarios",function(request,response){
    let res=sistema.obtenerUsuarios();
    response.send(res);
});

app.get("/usuarioActivo/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.usuarioActivo(nick);
    response.send(res);
});

app.get("/numeroUsuarios",function(request,response){
    let res=sistema.numeroUsuarios();
    console.log(res.num);
    response.send(res);
});

app.get("/eliminarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.eliminarUsuario(nick);
    response.send(res);
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/google",passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/fallo' }),
    function(req, res) {
    res.redirect('/good');
});

app.get("/good", function(request,response){
    let email=request.user.emails[0].value;
    sistema.usuarioGoogle({"email":email},function(obj){
    response.cookie('nick',obj.email);
    response.redirect('/');
    });
});

app.get("/fallo",function(request,response){
    response.send({nick:"nook"})
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/enviarJwt",function(request,response){
    let jwt=request.body.jwt;
    let user=JSON.parse(atob(jwt.split(".")[1]));
    let email=user.email;
    sistema.usuarioGoogle({"email":email},function(obj){
    response.send({'nick':obj.email});
    });
});