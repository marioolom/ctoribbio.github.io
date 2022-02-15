<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ejercicio 2 - paises datos</title>
    </head>

    <body>
        <%
            Connection conn = null;
            java.sql.Statement sentenciaSQL = null;
            ResultSet resultado = null;
            String sql = "";
            try {
                out.println("<h1>Listado con los datos de los paises</h1><hr />");
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/paises", "root", "");              
                sentenciaSQL = conn.createStatement();
              
//tabla 1
                sql = "SELECT Pais, COUNT(DISTINCT Ciudad) FROM clientes2 GROUP BY Pais;";
                resultado = sentenciaSQL.executeQuery(sql);
                out.println("<table border='1'>");
                out.println("<tr>");
                out.println("<th>Pais</th><th>Numero de Ciudades Diferentes</th>");
                out.println("</tr>");
                while (resultado.next()) {
                    out.println("<tr>");
                    out.println("<td>" + resultado.getString("PAIS") + "</td>");
                    out.println("<td>" + resultado.getString("COUNT(DISTINCT Ciudad)") + "</td>");
                }
                out.println("</tr>");
                out.println("</table>");
//fin tabla 1
//tabla 2
                sql = "SELECT Pais, COUNT(NombreCliente) FROM clientes2 GROUP BY Pais;";
                resultado = sentenciaSQL.executeQuery(sql);
                out.println("<table border='1'>");
                out.println("<tr>");
                out.println("<th>Pais</th><th>Numero de Clientes en cada Pais</th>");
                out.println("</tr>");
                while (resultado.next()) {
                    out.println("<tr>");
                    out.println("<td>" + resultado.getString("PAIS") + "</td>");
                    out.println("<td>" + resultado.getString("COUNT(NombreCliente)") + "</td>");
                }
                out.println("</tr>");
                out.println("</table>");
//fin tabla 2
//tabla 3
                sql = "SELECT Pais, AVG(LimiteCredito) FROM clientes2 GROUP BY Pais;";
                resultado = sentenciaSQL.executeQuery(sql);
                out.println("<table border='1'>");
                out.println("<tr>");
                out.println("<th>Pais</th><th>Media del Limite de Credito de cada Pais</th>");
                out.println("</tr>");
                while (resultado.next()) {
                    out.println("<tr>");
                    out.println("<td>" + resultado.getString("PAIS") + "</td>");
                    out.println("<td>" + resultado.getString("AVG(LimiteCredito)") + "</td>");
                }
                out.println("</tr>");
                out.println("</table>");
//fin tabla 3
                        
                out.println("<br />");
                out.println("<a href='actualizarPaises.jsp'>Actualizar el limite de credito de los paises con una media inferior a 47000</a>");
            } catch (Exception e) {
                out.println(e.getMessage());
            }
            

        %>
    </body>
</html>
