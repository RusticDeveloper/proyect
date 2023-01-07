//Registro de Usuarios - Index 3
function Invitado(nombre, apellido, alias) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
}
var invitados = [];
document.getElementById("play")
    .addEventListener("click", function() {

        if (document.getElementById("nombre2").value != '') {
            function obtenerNombre() { // Obtengo el nombre del input

                var invitadoNombre = document.getElementById("nombre2").value;
                return invitadoNombre;

            }
            obtenerNombre();

            function obtenerApellido() { // Obtengo la edad del input

                var invitadoApellido = document.getElementById("apellido2").value;

                return invitadoApellido;
            }
            obtenerApellido();

            function obtenerAlias() { // Obtengo la edad del input

                var invitadoAlias = document.getElementById("alias").value;
                return invitadoAlias;
            }
            obtenerAlias();

            function crearJugador() {

                var nuevoInvitado = new Invitado(obtenerNombre(), obtenerApellido(), obtenerAlias());
                invitados.push(nuevoInvitado);
                console.log(invitados)
            }
            crearJugador();
            document.getElementById("nombre2").value = "";
            document.getElementById("apellido2").value = "";
            document.getElementById("alias").value = "";
            window.location = '../pagina.html';
        } else {
            alert('Los Campos son Obligatorios')
        }
        "";

    });