const database = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(database);

//select-1 valor maior que R$700//
db[collection].find({valor:{$gt : 700}});

db[collection].find({valor:{$lt: 450}});

db[collection].find({valor:{$gte: 500, $lte: 950}});