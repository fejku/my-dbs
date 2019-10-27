create database mydbs;

create schema mydbs;

create table mydbs.wersja_pumy (
  id serial primary key,
  wersja text not null unique
);

create table mydbs.schemat(
  id serial primary key,
  nazwa text not null unique
);

create table mydbs.wersja_schematu(
  id serial primary key,
  fk_wepu integer not null references mydbs.wersja_pumy(id),
  fk_schemat integer not null references mydbs.schemat(id),
  wersja_schematu text not null,
  unique (fk_wepu, fk_schemat)
);

create table mydbs.polaczenie(
	id serial primary key,
	host text not null,
	port int not null,
	uzytkownik text not null,
	haslo text not null,
	unique(host, port)
);

create table mydbs.ostatnio_uzyte(
  baza text,
  fk_wepu integer references mydbs.wersja_pumy(id),
  fk_pola integer references mydbs.polaczenie(id)
);

insert into mydbs.wersja_pumy(wersja) values 
  ('robocza'),
  ('04.159');
    
insert into mydbs.schemat(nazwa) values 
  ('admi'), ('alko'), ('budz'), ('dodm'), ('ed'), ('drpa'), ('ewlu'), ('eksp'),
  ('fk'), ('geod'), ('godp'), ('grun'), ('hurt'), ('izro'), ('kadr'), ('kont'),
  ('opro'), ('opd'), ('poda'), ('psy'), ('post'), ('srtr'), ('symu'), ('szab'),
  ('ewluwybo'), ('usc'), ('wipo'), ('zasw');

insert into mydbs.wersja_schematu(fk_wepu, fk_schemat, wersja_schematu) values 
  (1, 1, '011.28'),
  (1, 2, '003.64'),
  (1, 3, '003.37'),
  (1, 4, '004.40'),
  (1, 5, '001.45'),
  (1, 6, '002.01'),
  (1, 7, '006.02'),
  (1, 8, '001.46'),
  (1, 9, '010.14'),
  (1, 10, '004.70'),
  (1, 11, '004.60'),
  (1, 12, '009.49'),
  (1, 13, '001.36'),
  (1, 14, '001.20'),
  (1, 15, '013.90'),
  (1, 16, '007.38'),
  (1, 17, '002.67'),
  (1, 18, '002.21'),
  (1, 19, '005.52'),
  (1, 20, '004.33'),
  (1, 21, '006.47'),
  (1, 22, '004.00'),
  (1, 23, '002.20'),
  (1, 24, '003.48'),
  (1, 25, '003.95'),
  (1, 26, '005.33'),
  (1, 27, '013.25'),
  (1, 28, '002.30');

insert into mydbs.polaczenie(host, port, uzytkownik, haslo) values
	('localhost', 5432, 'postgres', 'Makaron86');

insert into mydbs.ostatnio_uzyte(baza, fk_wepu, fk_pola) values
  ('', 1, 1);