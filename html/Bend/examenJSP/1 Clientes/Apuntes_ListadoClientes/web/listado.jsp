<%-- 
    Document   : listado
    Created on : 12-feb-2020, 18:02:11
    Author     : DAW
--%>

<%@page import="MisClases.Consulta"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <table border='1'>
            <tr><th>IDCLIENTE</th><th>CNOMBRE</th><th>CATEGORIA</th></tr>
                    <%
                        ArrayList listaclien = (ArrayList) request.getAttribute("clientes");
                        if (listaclien != null)
                            for (int i = 0; i < listaclien.size(); i++) {
                                Consulta d = (Consulta) listaclien.get(i);%>
            <tr>
                <td><%=d.getIdcliente()%></td>
                <td><%=d.getCnombre()%></td>
                <td><%=d.getCategoria()%></td>
            </tr>
            <%}%>
        </table><br/><br/>
        <a href="index.html">Inicio</a>
    </body>
</html>
