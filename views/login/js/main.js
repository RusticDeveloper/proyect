//Iniciar Sesion - Index2
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
    new Usuario("Jhon", "Acosta", 8,"larry", "jhonacosta@gmail.com", "123"),
    new Usuario("Daniel", "Rivas", 10,"chino", "danielrivas@yavirac.es", "456"),
    new Usuario("Angie", "Pacas", 9,"patitas", "angie@hotmail.com", "angiePacas")
];


//Recuperar Datos ingresados en el Array
document.getElementById("ingresar")
    .addEventListener("click", function () {
        var correoUsuario = document.getElementById("nombre").value;
        var contraUsuario = document.getElementById("contraseña").value;

        console.log(correoUsuario);

        var usuarios = registroUsuarios.find(data =>
            data.correo === correoUsuario
        );
        var usuarios = registroUsuarios.find(data =>
            data.constraseña === contraUsuario
        );

        if (typeof usuarios === "undefined")
            alert("Usuario No registrado");

        else {
            window.location='indexJuegos.html';
            console.log("Ingreso  " + contraUsuario + contraUsuario)
            document.getElementById("nombre").value = "";
            document.getElementById("contraseña").value = "";
        }
    });

  