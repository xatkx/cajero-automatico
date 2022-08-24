console.log('live')

class Dollar {
    constructor(valor, name){
        this.valor = valor;
        this.name = name;
    }
    talks(){

        let s = '';
        if(this.valor > 1)
        {
             s = 's'   
        }
            console.log(`esto es un billete de ${this.valor} ${this.name}${s}`)
    }
}



let dollar50 = new Dollar(50,'Dollar');  //[]
// dollar50.push(new Dollar(50,'dollar'))
// dollar50.push(new Dollar(50,'dollar'))
// dollar50.push(new Dollar(50,'dollar'))
// dollar50.push(new Dollar(50,'dollar'))
// dollar50.push(new Dollar(50,'dollar'))
// dollar50.push(new Dollar(50,'dollar'))

let dollar20 = new Dollar(20,'Dollar');  //[]
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
// dollar20.push(new Dollar(20,'dollar'))
let dollar10 = new Dollar(10,'Dollar'); //[]
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))
// dollar10.push(new Dollar(10,'dollar'))


let dollar5 = new Dollar(5,'Dollar'); //[]
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))
// dollar5.push(new Dollar(5,'dollar'))

let dollar1 = new Dollar(1,'Dollar'); //[]
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))
// dollar1.push(new Dollar(1,'dollar'))

var banco = [
    {dollar: dollar50 , cantidad: 10},
    {dollar: dollar20, cantidad: 10},
    {dollar: dollar10 , cantidad: 58},
    {dollar: dollar5 , cantidad: 44},
    {dollar: dollar1 , cantidad: 50}

]



// let base,base2,bse3;

// base = Math.floor(cliente / dollar[0].valor) 

// base2 = base * dollar[0].valor
// console.log(base)

// cliente = cliente - base2;

// console.log('cliente',cliente)

// base3 = Math.floor(cliente / dollar[1].valor)

// base = base3 * dollar[1].valor

// cliente = cliente - base

// console.log('cliente',cliente)

function cajero (pide){
    var darCantidad = 0;
    
    var dineroTotal = 0
    banco.forEach( dinero =>{
        dineroTotal = dineroTotal + dinero.dollar.valor * dinero.cantidad
    })
    let personaCliente = [];

    if(!(pide <= 1000)){

        console.log('maximo es 1000 dollar')
    } 
    else if(pide > dineroTotal){

        console.log('no tenemos esa cantidad de dollar')

    } else if(pide < 10){

        console.log('minimo 10 dollar')
    } 
    else {

        for (let i = 0; i < banco.length ; i++) {

            if(banco[i].cantidad > 0){
                

                darCantidad = Math.floor(pide / banco[i].dollar.valor)

                if(banco[i].cantidad <= darCantidad){

                    darCantidad = darCantidad - banco[i].cantidad;

                    for (let dar = 0; dar < banco[i].cantidad; dar++) {
                        personaCliente.push(banco[i].dollar)
                        pide = pide - banco[i].dollar.valor
                    }

                    banco[i].cantidad = banco[i].cantidad - banco[i].cantidad
                    // pide = pide + (darCantidad * banco[i].dollar.valor)
                }
                else if(darCantidad > 0){

                for (let dar = 0; dar < darCantidad; dar++) {
                    personaCliente.push(banco[i].dollar)
                }
                pide = pide - (darCantidad * banco[i].dollar.valor)
                banco[i].cantidad = banco[i].cantidad - darCantidad;
                }
            }
        if(i + 1 == banco.length){
            console.log('banco: ',banco)
                return personaCliente
            }
        }
    }
}
/*

for (let i = 0; i < banco.length ; i++) {
        darCantidad = Math.floor(pide / banco[i].dollar.valor)
        if(darCantidad > 0){
            for (let dar = 0; dar < darCantidad; dar++) {
                personaCliente.push(dollar[i])
            }
        }
        pide = pide - (darCantidad * banco[i].dollar.valor)  
        if(i + 1 == banco.length){
            return personaCliente
        }
    }

*/