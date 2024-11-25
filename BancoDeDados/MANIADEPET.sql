
SELECT * FROM Users;
SELECT * FROM Info_Pet;
SELECT * FROM Agen_Vis;
SELECT * FROM Funcionario;

-- Criar o banco de dados

CREATE DATABASE MANIADEPET;

GO

-- Usar o banco de dados criado

USE MANIADEPET;

GO

-- Criar a tabela Users

CREATE TABLE Users (
    User_Id INT PRIMARY KEY IDENTITY(1,1),
    User_Name VARCHAR(65),
    User_Senha VARCHAR(15),
    User_Email VARCHAR(70),
    User_Nasc DATE,
    User_Genero VARCHAR(50)
);

-- Criar a tabela Info_Pet com a chave estrangeira referenciando Users

CREATE TABLE Info_Pet (
    Pet_Id INT PRIMARY KEY IDENTITY(1,1),
    Inf_Especie VARCHAR(50),
    Inf_Raca VARCHAR(50),
    Inf_Cor VARCHAR(50),
    Inf_Data_Nasc VARCHAR(50),
    Inf_Peso VARCHAR(50),
    User_Id INT,
    FOREIGN KEY (User_Id) REFERENCES Users(User_Id)
);

-- Criar a tabela Agen_Vis

CREATE TABLE Agen_Vis (
    Agen_Id INT PRIMARY KEY IDENTITY(1,1),
    Agen_Tipo VARCHAR(65),
    agen_data_agen VARCHAR(65),
    Pet_Id INT,
    FOREIGN KEY (Pet_Id) REFERENCES Info_Pet (Pet_Id)
);

-- Criar a tabela Funcionario

CREATE TABLE Funcionario (
    Fun_Id INT PRIMARY KEY IDENTITY(1,1),
    Fun_Name VARCHAR(65),
    Fun_Nasc DATE,
    Fun_Genero VARCHAR (20),
    Fun_Ende VARCHAR(65),
    Fun_Num VARCHAR(15),
    Fun_Email VARCHAR(50),
    Agen_Id INT,
    FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)
);

-- Criar a tabela Imagem_Doc

CREATE TABLE Imagem_Doc (
    ImageDocuId INT PRIMARY KEY IDENTITY(1,1),
    AnimalId INT,
    TipoDocument VARCHAR(50),
    NomeArquivo VARCHAR(100),
    Agen_Id INT,
    FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)
);

-- Inserir usuários padrão
INSERT INTO USERS VALUES ('KITTY WAYNE','070415','KITTYWAY@GMAIL.COM','11-08-2006','Femenino');
INSERT INTO USERS VALUES ('JOAO SOARES', 'SOARES7', 'JOAOSOARES@GMAL.COM', '23-02-2006','Masculino');
INSERT INTO USERS VALUES ('LUIZ GUSTAVO ALVES', '0705200817','A60K109@GMAIL.COM','07-05-2007','Masculino');
--... (outros usuários já existentes)

-- Adicionar o ADMINISTRADOR FIXO ao banco de dados (novo código)

INSERT INTO Users (User_Name, User_Senha, User_Email, User_Nasc, User_Genero)
VALUES ('Administrador', 'Admin@1234', 'admin@admin.com', '1980-01-01', 'Masculino');

ALTER TABLE Users
ADD isAdmin BIT DEFAULT 0;

UPDATE Users
SET isAdmin = 1
WHERE User_Id = 1;


