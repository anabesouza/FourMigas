from config import *

from modelo import *
from modeloproduto import *

if os.path.exists(arquivobd):
    os.remove(arquivobd)

# criar tabelas
db.create_all()

print("Banco de dados e tabelas criadas")