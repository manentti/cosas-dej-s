

//controlamos la cantidad de veces a repetir el mensaje con i<=3.
//mientras no sea 3, la cuenta dira si, cuando llega a 3 dice no y se termina el siclo
//en este caso la variable esta declarada adentro del siclo
//esto se hace para que la variable  i nasca y muera dentero del siclo y no inpregne todo el codigo


/*for(let i=1;i<3;i++){
    console.log("usted es el jefe de los minisuper?");
}


//el I++ es para que se valla sumando


for(let i=1;i<=20;i++){
    console.log("usted es el jefe de los minisuper?");
}*/

/*for(let i=1; i<=10; i++ ) {
    if(i==5){
        break;
    }
    alert(i)
}*/


//for(let i =0;i<=10;i++){
    //if(i==4){
    //     continue;
    //}
   // alert(i);
//}



//odjetos 

//ej

//let nombre = "homero";
//let apellido = "simpson";
//let edad = 38;

let persona = {
    nombre: "homero",
    apellido:"simpson",
    edad:38,
    peso: 69,

}

const auto1 = {
    marca : "toyota",
    modelo : "gol",
    año : "1944",
    color: "verde",
    puertas:3
}


console.log(persona.peso);

//this







// clasces 

//duncion estandar de productos de super mercado

//los atributos van a estar en el constructor
//
class poducto{
    constructor(nombre, precio){
        this.nombre = nombre.touppercase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio*1.21
    }
    vender(){
        this.vendido = true;
    }
}


const producto1 = new producto ("manzanas",250);
const producto2 = new producto ("caramelos", 80);

producto1.sumaIva();
console.log(producto1.precio);