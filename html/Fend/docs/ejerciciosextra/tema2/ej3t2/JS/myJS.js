var arrayCiudades=new Array();
var ciudad= new Array(8);

var continuar=confirm("Quiere introducir una ciudad?");
while(continuar==true){
        do{
            ciudad[0]=prompt("Introduce el nombre de la ciudad");
        }while(isNaN(ciudad[0])==false)

        do{
            ciudad[1]=prompt("Introduce el numero de habitamtes");
        }while(isNaN(parseInt(ciudad[1])) || ciudad[1]<0)

        do{
            ciudad[2]=prompt("Introduce el porcentaje de habitantes mujeres");
        }while(isNaN(parseInt(ciudad[2])) || ciudad[2]>100 || ciudad[2]<=0)

        do{
            ciudad[3]=prompt("Introduce el numero de vehiculos");
        }while(isNaN(parseInt(ciudad[3])))

        do{
            ciudad[4]=prompt("Introduce el porcentaje de inmigrantes");
        }while(isNaN(parseInt(ciudad[4])))

        do{
            ciudad[5]=prompt("Introduce el porcentaje de desempleados");
        }while(isNaN(parseInt(ciudad[5])))

        do{
            ciudad[6]=prompt("Introduce el numero de menores de edad");
        }while(isNaN(parseInt(ciudad[6])))

        do{
            ciudad[7]=prompt("Introduce el porcentaje de millonarios");
        }while(isNaN(parseInt(ciudad[7])))


    arrayCiudades.push(ciudad);
    ciudad=[];
    continuar=confirm("Quiere introducir una ciudad?");
}


for(var i=0;i<arrayCiudades.length;i++){
    var informe="INFORME DE "+arrayCiudades[i][0].toUpperCase()+"\n --------------------------------\n";
    var continuar=parseInt(prompt("Introduce que informe quieres visualizar \n 1.-Numero de Mujeres \n 2.-Numero de Inmigrantes\n 3.-Numero de vehiculos/habitante\n 4.-Numero de habitantes desempleados\n 5.- Numero de millonarios\n 6.- Siguiente ciudad"));
    while(continuar!=6){
        switch(continuar){
            case 1: 
                alert("En "+ arrayCiudades[i][0]+" hay un "+ arrayCiudades[i][2]+"% de mujeres, es decir "+(arrayCiudades[i][1]*arrayCiudades[i][2]/100)+" mujeres en toda la ciudad\n");
                break;
            case 2: 
                alert("En "+ arrayCiudades[i][0]+" hay un "+ arrayCiudades[i][4]+"% de inmigrantes, es decir "+(arrayCiudades[i][1]*arrayCiudades[i][4]/100)+" inmigrantes en toda la ciudad\n");
                break;
            case 3: 
                alert("En "+ arrayCiudades[i][0]+" hay "+ arrayCiudades[i][3]+" vehiculos, es decir "+(arrayCiudades[i][3]/arrayCiudades[i][1])+" vehiculos por habitante\n");
                break;
            case 4: 
                alert("En "+ arrayCiudades[i][0]+" hay un "+ arrayCiudades[i][5]+"% de desempleados, es decir "+(arrayCiudades[i][1]-(arrayCiudades[i][1]*arrayCiudades[i][6]/100)*arrayCiudades[i][5]/100)+" habitantes desempleados, excluyendo menores de edad\n");
                break;
            case 5: 
                alert("En "+ arrayCiudades[i][0]+" hay un "+ arrayCiudades[i][7]+"% de millonarios, es decir "+(arrayCiudades[i][1]*arrayCiudades[i][7]/100)+" habitantes millonarios\n");
                break;
            case 6: 
                break;
            
            default: 
                alert("Introduce un numero de informe valido por favor")
        }
        var continuar=parseInt(prompt("Introduce que informe quieres visualizar \n 1.-Numero de Mujeres \n 2.-Numero de Inmigrantes \n 3.-Numero de vehiculos/habitante\n 4.-Numero de habitantes desempleados\n 5.- Numero de millonarios \n6.- Salir"));
    }
    
}

alert(informe);