<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title><title>ejercicio 2 - paises actualizacion</title></title>
    </head>

    <body>
        <%
            Connection conn = null;
            java.sql.Statement sentenciaSQL = null;
            ResultSet resultado = null;
            String sql = "";
            try {
                out.println("<h1>Ejercicio 3</h1><hr />");
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost/paises", "root", "");

                String[] salas = request.getParameterValues("sala");
                sentenciaSQL = conn.createStatement();
              
                sql = "UPDATE clientes2 SET limitecredito = (limitecredito + 5000) WHERE Pais IN (SELECT Pais FROM clientes2 GROUP BY Pais HAVING AVG(LimiteCredito) < 47000);";
                sentenciaSQL.executeUpdate(sql);

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
                out.println("<h3>Actualizacion Completada</h3>");
//fin tabla 3
            } catch (Exception e) {
                out.println(e.getMessage());
            }
        %>
        <a href="index.jsp">Volver al index</a>
    </body>
</html>
