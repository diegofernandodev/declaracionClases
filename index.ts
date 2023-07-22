import {Carro} from "./clases/carro";

let carroDeSandra: Carro = new Carro(2023,"Mazda", "XCD456",4,"rojo")
let carroDeCharles: Carro = new Carro(2023, "ford", "RDF541", 4, "blanco")
let carroDeBrian: Carro = new Carro(2023, "chevorlete","VHA007",6,"azul")

carroDeBrian.Encender()
console.log(carroDeCharles, carroDeSandra, carroDeBrian);

let placaCarroBrian: string = carroDeBrian.getPlaca() 
let placaCarroSandra: string = carroDeBrian.getPlaca()

console.log(placaCarroBrian)
console.log(placaCarroSandra)

carroDeBrian.setColor("white")
console.log(carroDeBrian.getColor());

