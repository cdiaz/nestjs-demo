import * as sqlite3 from 'sqlite3';

let sqlite = new sqlite3.Database(':memory:');

let sql_user = 'CREATE TABLE IF NOT EXISTS user (' +
    'id INT PRIMARY KEY,' +
    'username TEXT NOT NULL,' +
    'email TEXT NOT NULL,' +
    'password TEXT NOT NULL,' +
    'role TEXT NOT NULL' +
    ')';

let sql_populate = 'INSERT OR IGNORE INTO user(id, username, email, password, role)' +
                   'VALUES (234342, "cdiaz", "me@cristiamdiaz.com", "1234", "contributor"),' +
                   '(278928, "KamilMysliwiec", "mail@kamilmysliwiec.com", "12345", "admin"),' +
                   '(254452, "juandav", "ejuandav@gmail.com", "1234", "user");';

sqlite.serialize(function () {
    sqlite.run(sql_user);
    sqlite.run(sql_populate);
});

export const db = sqlite;