/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Misclases;

/**
 *
 * @author DAW
 */
public class Hospital {
    private int HOSPITAL_COD;
    private String NOMBRE;
    private String DIRECCION;
    private String LOCALIDAD;
    private int TELEFONO;
    private int NUM_CAMAS;

    public Hospital() {
    }

    public Hospital(int HOSPITAL_COD, String NOMBRE, String DIRECCION, String LOCALIDAD, int TELEFONO, int NUM_CAMAS) {
        this.HOSPITAL_COD = HOSPITAL_COD;
        this.NOMBRE = NOMBRE;
        this.DIRECCION = DIRECCION;
        this.LOCALIDAD = LOCALIDAD;
        this.TELEFONO = TELEFONO;
        this.NUM_CAMAS = NUM_CAMAS;
    }

    public int getHOSPITAL_COD() {
        return HOSPITAL_COD;
    }

    public void setHOSPITAL_COD(int HOSPITAL_COD) {
        this.HOSPITAL_COD = HOSPITAL_COD;
    }

    public String getNOMBRE() {
        return NOMBRE;
    }

    public void setNOMBRE(String NOMBRE) {
        this.NOMBRE = NOMBRE;
    }

    public String getDIRECCION() {
        return DIRECCION;
    }

    public void setDIRECCION(String DIRECCION) {
        this.DIRECCION = DIRECCION;
    }

    public String getLOCALIDAD() {
        return LOCALIDAD;
    }

    public void setLOCALIDAD(String LOCALIDAD) {
        this.LOCALIDAD = LOCALIDAD;
    }

    public int getTELEFONO() {
        return TELEFONO;
    }

    public void setTELEFONO(int TELEFONO) {
        this.TELEFONO = TELEFONO;
    }

    public int getNUM_CAMAS() {
        return NUM_CAMAS;
    }

    public void setNUM_CAMAS(int NUM_CAMAS) {
        this.NUM_CAMAS = NUM_CAMAS;
    }
    
    
}   

