CREATE TABLE Pessoa (
    id_pessoa INTEGER PRIMARY KEY,
    nome VARCHAR(32)
);

CREATE TABLE tbl_autores (
 ID_Autor integer CONSTRAINT pk_id_autor PRIMARY KEY,
 Nome_Autor varchar(30) NOT NULL, 
 Sobrenome_Autor varchar(40) NOT NULL,
 Data_Nasc date
);