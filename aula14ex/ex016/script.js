function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('resu')

 

    if ( ini.value.length == 0 && fim.value.length == 0) {
        res.innerHTML = ( 'Impossível contar. <strong> PREENCHA AS CAIXAS <strong>')
    } // Mensagem de erro caso não seja preencihido os 2 primeiros dados

    else if (ini.value.length == 0){

        
        res.innerHTML = ( 'Impossível contar. <strong>PREENCHA A PRIMEIRA CAIXA</strong>')
       // Mensagem de erro caso não seja preencihido o primeiro dado
    }
    

    else if ( fim.value.length == 0) {
        res.innerHTML = ( 'Impossível contar. <strong> PREENCHA A SEGUNDA CAIXA <strong>')
    } // Mensagem de erro caso não seja preencihido o segundo dado
    
        
    else {

        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if( p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if( i < f) {  
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
        }
        
    } else {
            //  Contagem regressiva
        for(let c = i; c >= f; c -= p) {

            res.innerHTML += ` ${c} \u{1F449}`
            } 
   
        }

        res.innerHTML += `\u{1F3C1}`
    }
}