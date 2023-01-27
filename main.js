const form = document.getElementById('form-agenda')
let contatos = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nomeContato = document.getElementById('nome-contato')
    const telContato = document.getElementById('telefone-contato')

    let contato = '<tr>'
    contato += `<td>${nomeContato.value}</td>`
    contato += `<td>${telContato.value}</td>`
    contato += `<td><a href="https://api.whatsapp.com/send?phone=55${telContato.value}&text=Ol%C3%A1"><img src="./images/contato.png" alt="Imagem de um telefone" /></td>`
    contato += `</tr>`

    contatos += contato

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = contatos

    nomeContato.value = ''
    telContato.value = ''
}
)




