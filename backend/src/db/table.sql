CREATE TABLE users (Id SERIAL PRIMARY KEY, NikName character (50), UserName character (100), Mail character(254), BirthDay TIMESTAMP WITH TIME ZONE);
CREATE TABLE notes (Id SERIAL PRIMARY KEY, UserId INTEGER REFERENCES users (Id), WriteDate TIMESTAMP WITH TIME ZONE, WriteText character (1000));
INSERT INTO users (NikName, UserName, Mail, BirthDay) VALUES ('Boss', 'Sam Jones', 'sam@gmail.com', '2004-10-19 10:23:54+03'), ('Manya', 'Mary Svetlova', 'manya@gmail.com', '2008-07-04 10:23:54+03');
INSERT INTO notes (UserId, WriteDate, WriteText) VALUES (2, '2024-10-19 15:23:54+03', 'Сегодня я делаю первую запись в своём дневнике');
INSERT INTO notes (UserId, WriteDate, WriteText) VALUES (3, '2023-11-19 15:23:54+03', 'Я стал начальником этой компании СЕГОДНЯ!');

SELECT WriteDate, WriteText FROM notes WHERE UserId=2;

SELECT NikName, WriteDate, WriteText FROM users JOIN notes ON notes.UserId=users.Id WHERE UserId=2;
SELECT NikName, WriteDate, WriteText FROM users JOIN notes ON notes.UserId=users.Id WHERE UserId=2;

SELECT WriteDate, WriteText FROM notes WHERE UserId=2;