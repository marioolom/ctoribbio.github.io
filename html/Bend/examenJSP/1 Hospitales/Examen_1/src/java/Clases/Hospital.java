/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

/**
 *
 * @author DAW
 */
import java.io.Serializable;

public class Hospital {
   int hospital_cod;
   String nombre;
   String direccion;
   String localidad;
   String telefono;
   int num_camas;

   public Hospital(){
       
   }
    public Hospital(int hospital_cod, String nombre, String direccion, String telefono, int num_camas) {
        this.hospital_cod = hospital_cod;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.num_camas = num_camas;
    }

    public int getHospital_cod() {
        return hospital_cod;
    }

    public void setHospital_cod(int hospital_cod) {
        this.hospital_cod = hospital_cod;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    
    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getNum_camas() {
        return num_camas;
    }

    public void setNum_camas(int num_camas) {
        this.num_camas = num_camas;
    }

   
}
