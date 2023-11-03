function ControlWeb(){
    this.mostrarAgregarUsuario = function(){
        
        $('#bnv').remove();
        $('#mAU').remove();
        let cadena='<div id="mAU">';
        cadena = cadena + '<div class="card"><div class="card-body">';
        cadena = cadena + '<div class="form-group">';
        cadena = cadena + '<label for="nick">Nick:</label>';
        cadena = cadena + '<p><input type="text" class="form-control" id="nick" placeholder="Introduce un nick"></p>';
        cadena = cadena + '<button id="btnAU" type="submit" class="btn btn-primary">Submit</button>';
        cadena = cadena + '<p><div><a href="/auth/google"><img src="./cliente/img/btn_google_signin_dark_focus_web.png" style="height:40px;"></a></div></p>';
        cadena = cadena + '</div>';
        cadena = cadena + '</div></div></div>'; 

        $("#au").append(cadena);

        $("#btnAU").on("click",function(){
            let nick=$("#nick").val()
            rest.agregarUsuario(nick)
            $("#mAU").remove();
        })
    }
    this.mostrarMensaje=function(msg){
        $('#mMsg').remove();
        let cadena = '<h4 id="mMsg">'+msg+'</h4>'
        $('#msg').append(cadena)
    }
    this.comprobarSesion=function(){
        //let nick=localStorage.getItem("nick");
        let nick=$.cookie("nick");
        if (nick){
            cw.mostrarMensaje("Bienvenido al sistema, "+nick);
        }
        else{
            cw.mostrarAgregarUsuario();
            cw.init();
        }
    }
    this.salir=function(){
        $.removeCookie("nick");
        location.reload();
    }
    this.usuarios=function(){
        rest.obtenerUsuarios();
    }
    this.init=function(){
        let cw=this;
        google.accounts.id.initialize({
            client_id:"1093955630911-lvsc0isicojmj24qt6npf78k3ccfb89p.apps.googleusercontent.com", //prod
            auto_select:false,
            callback:cw.handleCredentialsResponse
        });
        google.accounts.id.prompt();
    }
    this.handleCredentialsResponse=function(response){
        let jwt=response.credential;
        //let user=JSON.parse(atob(jwt.split(".")[1]));
        //console.log(user.name);
        //console.log(user.email);
        //console.log(user.picture);
        rest.enviarJwt(jwt);
    }
}