<HTML>

    <HEAD>
    </HEAD>

    <BODY>

        <form name='mi_formulario' action='./visor1.php' method='get'>
            Escribe tu nombre:<input type='text' name='nombre' value=''><br>

            Escribe tu direccion: <input type='text' name='direccion' value=''><br>

            Escribe tu numero: <input type='text' name='telf' value=''><br>

            Cual es tu Genero?<br>
            <input type='radio' name='genero' value='Masc'>Masculino</br>
            <input type='radio' checked name='genero' value='Fem'>Femenino</br>

             ¿Cual es el precio máximo<br> que estarías dispuesto a pagar? 
             <select name="calificacion">
                <Option>Suspenso</option>
                <Option>Suficiente</option>
                <Option selected>Bien</option>
                <Option>Notable</option>
                <Option>Sobresaliente</option>
                <Option>Matricula</option>
            </select><br> 
            ¿Color
             <select name="color">
                <Option>#32a852</option>
                <Option>#7da832</option>
                <Option selected>#a8328c</option>
                <Option>#4f434c</option>
                <Option>#09e8b0</option>
            </select><br>
            Escribe aquí cualquier otro comentario:<br> 
            <textarea rows=5 cols=50 name='texto'></textarea><br>  
            <input type="hidden"name='oculto' value='Esto iría oculto'><br><input type="reset" value="borrar">
            <input type="submit">
        </FORM> 
    </BODY> 
</HTML>