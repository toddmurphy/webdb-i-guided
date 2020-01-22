//DQL

SELECT email
FROM users
WHERE name = 'Todd Murphy';

//DML

INSERT INTO <table name> (<column name>)
VALUES (<some values>)

UPDATE <table name>
SET <column name> = <some value>
WHERE <column name> = <some value>

DELETE FROM <table name>
WHERE <column name> = <some value>

//USING an ORM
const user = new User()
user.save()

//Using a Query Builder
table('user').insert()
