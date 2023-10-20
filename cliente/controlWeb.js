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
        let nick=$.cookie("nick");
        if (nick){
            cw.mostrarMensaje("Bienvenido al sistema, "+nick);
        }
        else{
            cw.mostrarAgregarUsuario();
        }
    }
    this.salir=function(){
        $.removeCookie("nick");
        location.reload();
        cw.mostrarMensaje("Sesión cerrada correctamente");
    }
       
}