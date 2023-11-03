const datos=require("./cad.js");

function Sistema(){
    this.cad=new datos.CAD();
    this.cad.conectar(function(db){
        console.log("Conectado a Mongo Atlas");
    });
    this.usuarios={};
    this.agregarUsuario=function(nick){
        let res={"nick":-1};
        if (!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick;
        }
        else{
            console.log("el nick "+nick+" está en uso");
        }
        return res;
    }
    this.obtenerUsuarios=function(){
        console.log(this.usuarios)
        return this.usuarios;
    }
    this.usuarioActivo=function(nick){
        return (nick in this.usuarios);
    }
    this.eliminarUsuario=function(nick){
        if(nick in this.usuarios){
            delete(this.usuarios[nick]);

            console.log("Usuario eliminado");
        }
        else console.log("Usuario no encontrado");
    }
    this.numeroUsuarios=function(){
        return {"num":Object.keys(this.usuarios).length}
    }

    this.usuarioGoogle=function(usr,callback){
        this.cad.buscarOCrearUsuario(usr,function(obj){
            callback(obj);
        });
    }
    
   }
   function Usuario(nick){
    this.nick=nick;
   }
   module.exports.Sistema=Sistema
   