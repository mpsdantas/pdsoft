-- 2. Como base no modelo lógico, contido no arquivo Lógico_1_exercicio.png, criar o modelo físico do banco de dados VENDA, utilizando a Linguagem SQL.
CREATE TABLE categoria(
    codigo_categoria INTEGER PRIMARY KEY NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE produto(
    codigo_produto INTEGER PRIMARY KEY NOT NULL,
    codigo_categoria INTEGER REFERENCES categoria(codigo_categoria),
    nome TEXT NOT NULL,
    preco REAL NOT NULL
);

CREATE TABLE pedido(
    codigo_pedido INTEGER PRIMARY KEY NOT NULL,
    quantidade INT NOT NULL,
    data DATE NOT NULL
);

CREATE TABLE produto_pedido(
    codigo_pedido INTEGER REFERENCES pedido(codigo_pedido),
    codigo_produto INTEGER REFERENCES produto(codigo_produto)
);