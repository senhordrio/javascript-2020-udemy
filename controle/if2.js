function test1(num){
    if(num > 7)
        console.log(num)
        console.log("Final")
}

test1(6)
test1(8)

function teste2(num){
    if(num > 7); { //cuidado com o ";", não usar com bloco nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)