from config import *
from modelo import Produto

@app.route("/")
def inicio():
    return 'Sistema de cadastro de Produto. '+\
        '<a href="/listar_Produtos">Operação listar</a>'

@app.route("/retornar_Produtos")
def retornar_Produtos():
    # obter as Produtos do cadastro
    Produto = db.session.query(Produto).all()
    # aplicar o método json que a classe Produto possui a cada elemento da lista
    Produto_em_json = [ x.json() for x in Produto ]
    # converter a lista do python para json
    resposta = jsonify(Produto_em_json)
    # PERMITIR resposta para outras pedidos oriundos de outras tecnologias
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta # retornar...

app.run(debug=True)

# teste da API:
# curl localhost:5000/retornar_Produtos