import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('user.db');

export const init = () => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, email TEXT NOT NULL,  telefono TEXT NOT NULL, photo TEXT NOT NULL)',
                        [],
                        () => {
                              resolve();
                        },
                        (_, err) => {
                              console.log(err);
                              reject(err);
                        }
                  );
            });
      });
      return promise;
};

export const insertUser = (nombre, email, telefono, photo) => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        `INSERT INTO users (nombre, email, telefono,photo) VALUES (?, ?, ?,?);`,
                        [nombre, email, telefono, photo],
                        (_, result) => {
                              resolve(result);
                        },
                        (_, err) => {
                              console.log(err);
                              reject(err);
                        }
                  );
            });
      });
      return promise;
};

export const fetchUser = (email) => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'SELECT * FROM users WHERE email = ?',
                        [email],
                        (_, result) => {
                              console.log('result', result.rows._array);
                              resolve(result);
                        },
                        (_, err) => {
                              console.log(err);
                              reject(err);
                        }
                  );
            });
      });
      console.log('promesa', promise);
      return promise;
};

/* export const logUser = (email, value) => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'UPDATE users SET loging = ? WHERE email = ?',
                        [value, email],
                        (_, result) => {
                              resolve(result);
                        },
                        (_, err) => {
                              reject(err);
                        }
                  );
            });
      });
      return promise;
}; */
/* export const logOutUser = (email) => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'UPDATE users SET loging = 0 WHERE email = ?',
                        [email],
                        (_, result) => {
                              resolve(result);
                        },
                        (_, err) => {
                              reject(err);
                        }
                  );
            });
      });
      return promise;
}; */
