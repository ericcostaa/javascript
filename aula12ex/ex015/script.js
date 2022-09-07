function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique a data e tente novamente!")
    }
    
    else if (fano.value< 1900){
        alert("[ERRO] Verifique a data e tente novamente!")
    }
    else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

     if (fsex[0].checked) {
        genero = 'Homem'

        if(idade >= 0 && idade <= 14){
            //criança
            img.setAttribute('src','foto-bebe-m.png')

        } else if (idade <= 30) {       
            //jovem
            img.setAttribute('src','foto-jovem-m.png')

        } else if (idade < 50){
            //adulto
            img.setAttribute('src','foto-adulto-m.png')

        } else if (idade > 50){
            // idoso
            img.setAttribute('src','foto-idoso-m.png')
        }
        }
        
    
    else {
        genero = "Mulher"

        if(idade >= 0 && idade <= 14){
            //criança
            img.setAttribute('src', 'foto-bebe-f.png')

        } else if (idade <= 30) {       
            //jovem
            img.setAttribute('src', 'foto-jovem-f.png')

        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-f.png')

        } else if (idade > 50){
            // idoso
            img.setAttribute('src','foto-idoso-f.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
    res.appendChild(img)

}

}
