console.log('live')




let dollar = []
dollar.push({valor: 50, name: 50});
dollar.push({valor: 20, name: 20});
dollar.push({valor: 10, name: 10});

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

function cajero (cliente){
    let darCantidad = 0;
    let banco = [
        {dollar: dollar[0] , cantidad: 3},
        {dollar: dollar[1], cantidad: 2},
        {dollar: dollar[2] , cantidad: 2}
    ]

    let client22 = [];

    for (let i = 0; i < banco.length ; i++) {

        darCantidad = Math.floor(cliente / banco[i].dollar.valor)
        
        if(darCantidad > 0){
            
            for (let dar = 0; dar < darCantidad; dar++) {
                client22.push(dollar[i])
                
            }
            console.log('cliente',client22)
            
        }
        cliente = cliente - (darCantidad * banco[i].dollar.valor)  
        console.log(cliente)
    }
}
cajero(40);