from config import *

class Pessoa(db.Model):
    # atributos da pessoa
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    email = db.Column(db.String(254))
    senha = db.Column(db.String(254))
    repetir_senha = db.Column(db.String(254))
    telefone = db.Column(db.String(254))
    estado = db.Column(db.String(254))
    cidade = db.Column(db.String(254))
    cep = db.Column(db.String(254))
    rua = db.Column(db.String(254))
    numero = db.Column(db.String(254))
    complemento = db.Column(db.String(254))

    # método para expressar a pessoa em forma de texto
    def __str__(self):
        return f'(id={self.id}) {self.nome}, '+\
               f'{self.email}, {self.senha}, {self.repetir_senha}, {self.telefone}, {self.estado}, {self.cidade}, {self.cep}, {self.rua}'+\
               f'{self.numero}, {self.complemento}'

    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "senha": self.senha,
            "repetir_senha": self.repetir_senha,
            "telefone": self.telefone,
            "estado": self.estado,
            "cidade": self.cidade,
            "cep": self.cep,
            "rua": self.rua,
            "numero": self.numero,
            "complemento": self.complemento
        }

# teste    
if __name__ == "__main__":
    # apagar o arquivo, se houver
    if os.path.exists(arquivobd):
        os.remove(arquivobd)

    # criar tabelas
    db.create_all()

    # teste da classe Pessoa
    p1 = Pessoa(nome = "João da Silva", email = "josilva@gmail.com", 
        telefone = "47 99012 3232", estado= "Santa Catarina", cidade="Blumenau",
        cep="89040-800", rua="Rua 1000", numero="1234")     
    
    # persistir
    db.session.add(p1)
    db.session.commit()
    
    # exibir a pessoa
    print(p1)

    # exibir a pessoa no format json
    # print(p1.json())