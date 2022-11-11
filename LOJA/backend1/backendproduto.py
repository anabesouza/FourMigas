from config import *
from modeloproduto import Produto

@app.route("/")
def inicio():
    return 'Sistema de cadastro de Produtos. '+\
        '<a href="/incluir">Operação incluir Produto</a>'

@app.route("/incluir_Produto", methods=['post'])
def incluir_Produto():
    # preparar uma resposta otimista
    resposta = jsonify({"resultado": "ok", "detalhes": "oi"})
    # receber as informações da nova Produto
    dados = request.get_json() #(force=True) dispensa Content-Type na requisição
    try: # tentar executar a operação
      nova = Produto(**dados) # criar a nova Produto
      db.session.add(nova) # adicionar no BD
      db.session.commit() # efetivar a operação de gravação
    except Exception as e: # em caso de erro...
      # informar mensagem de erros
      resposta = jsonify({"resultado":"erro", "detalhes":str(e)})
    # adicionar cabeçalho de liberação de origem
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta # responder!

app.run(debug=True, host="0.0.0.0")

'''
$ curl -d '{"produto":"Colar", "valor": "R$ 19,00", "categoria":"micanga", "tamanho": "40cm"}' -X POST -H "Content-Type:application/json" localhost:5000/incluir_Produto
{
  "detalhes": "oi", 
  "resultado": "ok"
}
'''