function Sistema(){
    this.usuarios={};
    this.agregarUsuario=function(nick){
        if(nick in this.usuarios){
            console.log("Usuario ya existente");
        }
        else console.log("Usuario añadido correctamente");
    this.usuarios[nick]=new Usuario(nick);
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
        return Object.keys(this.usuarios).length
    }
    
   }
   function Usuario(nick){
    this.nick=nick;
   }
   module.exports.Sistema=Sistema
   