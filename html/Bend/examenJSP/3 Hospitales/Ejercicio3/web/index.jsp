<%-- 
    Document   : datosEmpleados
    Created on : 14-feb-2019, 17:07:07
    Author     : Iván
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Ejercicio 3</h1>
        <hr />
        <form method="post" action="datosEmpleados.jsp">
            <select name="sala" multiple>
                <option value="1">Cuidados intensivos</option>
                <option value="2">Maternidad</option>
                <option value="3">Recuperación</option>
            </select><br>
            <input type="submit" value="Enviar">
        </form>
    </body>
</html>
