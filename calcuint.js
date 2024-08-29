let montoDolar= 331;
let montoPeso= 307598;

let montoUsdAmbos= 32;
let montoUsdSu= 35;
let montoUsdMio= montoDolar - (montoUsdAmbos + montoUsdSu);
function montoMio(){
    return ((montoUsdMio * montoPeso) / montoDolar);
}
function montoAmbos(){
    return ((montoUsdAmbos * montoPeso) / montoDolar);
}
function montoSu(){
    return montoPeso - (montoAmbos() + montoMio());
}
console.log(`El valor que tú debes es ${montoMio()}`);
console.log(`El valor que deben pagar es ${montoAmbos()}`);
console.log(`El valor que debe para Su es ${montoSu()}`);

