function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = parseInt(document.getElementById('idade').value);
    let senha = document.getElementById('senha').value;
    let confirmacao = document.getElementById('confirmacao').value;
    let genero = document.querySelector('input[name="gender"]:checked');

    do {
        if (!nome || !email || isNaN(idade) || !senha || !confirmacao || !genero) {
            alert('O campo não pode estar vazio.');
            return;
        } else if (nome.length < 2 || idade < 0 || idade > 100 || senha.length < 6 || senha !== confirmacao || !genero) {
            alert('Informação invalida, faça novamente');
            return;
        
        } else {
            alert(`Cadastro efetuado com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nIdade: ${idade}\nGênero: ${genero.id}`);
            window.location.href = 'pokedex.html';
            break;
        }
    } while (nome.length < 2 || idade < 0 || idade > 100 || senha.length < 6 || senha !== confirmacao || !genero);
}
