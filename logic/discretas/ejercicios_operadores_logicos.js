/*EJERCICIO 1
estás diseñando un sistema de alarma para una casa inteligente. El sistema debe activar la alarma si se cumplen todas las siguientes condiciones:

La puerta principal está abierta (puertaAbierta es true).
Ninguna de las ventanas está cerrada (ventanasCerradas es false).
No hay personas en casa (personasEnCasa es false).
No se ha desactivado manualmente la alarma (alarmaDesactivada es false).


const puertaAbierta = true;
const ventanasCerradas = false;
const personasEnCasa = false;
const alarmaDesactivada = false;

function activarAlarma (a,b,c,d){
    console.log(a && !b && !c && !d);
}

activarAlarma(puertaAbierta,ventanasCerradas,personasEnCasa,alarmaDesactivada);
*/


/*EJERCICIO 2
estás diseñando un sistema de seguridad para un edificio. Este sistema tiene que cumplir con varias condiciones para activar una alarma:

Sensores de Movimiento: Hay dos sensores de movimiento en el edificio, uno en la entrada (sensorEntrada) y otro en las escaleras (sensorEscaleras).
Puerta Principal Cerrada: La puerta principal debe estar cerrada (puertaCerrada).
Ventanas Cerradas: Todas las ventanas deben estar cerradas (ventanasCerradas).
Sistema de Seguridad Activado: El sistema de seguridad debe estar activado (sistemaActivado).
La alarma se activará si:

Hay movimiento en cualquiera de los dos sensores (sensorEntrada o sensorEscaleras).
La puerta principal está cerrada.
Las ventanas están cerradas.
El sistema de seguridad está activado.
Pero la alarma no se activará si:

Hay personas en casa (personasEnCasa), incluso si todas las demás condiciones se cumplen.





const sensorEntrada = false;
const sensorEscaleras = true;
const puertaCerrada = true;
const ventanasCerradas = true;
const sistemaActivado = true;
const personasEnCasa = false;

function activarAlarma(a,b,c,d,e,f){
    return (a ||b) && (c && d && e && !f)
}

console.log(activarAlarma(sensorEntrada, sensorEscaleras, puertaCerrada, ventanasCerradas, sistemaActivado, personasEnCasa))

*/


/*EJERCICIO 3
Ejercicio: Sistema de Control de Acceso con Múltiples Condiciones
Estás diseñando un sistema de control de acceso para un edificio que tiene las siguientes reglas:

Acceso por Huella Digital: El acceso es permitido si la huella digital coincide con la registrada (huellaCorrecta).
Acceso por Tarjeta: Si la tarjeta de acceso es válida (tarjetaValida), entonces la persona tiene acceso.
Autenticación de Dos Factores: Si la persona ha utilizado la tarjeta de acceso, también debe ingresar un código de seguridad correcto (codigoCorrecto).
Horario Laboral: El acceso solo se permite durante el horario laboral (horarioLaboral).
Permiso Especial: Si la persona tiene un permiso especial (permisoEspecial), se le permite el acceso en cualquier momento, incluso fuera del horario laboral, y sin necesidad de autenticación adicional.
Condiciones adicionales:
El acceso será denegado si la alarma está activada (alarmaActivada).
El acceso será denegado si la persona está en la lista de acceso denegado (accesoDenegado).
Instrucciones:
Escribe una función accesoPermitido que reciba los valores de las variables y devuelva true si se permite el acceso y false en caso contrario.
Usa los operadores lógicos adecuados para implementar la lógica descrita.


const huellaDigital = true; // true
const tarjetaValida = false; // true
const codigoCorrecto = false; // true
const horarioLaboral = true; // true
const permisoEspecial = false; // false
const alarmaActivada = false; // false
const accesoDenegado = false; // false

function accesoPermitido (a,b,c,d,e,f,g) {
    return (a || (b && c)) && (d || e) && !(f||g)
}

console.log(accesoPermitido(huellaDigital,tarjetaValida,codigoCorrecto, horarioLaboral, permisoEspecial, alarmaActivada, accesoDenegado)); 
*/

/* EJERCICIO 4  
Imagina un sistema de control de acceso a una zona restringida que sigue estas reglas:

Acceso Permitido:

Un empleado tiene acceso permitido si:
La puerta está cerrada (puertaCerrada).
La entrada se realiza durante el horario laboral (horarioLaboral).
El empleado tiene una credencial válida (credencialValida).
La alarma no está activada (alarmaActivada).
Excepciones:

Un visitante tiene acceso permitido si:
La entrada es con una invitación válida (invitacionValida).
La alarma está desactivada (alarmaDesactivada).
El visitante no está en la lista de acceso denegado (noEnListaDenegado).
La puerta no está cerrada (puertaAbierta).
Denegación de Acceso:

Si la entrada ocurre fuera del horario laboral (!horarioLaboral) o si la puerta está abierta (puertaAbierta) y no es con invitación válida (!invitacionValida), el acceso es denegado.
Tu tarea es implementar una función accesoPermitido que determine si el acceso está permitido según las reglas anteriores.
*/

const puertaCerrada = true;
const horarioLaboral = true;
const credencialValida = true;
const alarmaActivada = false;
const invitacionValida = false;
const alarmaDesactivada = true;
const noEnListaDenegado = true;
const puertaAbierta = true;

function accesoPermitido(puertaCerrada, horarioLaboral, credencialValida, alarmaActivada, invitacionValida, alarmaDesactivada, noEnListaDenegado, puertaAbierta) {
    const empleadoAcceso = puertaCerrada && horarioLaboral && credencialValida && !alarmaActivada;
    const invitadoAcceso = invitacionValida && alarmaDesactivada && noEnListaDenegado && puertaAbierta
    const accesoDenegado = !horarioLaboral || (puertaAbierta && !invitacionValida);
    return (empleadoAcceso ||  invitadoAcceso) && !accesoDenegado
}

console.log(accesoPermitido(puertaCerrada,horarioLaboral,credencialValida,alarmaActivada,invitacionValida,alarmaDesactivada,noEnListaDenegado,puertaAbierta));