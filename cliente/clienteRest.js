function ClienteRest(){

    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            let msg="El nick "+nick+" está ocupado";
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado");
                msg="Bienvenido al sistema, "+nick;
                $.cookie("nick", nick);
            }
            else{
                console.log("El nick ya está ocupado");
            }
            cw.mostrarMensaje(msg);
        });
    }

    this.obtenerUsuarios=function(){
        $.ajax({
            type:'GET',
            url:'/obtenerUsuarios/',
            success:function(data){
                console.log("Mostrando usuarios")
                return data
            },
            contentType:'application/json'
            });
    }

    this.numeroUsuarios=function(){
        $.ajax({
            type:'GET',
            url:'/obtenerUsuarios/',
            success:function(){
                console.log("Mostrando numero de usuarios")
            },
            contentType:'application/json'
            });
    }

    this.eliminarUsuario=function(nick){
        $.ajax({
            type:'GET',
            url:'/eliminarUsuario/'+nick,
            success:function(data){
                if (data.nick!=-1){
                    console.log("Usuario "+nick+" ha sido eliminado")
                }
                else{
                    console.log("El usuario no existe");
                }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'
            });
    }
}
    