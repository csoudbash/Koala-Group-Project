CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"age" INTEGER,
	"gender" VARCHAR(1),
	"readyForTransfer" BOOLEAN,
	"notes" VARCHAR(255)
);
INSERT INTO "koalas" ("id", "name", "gender", "age", "readyForTransfer", "notes")
VALUES ( 1 ,'Scotty', 'M' , '4' , TRUE ,  'Born in Guatemala'),               
( 2 ,  'Jean'  ,   'F'    ,   '5'   , TRUE  ,'Allergic to lots of lava'),         
( 3, 'Ororo' , 'F'   ,    '7' , FALSE  ,    'Loves listening to Paula (Abdul)'),
(4,'Logan','M','15',FALSE,'Loves the sauna'),
(5,'Charlie','M','9',TRUE,'Favorite band is Nirvana'),
(6,'Betsy','F','4',FALSE,'Has a pet iguana');







