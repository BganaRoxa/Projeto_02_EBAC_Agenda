const form = document.getElementById('form-agenda')
const novoContato = []
const novoTelefone = []
let contatos = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const nomeContato = document.getElementById('nome-contato')
    const telContato = document.getElementById('telefone-contato')

    if ((novoContato.includes(nomeContato.value))||(novoTelefone.includes(telContato.value))) {
        alert('O Nome do Contato ou o Número que você está tentando incluir, já foi salvo. Confira e tente novamente.')
    } else {
        novoContato.push(nomeContato.value)
        novoTelefone.push(telContato.value)

        let contato = '<tr>'
        contato += `<td>${nomeContato.value}</td>`
        contato += `<td>${telContato.value}</td>`
        contato += `<td><a href="https://api.whatsapp.com/send?phone=55${telContato.value}&text=Ol%C3%A1"><img src="./images/contato.png" alt="Imagem de um telefone" /></td>`
        contato += `</tr>`

        contatos += contato
    }

    nomeContato.value = ''
    telContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = contatos
}