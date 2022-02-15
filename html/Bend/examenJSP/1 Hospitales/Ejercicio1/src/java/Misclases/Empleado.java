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
public class Empleado {

    private int EMPLEADO_NO;
    private String APELLIDO;
    private int HOSPITAL_COD;
    private int SALA_COD;
    private String FUNCION;
    private String TURNO;
    private double SALARIO;
    private int COMPLEMENTO;

    public Empleado(int EMPLEADO_NO, String APELLIDO, int HOSPITAL_COD, int SALA_COD, String FUNCION, String TURNO, double SALARIO, int COMPLEMENTO) {
        this.EMPLEADO_NO = EMPLEADO_NO;
        this.APELLIDO = APELLIDO;
        this.HOSPITAL_COD = HOSPITAL_COD;
        this.SALA_COD = SALA_COD;
        this.FUNCION = FUNCION;
        this.TURNO = TURNO;
        this.SALARIO = SALARIO;
        this.COMPLEMENTO = COMPLEMENTO;
    }

    public Empleado() {
    }

    public int getEMPLEADO_NO() {
        return EMPLEADO_NO;
    }

    public void setEMPLEADO_NO(int EMPLEADO_NO) {
        this.EMPLEADO_NO = EMPLEADO_NO;
    }

    public String getAPELLIDO() {
        return APELLIDO;
    }

    public void setAPELLIDO(String APELLIDO) {
        this.APELLIDO = APELLIDO;
    }

    public int getHOSPITAL_COD() {
        return HOSPITAL_COD;
    }

    public void setHOSPITAL_COD(int HOSPITAL_COD) {
        this.HOSPITAL_COD = HOSPITAL_COD;
    }

    public int getSALA_COD() {
        return SALA_COD;
    }

    public void setSALA_COD(int SALA_COD) {
        this.SALA_COD = SALA_COD;
    }

    public String getFUNCION() {
        return FUNCION;
    }

    public void setFUNCION(String FUNCION) {
        this.FUNCION = FUNCION;
    }

    public String getTURNO() {
        return TURNO;
    }

    public void setTURNO(String TURNO) {
        this.TURNO = TURNO;
    }

    public double getSALARIO() {
        return SALARIO;
    }

    public void setSALARIO(double SALARIO) {
        this.SALARIO = SALARIO;
    }

    public int getCOMPLEMENTO() {
        return COMPLEMENTO;
    }

    public void setCOMPLEMENTO(int COMPLEMENTO) {
        this.COMPLEMENTO = COMPLEMENTO;
    }

}
