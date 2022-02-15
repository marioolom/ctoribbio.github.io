<%-- 
    Document   : modificahosp
    Created on : 14-feb-2019, 16:51:38
    Author     : DAW
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>UPDATE DE HOSPITALES</title>
    </head>
    
    <jsp:useBean id="hos" scope="request" class="Clases.Hospital" />
    <jsp:setProperty name="hos" property="*"/>
    <%
        if (request.getParameter("hospital_cod") != null) {%>
        <jsp:forward page="/Controlador?accion=modificar"/>
      <%}%>

    <body>
    <center><h2>UPDATE DE HOSPITALES</h2>
        </br>
        <form method="post">
            <p>Cod de HOSPITAL: <input name="hospital_cod" type="text" size="5"> </p>
            <p>Nombre: <input name="nombre" type="text" size="5"> </p>
            <p>Direccion: <input name="direccion" type="text" size="15"> </p>
            <p>Localidad: <input name="localidad" type="text" size="15"> </p>
            <p>Telefono: <input name="telefono" type="text" size="15"> </p>
            <p>Num Camas: <input name="num_camas" type="text" size="15"> </p>   

            <input type="submit" name="modificar" value="Modificar">
            <input type="reset" name="cancelar" value="Vaciar campos">
        </form>  
    </center>
    </body>
</html>

