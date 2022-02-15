<%-- 
    Document   : listado
    Created on : 14-feb-2019, 19:24:43
    Author     : DAW
--%>

<%@page import="clases.Resumen"%>
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
        <h2>LISTADO SALAS Y Nª CAMAS</h2>
        <table border='1'>
            <tr><th>Nºde Sala</th><th>Nombre</th><th>Total Camas</th></tr>
            <%
               ArrayList listahosp = (ArrayList) request.getAttribute("hospitales");
               if (listahosp != null)
                  for (int i = 0; i < listahosp.size(); i++) {
                    Resumen r = (Resumen) listahosp.get(i);%>
                    <tr><td><%= r.getSala_cod()%></td>
                    <td><%= r.getNombre() %></td>
                    <td><%=r.getTotcamas()%></td>
                    </tr>
                <%}%>
        </table><br/><br/>
        <a href="index.jsp">Inicio</a>
    </center>
</body>
</html>
