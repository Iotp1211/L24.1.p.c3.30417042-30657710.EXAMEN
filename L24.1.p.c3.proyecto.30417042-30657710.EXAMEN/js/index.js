/**
 * Se desea llevar un control de los estudiantes que 
asisten a presentar un examen. Se tiene por cada 
participante: nombre, cédula, sexo y nota. Se requiere 
de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
valor del examen y el mínimo aprobatorio. 
Estructuras de datos recomendadas 
 Cl_examen: valor, minAprueba 
 Cl_estudiante: nombre, cedula, sexo  (‘F’ - ‘M’) 
y nota 
Primeros requerimientos 
 Los datos entrada vienen en un archivo (con 
import... ver anexo) 
 Porcentaje de aprobados y reprobados 
 Estudiantes con la mejor nota 
 Chicas por encima de la nota promedio
 */

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Examen from "./Cl_Examen.js";
import Dt_Estudiante from "./Dt_Estudiante.js";
import Dt_Examen from "./Dt_Examen.js";

let agregarEstudiante = (examen) => {
    let nombre = prompt('Ingrese el nombre:');
    let cedula = +prompt('Ingrese la cedula:');
    let sexo = prompt('Ingrese el sexo:');
    let nota = +prompt('Ingrese la nota:');
    examen.agregarEstudiante(new Cl_Estudiante(nombre, cedula, sexo, nota));
}

let eliminarEstudiante = (examen) => {
    let cedula = +prompt('Ingrese la cedula:');
    if (examen.eliminarEstudiante(cedula)) {
        salida.innerHTML = `El estudiante con cedula ${cedula} se ha eliminado.`;
    } else {
        salida.innerHTML = `El estudiante con cedula ${cedula} no se encuentra registrado.`;
    }
}

let modificarEstudiante = (examen) => {
    let cedula = +prompt('Ingrese la cedula:');
    if (examen.modificarEstudiante(cedula)) {
        salida.innerHTML = `El estudiante con cedula ${cedula} se ha modificado.`;
    } else {    
        salida.innerHTML = `El estudiante con cedula ${cedula} no se encuentra registrado.`;
    }
}


const examen = new Cl_Examen(Dt_Examen.valor, Dt_Examen.minAprueba);
Dt_Estudiante.forEach(estudiante => examen.agregarEstudiante(new Cl_Estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota)));
let salida = document.getElementById("1");

opcion.onclick = () => {
let opcion = prompt("Seleccione una opcion:");

switch (opcion) {
    case "1":
        agregarEstudiante(examen);
        break;
    case "2":
        eliminarEstudiante(examen);
        break;
    case "3":
        modificarEstudiante(examen);
        break;
    case "4":
        salida.innerHTML = `El porcentaje de aprobados es: ${examen.porcentajeAprobados().toFixed(2)} %`;
        break;
    case "5":
        salida.innerHTML = `El porcentaje de reprobados es: ${examen.porcentajeReprobados().toFixed(2)} %`;
        break;
    case "6":
        salida.innerHTML = `El estudiante con la mejor nota es: ${examen.mejorNota()}`;
        break;
    case "7":
        salida.innerHTML = `La cantidad de chicas por encima de la nota promedio es: ${examen.chicasEncimaPromedio()}`;
        break;
}
}
