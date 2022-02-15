<%-- 
    Document   : actualizarhospital
    Created on : 14-feb-2019, 17:16:18
    Author     : DAW
--%>

<%@page import="Misclases.Hospital"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <jsp:useBean id="hospital" scope="request" class="Misclases.Hospital" />
        <jsp:setProperty name="hospital" property="*"/>

        <%
        if (request.getParameter("HOSPITAL_COD") != null) {%>
            <jsp:forward page="/Controlador?opcion=actualizar"/>
        <%}%>

        <h1>Actualizar Hospital</h1>
        <form method="post">
            <p>Código de hospital: <input name="HOSPITAL_COD" type="number" size="5"> </p>
            <p>Nombre hospital: <input name="NOMBRE" type="text" size="5"> </p>
            <p>Dirección: <input name="DIRECCION" type="text" size="15"> </p>
            <p>Localidad <input name="LOCALIDAD" type="text" size="15"> </p>
            <p>Teléfono: <input name="TELEFONO" type="number" size="15"> </p>   
            <p>Número de camas: <input name="NUM_CAMAS" type="number" size="5"> </p>    
            <input type="submit" name="actualizar" value="Actualizar">
        </form> 
    </body>
</html>
