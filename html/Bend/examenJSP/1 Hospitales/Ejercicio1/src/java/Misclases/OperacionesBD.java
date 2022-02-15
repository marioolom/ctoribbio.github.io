/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Misclases;

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

    public Connection obtenerConexion() {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/hospital", "root", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conexion;
    }

    public ArrayList obetenerEmpleapos() {
        ArrayList empleadosHospital = new ArrayList();
        try {
            Connection conexion = obtenerConexion();
            Statement sentencia = conexion.createStatement();
            String sql = "SELECT * FROM plantilla INNER JOIN hospital ON plantilla.HOSPITAL_COD=hospital.HOSPITAL_COD WHERE NOMBRE='Provincial' OR NOMBRE='General';";
            ResultSet resul = sentencia.executeQuery(sql);
            while (resul.next()) { //se crea un array con los datos de los departamentos		
                Empleado empleado = new Empleado(resul.getInt("EMPLEADO_NO"), resul.getString("APELLIDO"), resul.getInt("HOSPITAL_COD"), resul.getInt("SALA_COD"), resul.getString("FUNCION"), resul.getString("TURNO"), resul.getDouble("SALARIO"), resul.getInt("COMPLEMENTO"));
                empleadosHospital.add(empleado);//añadir dep al array	
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return empleadosHospital;
    }

    public void actualizarHospital(Hospital hospital) {
        try {
            Connection conexion = obtenerConexion();
            Statement sentencia = conexion.createStatement();
            String sql = "UPDATE hospital SET NOMBRE='"+hospital.getNOMBRE()+"', DIRECCION='"+hospital.getDIRECCION()+"', LOCALIDAD='"+hospital.getLOCALIDAD()+"', TELEFONO="+hospital.getTELEFONO()+", NUM_CAMAS="+hospital.getNUM_CAMAS()+" WHERE HOSPITAL_COD='"+hospital.getHOSPITAL_COD()+"'";
            System.out.println(sql);
            if (hospital.getHOSPITAL_COD() != 0) {
                sentencia.execute(sql);
            }
            conexion.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
