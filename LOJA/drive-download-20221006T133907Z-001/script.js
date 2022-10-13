$(function() { // quando o documento estiver pronto/carregado
    
    // código para mapear click do botão incluir pessoa
    $(document).on("click", "#btIncluirPessoa", function() {
        //pegar dados da tela
        nome = $("#campoNome").val();
        email = $("#campoEmail").val();
        senha = $("#campoSenha").val();
        repetir_senha = $("#campoRepetir_senha").val();
        tel = $("#campoTelefone").val();
        estado = $("#campoEstado").val();
        cidade = $("#campoCidade").val();
        cep = $("#campoCep").val();
        rua = $("#campoRua").val();
        numero = $("#campoNumero").val();
        complemento = $("#campoComplemento").val();
        console.log(nome, email, senha, repetir_senha, tel, estado, cidade, cep, rua, numero, complemento);
        // preparar dados no formato json
        var dados = JSON.stringify({ nome: nome, email: email, senha: senha, repetir_senha: senha, telefone: tel, estado: estado, cidade: cidade, cep: cep, rua: rua, numero: numero, complemento: complemento });
        // fazer requisição para o back-end
        $.ajax({
            url: 'http://localhost:5000/incluir_pessoa',
            type: 'POST',
            dataType: 'json', // os dados são recebidos no formato json
            contentType: 'application/json', // tipo dos dados enviados
            data: dados, // estes são os dados enviados
            success: pessoaIncluida, // chama a função listar para processar o resultado
            error: erroAoIncluir
        });
        function pessoaIncluida (retorno) {
            if (retorno.resultado == "ok") { // a operação deu certo?
                // informar resultado de sucesso
                alert("Cadastro realizado com sucesso!");
                //$("#mensagem").text("Pessoa incluída com sucesso!");
                // limpar os campos
                $("#campoNome").val("");
                $("#campoEmail").val("");
                $("#campoSenha").val("");
                $("#campoRepetir_senha").val("");
                $("#campoTelefone").val("");
                $("#campoEstado").val("");
                $("#campoCidade").val("");
                $("#campoCep").val("");
                $("#campoRua").val("");
                $("#campoNumero").val("");
                $("#campoComplemento").val("");
            } else {
                // informar mensagem de erro
                alert("ERRO na inclusão: "+retorno.resultado + ":" + retorno.detalhes);
            }            
        }
        function erroAoIncluir (retorno) {
            // informar mensagem de erro
            alert("ERRO ao contactar back-end: "+retorno.resultado + ":" + retorno.detalhes);
        }
    });
});

function senhaValida(p){

  var retorno = false;
 
  var letrasMaiusculas = /[A-Z]/;
 
  var letrasMinusculas = /[a-z]/; 
 
  var numeros = /[0-9]/;
 
  if(p.length > 8){
 
  return retorno;
 
  }
 
  if(p.length < 8){
 
  return retorno;
 
  }
 
  var auxMaiuscula = 0;
 
  var auxMinuscula = 0;
 
  var auxNumero = 0;
 
  for(var i=0; i<p.length; i++){
 
  if(letrasMaiusculas.test(p[i]))
 
  auxMaiuscula++;
 
  else if(letrasMinusculas.test(p[i]))
 
  auxMinuscula++;
 
  else if(numeros.test(p[i]))
 
  auxNumero++;
 
  }
 
  if (auxMaiuscula > 0){
 
  if (auxMinuscula > 0){
 
  if (auxNumero > 0){
     {
 
  retorno = true;
 
  }}}}

  return retorno;

}

console.log(senhaValida("test1234"));



/*var myInput = document.getElementById("Senha");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
//myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  function validarSenha(input){
    if(input.valueOf !== document.getElementById("campoSenha").value){
        input.setCustomValidity('Senha não são iguais, favor repita!');
    }else{
        input.setCustomValidity('');
    }
}
}
*/