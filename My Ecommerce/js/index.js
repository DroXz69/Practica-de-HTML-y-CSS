a = 123;
b = 456;
c = a+b;
texto = "Hola Mundo";
console.log("El resultado es: ",c);
console.warn("El resultado es: ",c);
console.error("El resultado es: ",c);
console.info("El resultado es: ",c);
console.info("El resultado es: ",texto);
//lavariable = document.getElementById("brand-name")
//lavariable.innerHTML = "Hola Mundo";
arreglos = [3,4,5,6,7,"abc","def"];
console.log(arreglos[5]);
diccionario = {"nombre":"Juan","apellido":"Perez"};
console.log(diccionario.nombre);
console.log(diccionario.apellido);
basedatos = [
    {
        "nombre":"Juan","apellido":"Perez"
    },
    {
        "nombre":"Maria","apellido":"Soto"
    }
];
console.error(basedatos[0].nombre);
for(i=0;i<basedatos.length;i++){
    console.warn(basedatos[i].nombre);
}
z=0;
while(z<basedatos.length){
    console.log(basedatos[z].nombre);
    z++;
}
for(var elemento of basedatos){
    console.log(elemento.nombre);
}
console.log(basedatos);
basedatos.forEach(elemento => {
    console.log(elemento.apellido);
});

//TAREA
/*
1.- Crea una variable llamada basedatos, que contenga un listadode 10 productos. (id,nombreproducto,cantidad,precio,imagen)

*/