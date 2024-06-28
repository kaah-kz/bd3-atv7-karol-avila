// DEFINE O NOME DO BANCO DE DADOS
const database = 'BD3-NoSQL-Produtos';

// DEFINE O NOME DA COLLECTION
const collection = 'bd3-nosql-atv7';

// ACESSA O BANCO DE DADOS BD3-NoSQL-Produtos
use(database);

// CRIA A COLLECTION bd3-nosql-atv7
db.createCollection(collection);