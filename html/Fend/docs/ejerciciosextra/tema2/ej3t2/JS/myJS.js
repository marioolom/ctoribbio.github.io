var arrayCiudades = new Array();
var ciudad = new Array(8);
var seguir=true;
var usuario= prompt("Introduce tu usuario");
while (seguir == true) {
    var menu = parseInt(prompt("Introduce la opcion que quieres.\n1.-Introducir Ciudad\n 2.-Menú de Informes\n 3.- Visualizar Informacion de todas las ciudades\n 4.- Salir"));
    switch (menu) {
        case 1:
            do {
                ciudad[0] = prompt("Introduce el nombre de la ciudad");
            } while (isNaN(ciudad[0]) == false)

            do {
                ciudad[1] = prompt("Introduce el numero de habitamtes");
            } while (isNaN(parseInt(ciudad[1])) || ciudad[1] < 0)

            do {
                ciudad[2] = prompt("Introduce el porcentaje de habitantes mujeres");
            } while (isNaN(parseInt(ciudad[2])) || ciudad[2] > 100 || ciudad[2] <= 0)

            do {
                ciudad[3] = prompt("Introduce el numero de vehiculos");
            } while (isNaN(parseInt(ciudad[3])))

            do {
                ciudad[4] = prompt("Introduce el porcentaje de inmigrantes");
            } while (isNaN(parseInt(ciudad[4])))

            do {
                ciudad[5] = prompt("Introduce el porcentaje de desempleados");
            } while (isNaN(parseInt(ciudad[5])))

            do {
                ciudad[6] = prompt("Introduce el numero de menores de edad");
            } while (isNaN(parseInt(ciudad[6])))

            do {
                ciudad[7] = prompt("Introduce el porcentaje de millonarios");
            } while (isNaN(parseInt(ciudad[7])))


            arrayCiudades.push(ciudad);
            ciudad = [];
            break;
        case 2:
            if (arrayCiudades.length == 0) {
                alert("Antes de visualizar datos, debes introducir alguno.")
                continue;
            } else {
                for (var i = 0; i < arrayCiudades.length; i++) {
                    var continuar = parseInt(prompt("MENU DE INFORME DE " + arrayCiudades[i][0].toUpperCase() + "\n --------------------------------\nIntroduce que informe quieres visualizar \n 1.-Numero de Mujeres \n 2.-Numero de Inmigrantes(Solo Administradores)\n 3.-Numero de vehiculos/habitante\n 4.-Numero de habitantes desempleados\n 5.- Numero de millonarios\n 6.- Siguiente ciudad"));
                    while (continuar != 6) {
                        switch (continuar) {
                            case 1:
                                alert("En " + arrayCiudades[i][0] + " hay un " + arrayCiudades[i][2] + "% de mujeres, es decir " + (arrayCiudades[i][1] * arrayCiudades[i][2] / 100) + " mujeres en toda la ciudad\n");
                                break;
                            case 2:
                                if(usuario.toLowerCase()!="admin"){
                                    alert("No tienes permisos para hacer esto!!");
                                    break;
                                }else{
                                alert("En " + arrayCiudades[i][0] + " hay un " + arrayCiudades[i][4] + "% de inmigrantes, es decir " + (arrayCiudades[i][1] * arrayCiudades[i][4] / 100) + " inmigrantes en toda la ciudad\n");
                                break;
                                }
                            case 3:
                                alert("En " + arrayCiudades[i][0] + " hay " + arrayCiudades[i][3] + " vehiculos, es decir " + (arrayCiudades[i][3] / arrayCiudades[i][1]) + " vehiculos por habitante\n");
                                break;
                            case 4:
                                alert("En " + arrayCiudades[i][0] + " hay un " + arrayCiudades[i][5] + "% de desempleados, es decir " + (arrayCiudades[i][1] - (arrayCiudades[i][1] * arrayCiudades[i][6] / 100) * arrayCiudades[i][5] / 100) + " habitantes desempleados, excluyendo menores de edad\n");
                                break;
                            case 5:
                                if(usuario.toLowerCase()!="admin"){
                                    alert("No tienes permisos para hacer esto!!");
                                    break;
                                }else{
                                alert("En " + arrayCiudades[i][0] + " hay un " + arrayCiudades[i][7] + "% de millonarios, es decir " + (arrayCiudades[i][1] * arrayCiudades[i][7] / 100) + " habitantes millonarios\n");
                                break;
                                }
                            case 6:
                                break;

                            default:
                                alert("Introduce un numero de informe valido por favor")
                        }
                        var continuar = parseInt(prompt("MENU DE INFORME DE " + arrayCiudades[i][0].toUpperCase() + "\n --------------------------------\nIntroduce que informe quieres visualizar \n 1.-Numero de Mujeres \n 2.-Numero de Inmigrantes(Solo Administradores)\n 3.-Numero de vehiculos/habitante\n 4.-Numero de habitantes desempleados\n 5.- Numero de millonarios\n 6.- Siguiente ciudad"));
                    }

                }
                break;
            }
        case 3:
            if (arrayCiudades.length == 0) {
                alert("Antes de visualizar datos, debes introducir alguno.");
                continue;
            } else {
                var datos = "";
                for (var i = 0; i < arrayCiudades.length; i++) {
                    datos = datos + "------" + arrayCiudades[i][0].toUpperCase() + "------\n";
                    datos = datos + "Poblacion total: " + arrayCiudades[i][1] + "\n";
                    datos = datos + "Porcentaje Hombres/Mujeres: " + arrayCiudades[i][2] + "% Mujeres-" + (100 - arrayCiudades[i][2]) + "% Hombres\n";
                    datos = datos + "Numero de Vehiculos: " + arrayCiudades[i][3] +"\n";
                    datos = datos + "Porcentaje de desempleados: " + arrayCiudades[i][5] +"% \n";
                    datos = datos + "Porcentaje de inmigrantes: " + arrayCiudades[i][5] +"% \n";
                }
               alert(datos);
               break;
            }
        case 4:
            alert("Fin de Programa");
            var seguir = false;
            break;
        default:
            alert("Introduce una opcion valida por favor"); 
    }
}
