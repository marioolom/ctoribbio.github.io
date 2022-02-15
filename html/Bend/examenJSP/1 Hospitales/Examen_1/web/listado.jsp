<%-- 
    Document   : listado
    Created on : 14-feb-2019, 16:52:17
    Author     : DAW
--%>

<%@page import="Clases.Resumen"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>LISTADO DE HOSPITALES Y SALAS</title>
    </head>
    <body>
    <center> 
        <h2>LISTADO DE SUELDOS ANUALES DE TRABAJADORES</h2>
        <h2>HOSPITALES GENERAL Y PROVINCIAL</h2>
        <table border='1'>
            <tr><th>Salario</th><th>Apellidos</th><th>Funcion</th></tr>
            <%
               ArrayList listahosp = (ArrayList) request.getAttribute("hospitales");
               if (listahosp != null)
                  for (int i = 0; i < listahosp.size(); i++) {
                    Resumen r = (Resumen) listahosp.get(i);%>
                    <tr><td><%= r.getSalario()*12%></td>
                    <td><%= r.getApellido() %></td>
                    <td><%= r.getFuncion()%></td>
                    </tr>
                <%}%>
        </table><br/><br/>
        <a href="index.html">Inicio</a>
    </center>
</body>
</html>

