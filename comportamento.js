function app(){
    console.log('App iniciada')

    // conectar com o botão no html
    const btn_calcular = document.getElementById('#btn_calcular')
    const peso = document.getElementById('peso')

    // associar um comportamento ao botão
    // calcular.onclick = clicou_no_botao () => {alert('Clicou!')}

    // btn_calcular.onclick = () => {
        // const peso = peso.value
        // alert('Clicou!')
    // }
    btn_calcular.onclick = clicou_no_botao
}

function clicou_no_botao(){
    alert('Clicou!')
}
app()