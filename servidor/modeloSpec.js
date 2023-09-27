const modelo=require("./modelo.js");

describe('El sistema', function() {
  let sistema;

  beforeEach(function() {
    sistema=new modelo.Sistema()
  });

  it('inicialmente no hay usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
  });

  it('agregar usuario', function() {
    sistema.agregarUsuario("Yosef")
    expect(sistema.numeroUsuarios()).toEqual(1);
    expect("Yosef" in sistema.usuarios).toEqual(true);
  })

  it('usuario activo', function() {
    expect(sistema.usuarioActivo("Yosef")).toEqual(false);
    sistema.agregarUsuario("Yosef")
    expect(sistema.usuarioActivo("Yosef")).toEqual(true);
    sistema.eliminarUsuario("Yosef")
    expect(sistema.usuarioActivo("Yosef")).toBe(false);
  });

  it('eliminar usuario', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Yosef")
    expect(sistema.numeroUsuarios()).toEqual(1)
    sistema.eliminarUsuario("Yosef")
    expect(sistema.numeroUsuarios()).toEqual(0);
  })

  it('numero usuarios', function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Yosef")
    expect(sistema.numeroUsuarios()).toEqual(1);
    sistema.agregarUsuario("Yosef2")
    expect(sistema.numeroUsuarios()).toEqual(2);
    sistema.eliminarUsuario("Yosef")
    expect(sistema.numeroUsuarios()).toEqual(1);
  });

  it('lista usuarios', function() {
    let num=sistema.obtenerUsuarios()
    expect(sistema.numeroUsuarios()).toEqual(0);
    expect(num).toEqual(sistema.usuarios)
    sistema.agregarUsuario("Yosef")
    sistema.agregarUsuario("Yosef2")
    num=sistema.obtenerUsuarios()
    expect(sistema.numeroUsuarios()).toEqual(2);
    expect(num).toEqual(sistema.usuarios)
  })

})