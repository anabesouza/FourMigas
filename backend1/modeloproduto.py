from config import *

class Produto(db.Model):
    # atributos da Produto
    id = db.Column(db.Integer, primary_key=True)
    produto = db.Column(db.String(254))
    imagem = db.Column(db.String(254))
    valor = db.Column(db.String(254))
    categoria = db.Column(db.String(254))
    tamanho = db.Column(db.String(254))

    # método para expressar a Produto em forma de texto
    def __str__(self):
        return f'{self.produto}, {self.imagem}, {self.valor}, {self.categoria}, {self.tamanho}'
    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "produto": self.produto,
            "imagem": self.imagem,
            "valor": self.valor,
            "categoria": self.categoria,
            "tamanho": self.tamanho,
        }

# teste    
if __name__ == "__main__":
    # apagar o arquivo, se houver
    #if os.path.exists(arquivobd):
    #    os.remove(arquivobd)

    # criar tabelas
    #db.create_all()

    # teste da classe Produto
    p1 = Produto(produto = "Colar", valor = "R$ 14,99", categoria = "micangas", tamanho = "40cm")     
    
    # persistir
    db.session.add(p1)
    db.session.commit()
    
    # exibir a Produto
    print(p1)

    # exibir a Produto no format json
    # print(p1.json())