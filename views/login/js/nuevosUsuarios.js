function Usuario(nombre, apellido, edad, alias,correo, constraseña) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.alias = alias;
    this.correo = correo;
    this.constraseña = constraseña;
}

// Lista de Usuarios (Array)
var registroUsuarios = [
    new Usuario("Jhon", "Acosta", 8, "jhonacosta@gmail.com", "123"),
    new Usuario("Daniel", "Rivas", 10, "danielrivas@yavirac.es", "456"),
    new Usuario("Angie", "Pacas", 9, "angie@hotmail.com", "angiePacas")
];


  //Registras Usuarios NUEVOS - Index4

  document.getElementById("ingresar2")
  .addEventListener("click",function(){
    if(document.getElementById("nombreNuevo").value != ''){
        function obtenerNombre() {  // Obtengo el nombre del input
            var newNombre =  document.getElementById("nombreNuevo").value;
            return newNombre;
          }
          obtenerNombre();
    
          function obtenerApellido() { // Obtengo la edad del input
            var newApellido =  document.getElementById("apellidoNuevo").value;
            return newApellido;
          }
          obtenerApellido();
    
          function obtenerAlias() { // Obtengo la alias del input  
            var newAlias =  document.getElementById("aliasNueva").value;
            return newAlias;
          }
          obtenerAlias();
    
          function obtenerEdad() { // Obtengo la alias del input  
            var newEdad =  document.getElementById("edadNueva").value;
            return newEdad;
          }
          obtenerEdad();
          
          function obtenerCorreo() { // Obtengo la alias del input  
            var newCorreo =  document.getElementById("correoNuevo").value;
            return newCorreo;
          }
          obtenerCorreo();
    
          function obtenerConstraseña() { // Obtengo la alias del input  
            var newContraseña =  document.getElementById("contraseñaNueva").value;
            return newContraseña;
          }
          obtenerConstraseña();
    
          function crearUsuario() {
            var newUsu= new Usuario(obtenerNombre(), obtenerApellido(),obtenerEdad(), obtenerAlias(),obtenerCorreo(),obtenerConstraseña());
            registroUsuarios.push(newUsu);
            console.log(registroUsuarios)
          }
          crearUsuario();
          alert('Registro Exitoso')
          document.getElementById("nombreNuevo").value = "";
          document.getElementById("apellidoNuevo").value = "";
          document.getElementById("aliasNueva").value = "";
          document.getElementById("edadNueva").value = "";
          document.getElementById("correoNuevo").value = "";
          document.getElementById("contraseñaNueva").value = "";
          window.location='indexJuegos.html';
    }else{
       alert('Todos los Campos son Obligatorios')
    }

        
  });
