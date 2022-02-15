<%-- 
    Document   : index
    Created on : 14-feb-2019, 19:34:01
    Author     : DAW
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ejercicio2</title>
    </head>
    <body>
        <h1>Ejercicio2</h1>
        <%
            Integer totales = (Integer)pageContext.getAttribute("quedan", pageContext.APPLICATION_SCOPE);
            if(totales==null){
                totales = new Integer(50);
            }
            pageContext.setAttribute("quedan",totales,pageContext.APPLICATION_SCOPE);
            
            Integer actuales = (Integer)pageContext.getAttribute("actual", pageContext.SESSION_SCOPE);
            if(actuales==null){
                actuales = new Integer(0);
            }
            pageContext.setAttribute("actual", actuales ,pageContext.SESSION_SCOPE);
        %>
        
        <% if(totales>0) { %>
        <br />Entradas restantes en total: <b><%= totales %></b> <br />
        <br />Aún puedes comprar <b><%= 10-(Integer)pageContext.getAttribute("actual",pageContext.SESSION_SCOPE) %></b> entradas en esta sesión<br/><br />
        <form action="compra.jsp" method="post">
            Número de entradas<input type="text" name="numero" />
            <br />
            <input type="submit" value="Comprar entradas" />
        </form>
        <% } else { %>
        <h1>Localidades agotadas</h1>
        <% } %>

    </body>
</html >

