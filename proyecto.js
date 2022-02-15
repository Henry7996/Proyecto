//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var conyuge_recargo = 0.2
var conyuge_total=0
var hijo_total=0
var hijo_recargo_total=0
//Recargo
var recargo = 0
var recargo_total = 0


//Precio final
var precio_final = 0

//Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
//convirtiendo las edades ingresadas a números
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("Cuantos hijos tien?")
}
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(hijos)
}
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad
  recargo = precio_base * edad_18

  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}else if (edad_numero>=25 && edad_numero<49) {
  recargo= precio_base*edad_25
  recargo_total=recargo_total +recargo

}else if (edad_numero >=50 && edad_numero<89) {
  recargo= precio_base*edad_50
  recargo_total=recargo_total +recargo
}else{
  console.log("usted no aplica por su edad ");
}
//aqui puede colocar un else if() con el siguiente rango

/**
 * 2. Recargo por la edad del conyuge
 */
 if(edad_numero>=18 && edad_numero<25 && "SI" == casado.toUpperCase()){
   //Calculamos el recargo en base a la edad
   recargo = precio_base * casado_18
   conyuge_recargo= precio_base *conyuge_recargo
   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo
 }else if (edad_numero>=25 && edad_numero<49 && "SI" == casado.toUpperCase()) {
   recargo= precio_base*casado_25
   conyuge_recargo= precio_base *conyuge_recargo
   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo

 }else if (edad_numero >=50 && edad_numero<89 && "SI" == casado.toUpperCase()) {
   recargo= precio_base*casado_50
   conyuge_recargo= precio_base *conyuge_recargo
   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo
 }else{
   console.log("usted no aplica por su edad " && "SI" == casado.toUpperCase());
 }
/**
 * 3. Recargo por la cantidad de hijos
 */ 
 if(edad_numero>=18 && edad_numero<25 && "SI" == hijos.toUpperCase()){
   //Calculamos el recargo en base a la edad
   recargo = precio_base * casado_18
   conyuge_recargo= precio_base *conyuge_recargo
   hijo_total= hijos* hijos_recargo
   hijo_recargo_total=hijo_total*precio_base
   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo+hijo_recargo_total
 }else if (edad_numero>=25 && edad_numero<49 && "SI" == hijos.toUpperCase()) {
   recargo= precio_base*casado_25
   conyuge_recargo= precio_base *conyuge_recargo

   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo

 }else if (edad_numero >=50 && edad_numero<89 && "SI" == hijos.toUpperCase()) {
   recargo= precio_base*casado_50
   conyuge_recargo= precio_base *conyuge_recargo
   //Sumamos todos los recargos que hemos obtenido
   recargo_total = recargo_total + recargo + conyuge_recargo
 }else{
   console.log("usted no aplica por su edad ");
 }

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
