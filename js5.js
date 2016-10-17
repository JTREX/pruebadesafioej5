function Telefono(number, marca, color, llamadas) {
  this.number = number;
  this.marca = marca;
  this.color = color;
  this.llamadas = 0;
  this.llamar = function () {
    console.log("llamada");
    this.llamadas ++
    return this.llamadas}
  }

var iphone7 = new Telefono(00865456, "apple", "rosa")
var iphone6 = new Telefono(99665452, "apple", "negro")
var iphone5 = new Telefono(12665454, "apple", "blanco")
var iphone4 = new Telefono(21665453, "apple", "negro")
var samsungnote = new Telefono(55555450, "samsung", "negro")
var samsung6 = new Telefono(55335458, "samsung", "azul")

console.log(iphone7.llamar())

// var telefonos = [{iphone7}, {iphone6}, {iphone5}, {iphone4}, {samsungnote}, {samsung6}];
// telefonos.forEach(function (item, index, array) { console.log(item);})
//
var telefonos = Array.of({iphone7}, {iphone6}, {iphone5}, {iphone4}, {samsungnote}, {samsung6});
// console.log(Array.of({iphone7}, {iphone6}, {iphone5}, {iphone4}, {samsungnote}, {samsung6}));
