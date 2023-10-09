function ClienteRest(){
    /*
    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
            }
            else{
                console.log("El nick ya está ocupado");
            }
        })
    }
    */
    this.agregarUsuario=function(nick){
        $.ajax({
            type:'GET',
            url:'/agregarUsuario/'+nick,
            success:function(data){
                if (data.nick!=-1){
                    console.log("Usuario "+nick+" ha sido registrado")
                }
                else{
                    console.log("El nick ya está ocupado");
                }
            },
            error:function(xhr, textStatus, errorThrown){
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType:'application/json'
            });
    }

    this.obtenerUsuarios=function(){
        $.ajax({
            type:'GET',
            url:'/obtenerUsuarios/',
            success:function(){
                console.log("Mostrando usuarios")
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
    