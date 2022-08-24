console.log('live')




let dollar = []
dollar.push({valor: 50, name: 50});
dollar.push({valor: 25, name: 20});
dollar.push({valor: 10, name: 10});
dollar.push({valor: 5, name: 10});
dollar.push({valor: 1, name: 10});


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
    var banco = [
        {dollar: dollar[0] , cantidad: 2},
        {dollar: dollar[1], cantidad: 2},
        {dollar: dollar[2] , cantidad: 12},
        {dollar: dollar[3] , cantidad: 2},
        {dollar: dollar[4] , cantidad: 12}

    ]
    var dineroTotal = 0
    banco.forEach( dinero =>{
        dineroTotal = dineroTotal + dinero.dollar.valor * dinero.cantidad
    })
    let personaCliente = [];

    if(pide <= 1000){
        if(!(pide > dineroTotal)){
            if(!(pide < 10)){


                for (let i = 0; i < banco.length ; i++) {
    
                    if(banco[i].cantidad > 0){
                        

                        darCantidad = Math.floor(pide / banco[i].dollar.valor)

                        if(banco[i].cantidad <= darCantidad){

                            darCantidad = darCantidad - banco[i].cantidad;

                            console.log('cantidad: ',darCantidad)

                            for (let dar = 0; dar < banco[i].cantidad; dar++) {
                                personaCliente.push(dollar[i])
                                pide = pide - dollar[i].valor
                            }

                            banco[i].cantidad = banco[i].cantidad - banco[i].cantidad


                            // pide = pide + (darCantidad * banco[i].dollar.valor)


                        }
                        else if(darCantidad > 0){

                        for (let dar = 0; dar < darCantidad; dar++) {
                            personaCliente.push(dollar[i])
                            console.log('maldito dolar ',darCantidad)
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
            } else {
                console.log('minimo 10 dollar')
            }
        } else {
            console.log('no tenemos esa cantidad de dollar')
        }
    } else{
        console.log('maximo es 1000 dollar')
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