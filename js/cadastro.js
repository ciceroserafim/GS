document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
 
    
    var nome = document.getElementById("name").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    document.getElementById("cadastro").reset();
});
 
 
 
