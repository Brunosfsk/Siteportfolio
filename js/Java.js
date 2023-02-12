var obrigado = 'Obrigado pelo contato, em breve retornamos'
var campo = 'Por favor, preencha o campo'
var nome
var cargo
var empresa
var email
var telefone

function lerCampos() {
    nome = document.getElementById('nome').value
    cargo = document.getElementById('cargo').value
    empresa = document.getElementById('empresa').value
    email = document.getElementById('email').value
    telefone = document.getElementById('telefone').value 
}
function limpar() {
    document.getElementById('nome').value = ''
    document.getElementById('cargo').value = ''
    document.getElementById('empresa').value = ''
    document.getElementById('email').value = ''
    document.getElementById('telefone').value = ''
    
}
function validar() {
    lerCampos()

    if (nome == '') {
        alert(campo + ' nome')
    }
    else if (cargo == '') {
        alert(campo + ' cargo')
    }
    else if (empresa == '') {
        alert(campo + ' empresa')
    }
    else if (email == '') {
        alert(campo + ' email')
    }
    else if (telefone == '') {
        alert(campo + ' telefone')
    }
    else {
        alert(obrigado)
        limpar()
    }
    
}




