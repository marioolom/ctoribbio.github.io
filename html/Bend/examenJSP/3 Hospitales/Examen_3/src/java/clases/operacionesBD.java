/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author DAW
 */
public class operacionesBD {
    public Connection getConnection() {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/hospital", "root", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conexion;
    }
    //LISTAR

    public ArrayList listarRecup() {
        ArrayList hospitalessalas = new ArrayList();
        try {
            Connection conexion = getConnection();
            Statement sentencia = conexion.createStatement();
            String sql = "SELECT sala_cod, nombre,sum(num_cama) 'totalCamas' FROM sala WHERE nombre='Recuperación'";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { 
                Resumen r = new Resumen(resul.getInt("sala_cod"),
                        resul.getString("nombre"), resul.getInt("totalCamas"));
                hospitalessalas.add(r);	
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return (hospitalessalas);
    }
    public ArrayList listarMat() {
        ArrayList hospitalessalas = new ArrayList();
        try {
            Connection conexion = getConnection();
            Statement sentencia = conexion.createStatement();
            String sql = "SELECT sala_cod, nombre,sum(num_cama) 'totalCamas' FROM sala WHERE NOMBRE='Maternidad'";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { 
                Resumen r = new Resumen(resul.getInt("sala_cod"),
                        resul.getString("nombre"), resul.getInt("totalCamas"));
                hospitalessalas.add(r);	
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return (hospitalessalas);
    }
    public ArrayList listarCuida() {
        ArrayList hospitalessalas = new ArrayList();
        try {
            Connection conexion = getConnection();
            Statement sentencia = conexion.createStatement();
            String sql = "SELECT sala_cod, nombre,sum(num_cama) 'totalCamas' FROM sala WHERE nombre='Cuidados Intensivos'";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { 
                Resumen r = new Resumen(resul.getInt("sala_cod"),
                        resul.getString("nombre"), resul.getInt("totalCamas"));
                hospitalessalas.add(r);	
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return (hospitalessalas);
    }
}
