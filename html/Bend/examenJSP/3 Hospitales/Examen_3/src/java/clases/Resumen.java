/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clases;

/**
 *
 * @author DAW
 */
public class Resumen {
    int sala_cod;
    String nombre;
    int totcamas;

    public Resumen(int sala_cod, String nombre, int totcamas) {
        this.sala_cod = sala_cod;
        this.nombre = nombre;
        this.totcamas = totcamas;
    }

    public int getSala_cod() {
        return sala_cod;
    }

    public void setHospital_cod(int sala_cod) {
        this.sala_cod = sala_cod;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTotcamas() {
        return totcamas;
    }

    public void setTotcamas(int totcamas) {
        this.totcamas = totcamas;
    }

}
