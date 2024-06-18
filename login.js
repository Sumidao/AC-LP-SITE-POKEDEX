function logar() {
    do {
        let login = document.getElementById('login').value;
        let senha = document.getElementById('senha').value;

        if (login === '' || senha === '') {
            alert('O campo não pode estar vazio');

        } else if (login.toLowerCase() !== 'pokemon' || senha.toLowerCase() !== 'pokemon') {
            alert('Usuário ou senha incorretos');
       
        }  
        
        else {
            alert('Login efetuado com sucesso');
            window.location.href = 'pokedex.html'; 
            return;
        }
    }
     while (login.toLowerCase() !== 'pokemon' || senha.toLowerCase() !== 'pokemon'); 
}