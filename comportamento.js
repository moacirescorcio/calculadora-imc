function app(){
    console.log('App iniciada')

    // conectar com o botão no html
    const calcular = document.getElementById('calcular')
    const peso = document.getElementById('peso')

    // associar um comportamento ao botão
    // calcular.onclick = clicou_no_botao () => {alert('Clicou!')}

    calcular.onclick = () => {
        const peso = peso.value
    }
}

// function clicou_no_botao(){
//     alert('Clicou!')
// }
app()