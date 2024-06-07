document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
 
   
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
 
   
 
    
    if (email === 'user@example.com' && senha === 'Senha190') {
        alert('Login bem sucedido!');
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
});