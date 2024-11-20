import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Examen {
    constructor(valor, minAprueba) {
        this.estudiantes = [];
        this.valor = valor;
        this.minAprueba = minAprueba;
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    eliminarEstudiante(cedula) {
        cedula = +cedula;
        let indexCedula = -1;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].cedula == cedula) {
                indexCedula = i;
            }
        }
        if (indexCedula !== -1) {
            this.estudiantes.splice(indexCedula, 1);
            return indexCedula !==-1;
        }

    }

    modificarEstudiante(cedula) {
        cedula = +cedula;
        let indexCedula = -1;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].cedula == cedula) {
                indexCedula = i;
            }
        }
        if (indexCedula !== -1) {
            let nombre = prompt('Ingrese el nuevo nombre:');
            let cedula = +prompt('Ingrese la nueva cedula:');
            let sexo = prompt('Ingrese el nuevo sexo:');
            let nota = +prompt('Ingrese la nueva nota:');
            this.estudiantes.splice(indexCedula, 1, new Cl_Estudiante(nombre, cedula, sexo, nota));
            return indexCedula !== -1; 
        }
    }

    porcentajeAprobados() {
        let aprobados = 0;
        this.estudiantes.forEach(estudiante => {
            if (estudiante.nota >= this.minAprueba) {
                aprobados ++;
            }
        });
        return (aprobados / this.estudiantes.length) * 100;
    }

    porcentajeReprobados() {
        let reprobados = 0;
        this.estudiantes.forEach(estudiante => {
            if (estudiante.nota < this.minAprueba) {
                reprobados ++;
            }
        });
        return (reprobados / this.estudiantes.length) * 100;
    }

   mejorNota() {
        let mayorNota = this.estudiantes[0].nota;
        let nombre = this.estudiantes[0].nombre;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota > mayorNota) {
                mayorNota = this.estudiantes[i].nota;
                nombre = this.estudiantes[i].nombre;
            }
        }
        return nombre;
    }

    notaPromedio() {
        let acumNota = 0, cntEstudiantes = 0;
        this.estudiantes.forEach(estudiante => {
            acumNota += estudiante.nota;
            cntEstudiantes ++;
        });
        return acumNota / cntEstudiantes;
    }

chicasEncimaPromedio() {
    let cntChicas = 0;
    this.estudiantes.forEach(estudiante => {
        if (estudiante.sexo == 'F' && estudiante.nota > this.notaPromedio()) {
            cntChicas ++;
        }
    });
    return cntChicas;
}
}
