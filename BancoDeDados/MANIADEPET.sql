USE MASTER IF EXISTS(SELECT * FROM SYS.databases WHERE NAME = 'MANIADEPET')

DROP DATABASE MANIADEPET

GO
 
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

-- Exibir os dados das tabelas para verificação


SELECT * FROM Users;
SELECT * FROM Info_Pet;

SELECT * FROM Agen_Vis;

SELECT * FROM Funcionario;
 
-- Inserir pets na tabela Info_Pet

INSERT INTO Info_Pet (Inf_Especie, Inf_Raca, Inf_Cor, Inf_Data_Nasc, Inf_Peso, User_Id)

VALUES ('Cachorro', 'Labrador', 'Amarelo', '2020-05-15', '30kg', 1);

INSERT INTO Info_Pet (Inf_Especie, Inf_Raca, Inf_Cor, Inf_Data_Nasc, Inf_Peso, User_Id)

VALUES ('Gato', 'Persa', 'Branco', '2021-03-20', '5kg', 2);

INSERT INTO Info_Pet (Inf_Especie, Inf_Raca, Inf_Cor, Inf_Data_Nasc, Inf_Peso, User_Id)

VALUES ('Cachorro', 'Bulldog', 'Marrom', '2019-08-10', '20kg', 3);

INSERT INTO Info_Pet (Inf_Especie, Inf_Raca, Inf_Cor, Inf_Data_Nasc, Inf_Peso, User_Id)

VALUES ('Gato', 'Sphynx', 'Cinza', '2022-01-12', '4kg', 4);

INSERT INTO Info_Pet (Inf_Especie, Inf_Raca, Inf_Cor, Inf_Data_Nasc, Inf_Peso, User_Id)

VALUES ('Cachorro', 'Beagle', 'Tricolor', '2020-11-25', '12kg', 1);

 
-- Tabela de agenda de visitas

CREATE TABLE Agen_Vis (

    Agen_Id INT PRIMARY KEY IDENTITY(1,1),

    Agen_Tipo VARCHAR(65),

    agen_data_agen VARCHAR(65),

	Pet_Id INT,

	FOREIGN KEY (Pet_Id) REFERENCES Info_Pet (Pet_Id)

);
 
-- Tabela de funcionários

CREATE TABLE Funcionario (

    Fun_Id INT PRIMARY KEY IDENTITY(1,1),

    Fun_Name VARCHAR(65),

    Fun_Nasc DATE,

    Fun_Genero VARCHAR (20),

    Fun_Ende VARCHAR(65),

    Fun_Num VARCHAR(15),

    Fun_Email VARCHAR(50),

	Agen_Id INT ,

	FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)

);
 

 
-- Tabela de notas e observações


 
-- Tabela de imagens e documentos

CREATE TABLE Imagem_Doc (

    ImageDocuId INT PRIMARY KEY IDENTITY(1,1),

    AnimalId INT,

    TipoDocument VARCHAR(50),

    NomeArquivo VARCHAR(100),

	Agen_Id INT,

	FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)

);
 
ALTER TABLE Imagem_Doc

ADD CONSTRAINT APENAS_NUMEROS

CHECK (NomeArquivo NOT LIKE '%[^0-9]%');

INSERT INTO USERS VALUES ('KITTY WAYNE','070415','KITTYWAY@GMAIL.COM','11-08-2006','Femenino');
INSERT INTO USERS VALUES ('JOAO SOARES', 'SOARES7', 'JOAOSOARES@GMAL.COM', '23-02-2006','Masculino'); 
INSERT INTO USERS VALUES ('LUIZ GUSTAVO ALVES', '0705200817','A60K109@GMAIL.COM','07-05-2007','Masculino'); 
INSERT INTO USERS VALUES ('LUCAS','12345678','LUCASHENRI@GMAIL.COM','14-06-1979','Masculino'); 
INSERT INTO USERS VALUES ('LAIS LOTUS','LA16012008@','00001133102918SP@AL.EDUCACAO.SP.GOV.BR','16-01-2008','Femenino'); 
INSERT INTO USERS VALUES ('JULIN ENTORTOR','EUTEAMOMAE','DICKJACKSON@GMAIL.COM','06-06-2006','Femenino'); 
INSERT INTO USERS VALUES ('JACK','31081979','J@GMAIL.COM','31-08-1979','Masculino'); 
INSERT INTO USERS VALUES ('GABRIEL','TIMAO25163','GABRIELOMAISGAY@GMAIL.COM','30-03-2005','Masculino'); 
INSERT INTO USERS VALUES ('FRANK OCEAN','ILOVELIFE','FRANKOCEAN@GMAIL.COM','11-01-2001','Femenino');
INSERT INTO USERS VALUES ('Maria', 'outra_senha', 'maria@email.com', '1985-08-20', 'Femenino');
INSERT INTO USERS VALUES ('Pedro', 'senha_secreta', 'pedro@email.com', '1995-03-10', 'Masculino');
INSERT INTO USERS VALUES ('Vitinho','matematica123','vitnholopes@gmail.com','22-09-2004','Masculino');
 
---ATUALIZEI O USER, NO CASO O GENERO
--UPDATE USERS
--SET uSER_gENERO = 'MASCULINO'
--WHERE USER_ID = 2
 
---------------------------------------------------------------------------------------------------------------------------
SELECT * FROM Funcionario
 
INSERT INTO Funcionario VALUES ('KItty Wayne','11-08-2000','F','Barueri-SP','11953610244','KittyWay11@gmail.com',null);
INSERT INTO Funcionario VALUES ('João Lucas','25-05-1972','M','Carapicuiba-SP','11947826699','JoaoLucas@gmail.com',null);
INSERT INTO Funcionario VALUES ('Luan Henrique','02-05-2001','M','Barueri-SP','11971699455','Luancaterin@Iclod.com', null);
INSERT INTO Funcionario VALUES ('Marianne Costa','01-11-1995','F','Alphaville-SP','11941558878', 'marianegatinha@hotmaill.com', null);
INSERT INTO Funcionario VALUES ('Julia Catrina','04-05-1971','F','Jandira-SP','11947458865','Juliastre@gmail.com',null);
INSERT INTO Funcionario VALUES ('Victor Lopes','02-02-1992','M','Barueri-SP','11942455295','lopesgatrup@gmail.com',null);
INSERT INTO Funcionario VALUES ('Laurindo Cruz','11-12-2000','M','Barueri-SP','62945852566','cruzxpso@gmail.com',null);
INSERT INTO Funcionario VALUES ('Rony Cabral','25-09-2000','M','Barueri-SP','11925657848','cabralprodutor@gmail.com',null);
INSERT INTO Funcionario VALUES ('Katherine Mello','04-05-2004','F','Alphaville','11842586699','mellovictin@gmail.com',null);
INSERT INTO Funcionario VALUES ('Carine Viliy','02-07-1978','F','Osasco','11971694166','fofolete@gmail.com',null);
 
--Funcionario (
--   Fun_Id INT PRIMARY KEY IDENTITY(1,1),
--   Fun_Name VARCHAR(65),
  --  Fun_Nasc DATE,
  --  Fun_Genero VARCHAR (20),
  --  Fun_Ende VARCHAR(65),
--   Fun_Num INT,
--   Fun_Email
 
select * from funcionario
 
--------------------------------------------------------------------------------------------------------------------------
INSERT INTO Info_Pet VALUES ('1', 'Preto', 'Cachorro', 'dog',  'Labrador','doze', '1'); on
INSERT INTO Info_Pet VALUES ('Gato', 'Siamês', 'Marrom', 'Mia', '2023-02-10', 4.2, '2');
INSERT INTO Info_Pet VALUES ('Cavalo', 'Puro Sangue Árabe', 'Branco', 'Relâmpago', '2023-04-20', 550, '3');
INSERT INTO Info_Pet VALUES ('Papagaio', 'Arara-azul', 'Azul e Amarelo', 'Loro', '2023-03-10', 0.5, '4');
INSERT INTO Info_Pet VALUES ('Cobra', 'Python', 'Verde', 'Slither', '2023-02-20', 5.0, '5');
INSERT INTO Info_Pet VALUES ('Chinchila', 'Standard', 'Cinza', 'Peludinha', '2023-02-28', 0.6, '6');
INSERT INTO Info_Pet VALUES ('Peixe', 'Betta Splendens', 'Vermelho', 'Aquiles', '2023-01-05', 0.02, '7');
INSERT INTO Info_Pet VALUES ('Porquinho-da-índia', 'Sheltie', 'Marrom e Branco', 'Fofinho', '2023-03-05', 0.8, '8');
INSERT INTO Info_Pet VALUES ('Hamster', 'Sírio', 'Dourado', 'Bolinha', '2023-01-20', 0.1, '9');
INSERT INTO Info_Pet VALUES ('Coelho', 'Holandês', 'Branco e Preto', 'Saltitante', '2023-04-05', 1.2, '10');
INSERT INTO Info_Pet VALUES ('Pássaro', 'Canário-do-reino', 'Amarelo', 'Melodia', '2023-03-18', 0.05, '11');
INSERT INTO Info_Pet VALUES ('Peixe', 'Guppy', 'Multicolorido', 'Nemo', '2023-02-05', 0.01, '12');
 
select * from Info_Pet
-----------------------------------------------------------------------------------------------------------
INSERT INTO Agen_Vis VALUES ('Consultas preventivas','2024-01-15','1');
INSERT INTO Agen_Vis VALUES ('Vacinação','2024-01-15', '2');
INSERT INTO Agen_Vis VALUES ('Cirurgias de esterilização','2024-03-10', '3');
INSERT INTO Agen_Vis VALUES ('Vacinação','2024-04-05', '4');
INSERT INTO Agen_Vis VALUES ('Exames laboratoriais','2024-05-25', '5');
INSERT INTO Agen_Vis VALUES ('Consultas preventivas','2024-06-11', '6');
INSERT INTO Agen_Vis VALUES ('Cirurgias de esterilização','2024-07-30', '7');
INSERT INTO Agen_Vis VALUES ('Exames laboratoriais','2024-08-18', '8');
INSERT INTO Agen_Vis VALUES ('Vacinação','2024-09-27 13:40:30', '9');
INSERT INTO Agen_Vis VALUES ('Cirurgias de esterilização','2024-10-13', '10');
INSERT INTO Agen_Vis VALUES ('Consultas preventivas','2024-11-09', '11');
INSERT INTO Agen_Vis VALUES ('Vacinação','2024-12-31', '12');
 
SELECT  * FROM Agen_Vis
 
 
SELECT * FROM Nota_Obs
 
INSERT INTO Nota_Obs VALUES ('6','2024-01-15','A','1');
INSERT INTO Nota_Obs VALUES ('8','2024-02-20','bom','2');
INSERT INTO Nota_Obs VALUES ('9','2024-03-10','satisfatorio','3');
INSERT INTO Nota_Obs VALUES ('9','2024-04-05','otimo petshop','4');
INSERT INTO Nota_Obs VALUES ('10','2024-05-25','otimo petshop','5');
INSERT INTO Nota_Obs VALUES ('5','2024-06-11','otimo petshop','6');
INSERT INTO Nota_Obs VALUES ('8','2024-07-30','otimo petshop','7');
INSERT INTO Nota_Obs VALUES ('7','2024-08-18','otimo petshop','8');
INSERT INTO Nota_Obs VALUES ('6','2024-09-27','otimo petshop','9');
INSERT INTO Nota_Obs VALUES ('5','2024-10-13','otimo petshop','10');
INSERT INTO Nota_Obs VALUES ('10','2024-11-09','otimo petshop','11');
INSERT INTO Nota_Obs VALUES ('10','2024-12-31','otimo petshop','12');
 
 
 
SELECT * FROM Imagem_Doc
 
INSERT INTO Imagem_Doc VALUES ('1','CPF','40769283051','1');
INSERT INTO Imagem_Doc VALUES ('2','CPF','87238451062','2');
INSERT INTO Imagem_Doc VALUES ('3','CPF','43928016091','3');
INSERT INTO Imagem_Doc VALUES ('4','CPF','28561079345','4');
INSERT INTO Imagem_Doc VALUES ('5','CPF','75894263017','5');
INSERT INTO Imagem_Doc VALUES ('6','CPF','62347985206','6');
INSERT INTO Imagem_Doc VALUES ('7','CPF','15093427188','7');
INSERT INTO Imagem_Doc VALUES ('8','CPF','94028361750','8');
INSERT INTO Imagem_Doc VALUES ('9','CPF','31659248034','9');
INSERT INTO Imagem_Doc VALUES ('10','CPF','57243061872','10');
INSERT INTO Imagem_Doc VALUES ('11','CPF','81432795629','11');
INSERT INTO Imagem_Doc VALUES ('12','CPF','48215039783','12');




 