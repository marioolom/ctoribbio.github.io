<%-- 
    Document   : mostrarempleado
    Created on : 14-feb-2019, 16:58:31
    Author     : DAW
--%>

<%@page import="Misclases.Empleado"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Lista de Empleados</h1>
        <table border='1'>
            <tr><th>Apellido</th><th>Función</th><th>Salario anual</th></tr>
                    <%
                        ArrayList listaempleados = (ArrayList) request.getAttribute("empleados");
                        if (listaempleados != null) {
                            for (int i = 0; i < listaempleados.size(); i++) {
                                Empleado empleado = (Empleado) listaempleados.get(i);
                                out.println("<tr><td>"+empleado.getAPELLIDO()+"</td><td>"+empleado.getFUNCION()+"</td><td>"+(empleado.getSALARIO()*12)+"</td></tr>");
                            }
                        }
                    %>
        </table><br/><br/>
    </body>
</html>
