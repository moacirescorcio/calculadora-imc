function app(){
    console.log('App iniciada')

    // conectar com o botão no html
    const btn_calcular = document.getElementById('btn_calcular')
    const input_peso = document.getElementById('input_peso')
    const input_altura = document.getElementById('input_altura')
    const input_nome =document.getElementById('input_nome')

    const show_imc = document.getElementById('show_imc')
    const show_nome = document.getElementById('show_nome')
    const show_resultado = document.getElementById('show_resultado')

    // associar um comportamento ao botão
    btn_calcular.onclick = () => {
        const peso = Number(input_peso.value)
        const altura = Number(input_altura.value)
        const nome = input_nome.value
        

        const imc = peso / (altura + altura)
        const resultado = classificar_imc(imc)

        show_nome.innerText = 'Nome: ' + nome
        show_imc.innerText = 'IMC: ' + imc.toFixed(2)
        show_resultado.innerText = 'Resultado: ' +  resultado

        

    }

    
}

function classificar_imc(imc){
    if (imc < 18.9){
        return 'Abaixo do Peso'
    }else if (imc > 24.9){
        return 'Sobrepeso'
    }else{
        return 'Peso normal'
    }
}

app()