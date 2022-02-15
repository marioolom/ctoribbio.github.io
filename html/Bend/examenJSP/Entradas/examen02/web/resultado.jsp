<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            int numero = Integer.parseInt(request.getParameter("numero"));
            Integer compra = (Integer) pageContext.getAttribute("compra", pageContext.SESSION_SCOPE);
            Integer restantes = (Integer) pageContext.getAttribute("restantes", pageContext.APPLICATION_SCOPE);

            if (((10 - compra) >= numero) && ((restantes - numero)>=0) ){
                compra = compra + numero;
                pageContext.setAttribute("compra",compra,pageContext.SESSION_SCOPE);
                out.println("Acabas de comprar <b>"+numero+" </b>entradas.<br /><br />");
                out.println("Tienes ya <b>"+compra+" </b>entradas en tu poder.<br /><br />");

                restantes = restantes - numero;
                pageContext.setAttribute("restantes", restantes,pageContext.APPLICATION_SCOPE);
                out.println("Quedan disponibles un total de <b>"+restantes+" </b>entradas.<br /><br />");
            
            } else {
                out.println("<h2>La venta no es posible</h2>");
            }
        %>
    </body>
</html>
