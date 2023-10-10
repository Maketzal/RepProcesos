function ControlWeb(){
    this.mostrarAgregarUsuario = function(){
        let cadena='<div id="mAU" class="form-group">';
        cadena = cadena + '<label for="usr">Name:</label>';
        cadena = cadena + '<input type="text" class="form-control" id="nick">'
        cadena = cadena + '<button id="btnAU" type="submit" class="btn btn-primary">Submit</button>'
        cadena = cadena + '</div>'

        $("#au").append(cadena);

        $("#btnAU").on("click",function(){
            let nick=$("#nick").val()
            rest.agregarUsuario(nick)
            $("#mAU").remove();
        })
    }
}