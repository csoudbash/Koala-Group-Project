CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"age" INTEGER,
	"gender" VARCHAR(1),
	"readyForTransfer" BOOLEAN,
	"notes" VARCHAR(255)
);
INSERT INTO "koalas" ( "name", "gender", "age", "readyForTransfer", "notes")
VALUES ( 'Scotty', 'M' , '4' , TRUE ,  'Born in Guatemala'),               
(  'Jean'  ,   'F'    ,   '5'   , TRUE  ,'Allergic to lots of lava'),         
( 'Ororo' , 'F'   ,    '7' , FALSE  ,    'Loves listening to Paula (Abdul)'),
('Logan','M','15',FALSE,'Loves the sauna'),
('Charlie','M','9',TRUE,'Favorite band is Nirvana'),
('Betsy','F','4',FALSE,'Has a pet iguana');







