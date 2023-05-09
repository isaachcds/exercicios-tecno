function logar(){
      const login = document.getElementById("login").value;
      const senha = document.getElementById("senha").value;

    if(login == "trends" && senha == "121314"){
        alert("Sucesso!");
     }else{
        alert('Usuario ou senha incorretos');
     }
 }