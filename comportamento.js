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
    const show_sexo = document.getElementById('show_sexo')

    const btn_sexo_m = document.getElementById('sexo_m')
    const btn_sexo_f = document.getElementById('sexo_f')

    let sexo 


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
        show_sexo.innerText = 'Sexo: ' + sexo
    }

    btn_sexo_m.onclick = () => {
        // alert('Masculino')
        sexo = 'Masculino'
        btn_sexo_m.classList.add('selecionado')
        btn_sexo_f.classList.remove('selecionado')
    }

    btn_sexo_f.onclick = () => {
        // alert('Feminino')
        sexo = 'Feminino'
        btn_sexo_f.classList.add('selecionado')
        btn_sexo_m.classList.remove('selecionado')
    }
}

function classificar_imc(imc){
    if (imc < 18.5){
        return 'Peso Baixo'
    }
    else if(imc < 24.9){
        return 'Peso Normal'
    }
    else if (imc < 29.9){
        return 'Sobrepeso'
    }
    else if (imc < 34.9){
        return 'Obesidade 1'
    }
    else if (imc < 39.9){
        return 'Obesidade 2'
    }
    else {
        return 'Obesidade 3'
    }
}

app()