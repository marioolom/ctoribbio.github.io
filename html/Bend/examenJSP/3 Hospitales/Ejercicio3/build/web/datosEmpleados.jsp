<%-- 
    Document   : datosEmpleados
    Created on : 14-feb-2019, 17:15:57
    Author     : Iván
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%

%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>

    <body>
        <%  Connection conn = null;
            java.sql.Statement sentenciaSQL = null;
            ResultSet resultado = null;
            String sql = "";
            try {
                out.println("<h1>Ejercicio 3</h1><hr />");
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital", "root", "");

                String[] salas = request.getParameterValues("sala");
                sentenciaSQL = conn.createStatement();
              
                sql = "SELECT SALA_COD,NOMBRE,sum(NUM_CAMA) FROM sala WHERE ";
                for (int i = 0; i < salas.length; i++) {
                    if (i == 0) {
                        sql += "SALA_COD = '" + salas[i] + "' ";
                    } else {
                        sql += " OR SALA_COD = '" + salas[i] + "' ";
                    }
                }
                sql += "GROUP BY NOMBRE ASC";
                resultado = sentenciaSQL.executeQuery(sql);
                out.println(sql);
                out.println("<table border='1'>");
                out.println("<tr>");
                out.println("<th>Codigo</th><th>Sala</th><th>Camas</th>");
                out.println("</tr>");
                while (resultado.next()) {
                    //camas = resultado.getString("NUM_CAMA");
                    out.println("<tr>");
                    out.println("<td>" + resultado.getString("SALA_COD") + "</td>");
                    out.println("<td>" + resultado.getString("NOMBRE") + "</td>");
                    out.println("<td>" + resultado.getString("sum(NUM_CAMA)") + "</td>");
                    out.println("</tr>");
                }
                out.println("</table>");
                out.println("<br />");
                out.println("<a href='index.jsp'>Volver</a>");
            } catch (Exception e) {
                out.println(e);
            }
            

        %>
    </body>
</html>
