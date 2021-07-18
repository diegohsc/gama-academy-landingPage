//const form = document.getElementById('form')
const botao = document.getElementById('botao')

//form.addEventListener('submit', e => {
botao.addEventListener('click', e => {
    e.preventDefault() /*Impede que a página seja recarregada*/
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    let data = { nome, email }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)
        // console.log(`Seu nome é ${nome} e seu email é ${email}`)
})