let criarSenha = document.getElementById('senha');
let iconExcluir = document.getElementById('icon_excluir');
let senhaAleatoria = document.getElementById('senhacriada');
let verSenha = document.querySelector('#button_icon');
let confSenha = document.querySelector('#button_icon2')

criarSenha.addEventListener('click', () => {
    const interfacePassaword = document.getElementById('container_senha')
    interfacePassaword.style.display = 'block';
    let senhas =senhaAleatoria.innerHTML = ''
    let caract = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (i = 0; i <8; i++){
        senhas += caract.charAt(Math.floor(Math.random() * caract.length))
    }
    senhaAleatoria.innerHTML = senhas
    let textoCopiado = document.createElement('textarea');
    document.body.appendChild(textoCopiado);
    textoCopiado.value = senhas;
    textoCopiado.select();
    document.execCommand('copy');
    document.body.removeChild(textoCopiado);

    let textoCopiados = document.getElementById('copied').innerHTML = 'copiado!'
    
})

iconExcluir.addEventListener('click', () => {
    document.getElementById('container_senha').style.display = 'none';
})
verSenha.addEventListener('click', () => {
    const verSenhaInput = document.getElementById('senha_de_usario');
    if (verSenhaInput.type === "password") {
        verSenhaInput.type = "text"
    } else if (verSenhaInput.type === "text") {
        verSenhaInput.type = "password"
    }
})
confSenha.addEventListener('click', () => {
    const verSenhaInputConfirm = document.getElementById('senha_de_usario_confirm');
    if (verSenhaInputConfirm.type === "password") {
        verSenhaInputConfirm.type = "text"
    } else if (verSenhaInputConfirm.type === "text") {
        verSenhaInputConfirm.type = "password"
    }
})

