let criarSenha = document.getElementById('senha');
let iconExcluir = document.getElementById('icon_excluir')
let senhaAleatoria = document.getElementById('senhacriada')

criarSenha.addEventListener('click', () => {
    const interfacePassaword = document.getElementById('container_senha')
    interfacePassaword.style.display = 'block';
    let senhas =senhaAleatoria.innerHTML = ''
    let caract = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (i = 0; i <8; i++){
        senhas += caract.charAt(Math.floor(Math.random() * caract.length))
    }
    senhaAleatoria.innerHTML = senhas
})

iconExcluir.addEventListener('click', () => {
    document.getElementById('container_senha').style.display = 'none';
})
