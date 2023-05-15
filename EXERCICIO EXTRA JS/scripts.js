// Mensagem

let mensagem = document.getElementById("mensagem")
let newPassword = null;

function carregar(){
newPassword = getPassword()
mensagem.innerText = "A senha enviado pelo email é: " + newPassword;
}

window.addEventListener("load", carregar)

// Gerador 
function getPassword() {
      const chars = "0123456789";
      const passwordLength = 6;
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      return password.toString()
    }

// Validação
function logar(){
      const login = document.getElementById("login").value;
      const senha = document.getElementById("senha").value;

    if(login == "trends" && senha === newPassword ){
      alert('Sucesso!')
      location.replace("https://www.treinaweb.com.br");
     }else{
        alert('Usuario ou senha incorretos');
        carregar()
     }
 }