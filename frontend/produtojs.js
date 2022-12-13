 // código para mapear click do botão incluir Produto
 $(document).on("click", "#btIncluirProduto", function() {
    //pegar dados da tela
    produto = $("#campoProduto").val();
    imagem = $("#campoImagem").val();
    valor = $("#campoValor").val();
    categoria = $("#campoCategoria").val();
    tamanho = $("#campoTamanho").val();
    console.log(produto, imagem, valor, categoria, tamanho);
    // preparar dados no formato json
    var dados = JSON.stringify({ produto: produto, imagem: imagem, valor: valor, categoria: categoria, tamanho: tamanho});
    // fazer requisição para o back-end
    $.ajax({
        url: 'http://localhost:5000/incluir_Produto',
        type: 'POST',
        dataType: 'json', // os dados são recebidos no formato json
        contentType: 'application/json', // tipo dos dados enviados
        data: dados, // estes são os dados enviados
        success: ProdutoIncluida, // chama a função listar para processar o resultado
        error: erroAoIncluir
    });
    function ProdutoIncluida (retorno) {
        if (retorno.resultado == "ok") { // a operação deu certo?
            // informar resultado de sucesso
            alert("Cadastro realizado com sucesso!");
            //$("#mensagem").text("Produto incluído com sucesso!");
            // limpar os campos
            $("#campoProduto").val("");
            $("#campoImagem").val("");
            $("#campoValor").val("");
            $("#campoCategoria").val("");
            $("#campoTamanho").val("");
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