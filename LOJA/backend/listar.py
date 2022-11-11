from config import *
from modelo import *

# curl localhost:5000/listar/Pessoa
@app.route("/listar/<string:classe>")
def listar(classe):
    # obter os dados da classe informada
    dados = None
    if classe == "Pessoa":
      dados = db.session.query(Pessoa).all()
    # converter dados para json
    lista_jsons = [ x.json() for x in dados ]
    # converter a lista do python para json
    resposta = jsonify(lista_jsons)
    # PERMITIR resposta para outras pedidos oriundos de outras tecnologias
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta
    

    #curl localhost:5000/listar/Pessoa


'''

resultado da execução:

aluno@D06-PC02:~$ curl localhost:5000/listar/Pessoa
[
  {
    "cep": "89040-800",
    "cidade": "Blumenau",
    "complemento": null,
    "email": "josilva@gmail.com",
    "estado": "Santa Catarina",
    "id": 1,
    "nome": "Jo\u00e3o da Silva",
    "numero": "1234",
    "repetir_senha": null,
    "rua": "Rua 1000",
    "senha": null,
    "telefone": "47 99012 3232"
  }
]




'''