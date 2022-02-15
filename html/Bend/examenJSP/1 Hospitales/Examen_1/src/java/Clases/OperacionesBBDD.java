/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author DAW
 */
public class OperacionesBBDD {
    public Connection getConnection() {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");//Cargar el driver
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/ruben", "daw", "daw");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conexion;
    }
    //LISTAR

    public ArrayList listarHosSal() {
        ArrayList salarios = new ArrayList();
        try {
            Connection conexion = getConnection();
            Statement sentencia = conexion.createStatement();
            //String sql2 = "SELECT hospital_cod, count(sala_cod) 'totsalas',sum(num_cama) 'totcamas' FROM sala group by hospital_cod";
            String sql="SELECT salario,apellido,funcion FROM plantilla WHERE HOSPITAL_COD=13;";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { 	
                Resumen r = new Resumen(resul.getFloat("salario"), resul.getString("apellido"),
                        resul.getString("funcion"));
                salarios.add(r);	
            }
            String sql2="SELECT salario,apellido,funcion FROM plantilla WHERE HOSPITAL_COD=18;";
            ResultSet resul2 = sentencia.executeQuery(sql2);
            while (resul2.next()) { 	
                Resumen r = new Resumen(resul2.getFloat("salario"), resul2.getString("apellido"),
                        resul2.getString("funcion"));
                salarios.add(r);	
            }
            
            
            
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return (salarios);
    }
    
     public void modificaHospital(Clases.Hospital h){
	try{
		Connection conexion=getConnection();
		Statement sentencia=conexion.createStatement();
                String sql = "UPDATE hospital SET nombre='"+h.getNombre()+"',"+"direccion='"+h.getDireccion()+"',"+"localidad='"+h.getLocalidad()+"',"+
                        "telefono='"+h.getTelefono()+"',"+"num_camas="+h.getNum_camas()+ " WHERE hospital_cod="+h.getHospital_cod();		
		if (h.getHospital_cod() != 0 ) 
                    sentencia.execute(sql);
		System.out.println("SQL: "+sql);
		conexion.close();
        }
	catch(Exception e){e.printStackTrace();}
  }

}
