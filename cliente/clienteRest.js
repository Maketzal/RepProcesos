function ClienteRest(){
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
    this.agregarUsuario2=function(nick){
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
}
    