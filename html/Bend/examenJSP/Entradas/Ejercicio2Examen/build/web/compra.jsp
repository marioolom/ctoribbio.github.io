<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Venta de Entradas</title>
    </head>
    <body>
        <h1>Plataforma de Venta de Entradas</h1>
        <%
            int numero = Integer.parseInt(request.getParameter("numero"));
            Integer actual= (Integer) pageContext.getAttribute("actual", pageContext.SESSION_SCOPE);
            Integer totales = (Integer) pageContext.getAttribute("quedan", pageContext.APPLICATION_SCOPE);

            if (((10 - actual) >= numero) && ((totales - numero) >= 0)) {

                actual= actual + numero;
                pageContext.setAttribute("actual", actual, pageContext.SESSION_SCOPE);
                out.println("Acabas de comprar <b>" + numero + " </b>entradas.<br /><br />");
                out.println("Tienes ya <b>" + actual + " </b>entradas en tu poder.<br /><br />");


                totales =totales - numero;
                pageContext.setAttribute("quedan ", totales, pageContext.APPLICATION_SCOPE);
                out.println("Quedan disponibles un total de <b>" + totales + "<b> entradas.</b><br><br>");

            } else {
                out.println("<h2>La venta no es posible</h2>");
            }
        %>
        <br />
        <a href="index.jsp">Volver a la página principal</a>
    </body>
</html>

