$(function () { // quando o documento estiver pronto/carregado

    // chamada ao backend
    $.ajax({
        url: 'http://localhost:5000/retornar_Produtos',
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar, // chama a função listar para processar o resultado
        error: function () {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    // função executada quando tudo dá certo
    function listar(produto) {
        // percorrer a lista de produto retornadas; 
        for (var i in produto) { //i vale a posição no vetor
            lin = '<hr>' + // elabora linha com os dados da pessoa
                '<p>' + produto[i].produto + '</p>' +
                '<p>' + produto[i].valor + '</p>' +
                '<p>' + produto[i].categoria + '</p>' +
                '<p>' + produto[i].tamanho + '</p>';
            // adiciona a linha no corpo da tabela
            $('#corpoTabelaProdutos').append(lin);
        }
    }

});
/*

    <br>

    <table>
        <tr>
        <p><img id="produtos"  width="350" height="350" src='micanga2.jpg'/>
        <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>

        <p><img id="produtos" width="350" height="350" src="micanga4.jpg" alt="">
            <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>

        <p><img id="produtos" width="350" height="350" src="micanga16.jpg" alt="">
            <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>
        </tr>
    </table>
    <br>
    <br>

    <table>
        <tr>
        <p><img id="produtos"  width="350" height="350" src='micanga11.jpg'/>
            <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>

        <p><img id="produtos" width="350" height="350" src="micanga12.jpg" alt="">
            <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>

        <p><img id="produtos" width="350" height="350" src="micanga13.jpg" alt="">
            <p><a id="link" target="_blank" href="lalala.com">PRODUTO</a></p></p>
        </tr>
    </table>
    <br>
    <br>
</br>
*/