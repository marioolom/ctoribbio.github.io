/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MisClases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author DAW
 */
public class OperacionesBD {

    public Connection getConnection() {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");//Cargar el driver
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/xd", "root", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conexion;
    }

    public ArrayList listarCliente() {
        ArrayList clientes = new ArrayList();
        try {
            Connection conexion = getConnection();
            Statement sentencia = conexion.createStatement();
            String sql = "SELECT DISTINCT C.IDCLIENTE,C.CNOMBRE,C.CATEGORIA \n"
                    + "FROM ENCARGOS E, VENDEDORES V, CLIENTE C \n"
                    + "WHERE E.IDCLIENTE=C.IDCLIENTE \n"
                    + "AND C.IDVENDEDOR=V.IDVENDEDOR \n"
                    + "AND V.COMISION>0.12\n"
                    + "AND CUENTAPORPAGAR < (SELECT AVG(CUENTAPORPAGAR) \n"
                    + "	FROM CLIENTE \n"
                    + "		WHERE CLIENTE.CATEGORIA = C.CATEGORIA)";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { //se crea un array con los datos de los departamentos		
                Consulta c = new Consulta(resul.getString("idcliente"),
                        resul.getString("cnombre"), resul.getInt("categoria"));
                clientes.add(c);//añadir dep al array	
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return (clientes);
    }//fin listarDep

}
