from geral.config import *
from modelo.Pessoa import *

@app.route("/atualizar/<string:classe>", methods=['put'])
def atualizar(classe):
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    # receber as informações do novo objeto
    dados = request.get_json()  
    try:  
        if classe == "Pessoa":
            if 'id' not in dados: # não tem o atributo id?
                resposta = jsonify({"resultado": "erro", 
                            "detalhes": "Atributo id não encontrado"})
            else:
                id = dados['id']
                alguem = Pessoa.query.get(id) # localizar a pessoa
                if alguem is None: # se não encontrou
                    resposta = jsonify({"resultado": "erro", 
                                "detalhes": f"Objeto não encontrado, id: {id}"})
                else:
                    # atualizar os campos (esta parte dá pra melhorar :-)
                    alguem.nome = dados['nome'] # if dados['nome'] is not None else alguem.nome
                    alguem.email = dados['email']
                    alguem.senha = dados['senha']
                    alguem.repetir_senha = dados['repetir_senha']
                    alguem.telefone = dados['telefone']
                    alguem.estado = dados['estado']
                    alguem.cidade = dados['cidade']
                    alguem.cep = dados['cep']
                    alguem.rua = dados['rua']
                    alguem.numero = dados['numero']
                    alguem.complemento = dados['complemento']
                    db.session.commit()  # efetivar a atualização
        else:
            resposta = jsonify({"resultado": "erro", "detalhes": f"Classe não encontrada: {classe}"})        
        
    except Exception as e:  # em caso de erro...
        # informar mensagem de erro
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})
    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta  # responder!