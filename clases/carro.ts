export class Carro {
   private modelo: number;
   private marca: string;
   private placa:string
   private puertas:number 
   private color: string

    constructor(modelo: number, marca: string, placa: string, puertas:number, color:string) {
        this.modelo = modelo;
        this.marca = marca;
        this.placa = placa;
        this.puertas = puertas;
        this.color = color;
    }
    public Encender() {
        console.log("El carro encendio");
    }
    public desplazarCarro(){
        console.log("El carro esta en movimiento!");
    }
    setModelo(modelo: number) {
        this.modelo = modelo;
    }  
    setMarca(marca: string) {
        this.marca = marca;
    } 
    setPlaca(placa: string) {
        this.placa = placa;
    }
    setPuertas(puertas: number) {
        this.puertas = puertas;
    }
    setColor(color: string) {
        this.color = color;
    }  
    
    public getModelo() {
        return this.modelo
    }
    public getMarca() {
        return this.marca
    }
    public getPlaca() {
        return this.placa
    }
    public getPuertas() {
        return this.puertas
    }
    public getColor() {
        return this.color
    }
      
}


let carro1 = new Carro(2023,"Mazda", "XCD456",4,"rojo")
console.log(carro1);
carro1.setModelo(2021);
carro1.setColor("negro");

console.log(carro1);

console.log(carro1.getMarca());
console.log(carro1.getModelo());



