--1. Criar o banco de dados VENDA.
CREATE DATABASE VENDA WITH OWNER = postgres ENCODING = 'UTF8' TABLESPACE = pg_default LC_COLLATE = 'pt_BR.UTF-8' LC_CTYPE = 'pt_BR.UTF-8' CONNECTION LIMIT = -1;



--2. Como base no modelo lógico, contido no arquivo Lógico_1_exercicio.png, criar o modelo físico do banco de dados VENDA, utilizando a Linguagem SQL.
CREATE TABLE categoria(
    codigo_categoria VARCHAR(10) PRIMARY KEY NOT NULL,
    descricao VARCHAR(500) NOT NULL
);

CREATE TABLE produto(
    codigo_produto VARCHAR(10) PRIMARY KEY NOT NULL,
    codigo_categoria VARCHAR(10) REFERENCES categoria(codigo_categoria),
    nome VARCHAR(70) NOT NULL,
    preco REAL NOT NULL
);

CREATE TABLE pedido(
    codigo_pedido VARCHAR(10) PRIMARY KEY NOT NULL,
    quantidade INT NOT NULL,
    data DATE NOT NULL
);

CREATE TABLE produto_pedido(
    codigo_pedido VARCHAR(10) REFERENCES pedido(codigo_pedido),
    codigo_produto VARCHAR(10) REFERENCES produto(codigo_produto)
); 



--3. Fazer um scritp que insira os valores na Tabela DESCRIÇÃO as seguintes informações:
insert into categoria
    (codigo_categoria, descricao)
values
    ('I654', 'Produtos estrangeiros'),
    ('L986', 'Livraria'),
    ('E120', 'Eletrônicos'),
    ('C356', 'Cama e Mesa');

    

--4. Faço um scritp que altere a descrição da Categoria I654, para importados.
update categoria
set descricao='importados'
where codigo_categoria='I654';


--5. Fazer um scritp que insira os valores na Tabela PRODUTO as seguintes informações:
insert into produto
    (nome, codigo_produto, codigo_categoria, preco)
values
    ('Livro', 'LL23', 'L986', 34.54),
    ('Toalha', 'TC65', 'C356', 45.00),
    ('Revista', 'LI24','L986',15.90),
    ('Computador pessoal', 'CE23', 'E120', 1500.00),
    ('HD', 'CE24', 'E120', 350.00);
-- OBS COMO A CHAVE PRIMRIA NÃO PODE SE REPETIR MUDEI O CÓDIGO DO HD QUE ESTAVA IGUAL AO DO COMPUTADOR PARA CE24.


--6. Fazer um script que selecione todos os produtos da Tabela Produto da categoria L986.

select * from produto
where codigo_categoria='L986';


--7. Fazer um script que selecione a descrição da categoria, nome do produto, código_produto e preço quando o código da categoria for igual a E120.

select  descricao, nome, codigo_produto, preco from produto inner join categoria on
	produto.codigo_categoria = categoria.codigo_categoria
	where produto.codigo_categoria='E120'; 



--8. Lista todas as Categorias ordenadas em ordem alfabética.

select * from categoria order by codigo_categoria;



--9. Fazer um script que some todos os preços da tabela Produto.

select SUM(preco) from produto;



--10. Fazer um script que dê a média de preços da tabela Produto.
select AVG(preco) from produto;



--11. Fazer um scritp que insira os valores na Tabela PEDIDO as seguintes informações:

insert into pedido
    (data, codigo_pedido, quantidade)
values
    ('25-10-2016','P02',4),
    ('25-11-2016','P03',7),
    ('07-03-2017','P04',12),
    ('07-03-2017','P05',10),
    ('20-04-2017','P06',6);


--12. Fazer um scritp que insira os valores na Tabela PRODUTO_PEDIDO as seguintes informações:

insert into produto_pedido
    (codigo_pedido, codigo_produto)
values
    ('P02', 'LL23'),
    ('P02', 'TC65'),
    ('P02', 'CE23'),
    ('P03', 'Ll24'),
    ('P03', 'CE23'),
    ('P04', 'Ll24'),
    ('P05', 'TC65'),
    ('P06', 'LL23');

--13. Fazer um script que liste todos os pedidos cuja quantidade seja superior ou igual 10.
select * from pedido
where quantidade>=10;


--14. Listar a categoria, o nome do produto, preço, número do pedido, a data do pedido de todos os pedidos de código igual a P02.

select  codigo_categoria, nome, preco, pedido.codigo_pedido, quantidade, data from pedido inner join (produto_pedido cross join produto) on
	produto_pedido.codigo_pedido = pedido.codigo_pedido and produto.codigo_produto=produto_pedido.codigo_produto
	where produto_pedido.codigo_pedido='P02'; 

