// DEFINE O NOME DO BANCO DE DADOS
const database = 'BD3-NoSQL-Produtos';

// DEFINE O NOME DA COLLECTION
const collection = 'bd3-nosql-atv7';

// ACESSA O BANCO DE DADOS BD3-NoSQL-AtlasMongoDB
use(database);

// INSERE UM DOCUMENTO DE DADOS DOS PRODUTOS NA COLLECTION
db['bd3-nosql-atv7'].insertOne([
    {
        "cod_produto": 1,
        "nome_produto": "Shampoo Skala Men Limpeza Renovadora",
        "desc_produto": "Limpa sem ressecar, foi formulado especialmente para limpar os fios de maneira suave, porém satisfatória.",
        "valor": 100.00
    },
    {
        "cod_produto": 2,
        "nome_produto": "Perfume Victorio & Lucchino Magnolia Sensual Feminino Eau de Toilette 150 ml",
        "desc_produto": "Limpa sem ressecar, foi formulado especialmente para limpar os fios de maneira suave, porém satisfatória.",
        "valor": 200.00
    },
    {
        "cod_produto": 3,
        "nome_produto": "Xicara de 150ml Live para sublimação 10 unidades",
        "desc_produto": "Vidro sintético",
        "valor": 300.00
    },
    {
        "cod_produto": 4,
        "nome_produto": "TIRANOSSAURO REX CORRENDO PAPO VERDE BRINQUEDO DE DINOSSAURO MINIATURA T.REX PAPO",
        "desc_produto": "Tyrannosaurus rex quer dizer Lagarto Tirano Rei e teve esse nome porque na época de sua descoberta não se conhecia nenhum dinossauro carnívoro maior que ele",
        "valor": 400.00
    },
    {
        "cod_produto": 5,
        "nome_produto": "Dragão de Gelo",
        "desc_produto": "Com controle remoto",
        "valor": 500.00
    },
    {
        "cod_produto": 6,
        "nome_produto": "Carro Dublê de Controle Remoto Rotativo 360º",
        "desc_produto": "PESO: 454G, TEMPO DE CARREGAMENTO: CERCA DE 1,5 HORAS, MATERIAL DO PRODUTO: ABS / COMPONENTES ELETRÔNICOS, TAMANHO DO PRODUTO: 14,5 14,5 8,5 CM",
        "valor": 600.00
    },
    {
        "cod_produto": 7,
        "nome_produto": "Domary Carrinho",
        "desc_produto": "RC KYAMRC S600 1/22 2.4G 30KM / h 4WD com controle remoto de alta velocidade pickup",
        "valor": 700.00
    },
    {
        "cod_produto": 8,
        "nome_produto": "Monster Jam, conjunto de brinquedos",
        "desc_produto": "Com luzes e sons, com caminhão monstro escavador de túmulos fundido em escala 1:64 exclusivo",
        "valor": 800.00
    },
    {
        "cod_produto": 9,
        "nome_produto": "Vale Presente KF Bikes",
        "desc_produto": "Vale Presente",
        "valor": 900.00
    },
    {
        "cod_produto": 10,
        "nome_produto": "Celular Smartphone Motorola Moto E22 4G",
        "desc_produto": "Mediatek G37 4Gb Ram 128Gb - Azul",
        "valor": 1000.00
    }
]);