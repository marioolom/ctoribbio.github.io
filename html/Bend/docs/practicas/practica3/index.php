<HTML>

    <HEAD>
    </HEAD>

    <BODY>

        <form name='mi_formulario' action='formu1.php' method='post'>
            Escribe tu nombre:<input type='text' name='nombre' value=''><br>
            Escribe tu clave: <input type='password' name='clave' value='dsfdf'><br>
            <input type='radio' name='color' value='Rojo'>Rojo</br>
            <input type='radio' checked name='color' value='Verde'>Verde</br> 
            <input type='radio' name='color' value='Azul'>Azul</br> 
            Elige los extras:<br><input type='checkbox' name="acondicionado" value="Aire"> Aire acondicionado<br> <input type='checkbox'
                checked name="tapiceria" value="Tapicieria"> Tapiceria en
            piel<br>
             <input type='checkbox' name='llantas' value="aluminio"> Llantas de aluminio<br> 
             ¿Cual es el precio máximo<br> que estarías dispuesto a pagar? 
             <select name="precio">
                <Option>Menos de
                    6.000 euros</option>
                <Option>6.001 - 8.000 euros</option>
                <Option selected>8.001 - 10.000 euros</option>
                <Option>10.001 - 12.000 euros</option>
                <Option>12.001 - 14.000 euros</option>
                <Option>Más de 14.000 euros</option>
            </select><br> 
            Escribe aquí cualquier otro comentario:<br> 
            <textarea rows=5 cols=50 name='texto'></textarea><br>  
            <input type="hidden"name='oculto' value='Esto iría oculto'><br><input type="reset" value="borrar">
            <input type="submit">
        </FORM> 
    </BODY> 
</HTML>