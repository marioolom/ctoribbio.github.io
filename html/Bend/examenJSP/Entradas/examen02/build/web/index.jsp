<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="CSS/normalize.min.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/skeleton.css" rel="stylesheet" type="text/css"/>
        <title>examen1 - venta de entradas</title>
    </head>
    <body>
<%
    Integer restantes = (Integer)pageContext.getAttribute("restantes", pageContext.APPLICATION_SCOPE);
    if(restantes == null) {
        restantes = new Integer(50);
    }
    pageContext.setAttribute("restantes", restantes, pageContext.APPLICATION_SCOPE);

    Integer compra = (Integer)pageContext.getAttribute("compra", pageContext.SESSION_SCOPE);
    if(compra == null) {
        compra = new Integer(0);
    }
    pageContext.setAttribute("compra", compra, pageContext.SESSION_SCOPE);
%>

<% if(restantes > 0) { %>
    <br />Entradas restantes en total: <b><%= pageContext.getAttribute("restantes",pageContext.APPLICATION_SCOPE) %></b> <br />
    <br />Aún puedes comprar <b><%= 10-(Integer)pageContext.getAttribute("compra",pageContext.SESSION_SCOPE) %></b> entradas en esta sesión<br /><br />
    <form action="resultado.jsp" method="post">
        Número de entradas<input type="text" name="numero" />
        <br />
        <input type="submit" value="Comprar" />
    </form>
<% } else { %>
    <h1 style="color:red">Localidades agotadas</h1>
<% } %>

    </body>
</html>
