import * as sqlite3 from 'sqlite3';

let sqlite = new sqlite3.Database(':memory:');

let sql_user = 'CREATE TABLE IF NOT EXISTS user (' +
    'id VARCHAR PRIMARY KEY,' +
    'username VARCHAR NOT NULL,' +
    'email VARCHAR NOT NULL,' +
    'password VARCHAR NOT NULL,' +
    'role VARCHAR NOT NULL' +
    ')';

let sql_populate = 'INSERT OR IGNORE INTO user(id, username, email, password, role)' +
    'VALUES ("eb8814013b6c11e7b1a46b0d99a2ac51", "cdiaz", "me@cristiamdiaz.com", "1234", "contributor"),' +
    '("616e44a03b6d11e7ba930b5b44d9808b", "KamilMysliwiec", "mail@kamilmysliwiec.com", "12345", "admin"),' +
    '("6f13eba03b6d11e780d5c59d28f4b039", "juandav", "ejuandav@gmail.com", "1234", "user")';

sqlite.serialize(function () {
    sqlite.run(sql_user);
    sqlite.run(sql_populate);
});

export const db = sqlite;