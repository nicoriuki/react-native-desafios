import * as SQLite from 'expo-sqlite';
import SQLite from 'react-native-sqlite-2';
const db = SQLite.openDatabase('user.db', '1.0', '', 1);

export const init = () => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, nombre VARCHAR(30), email VARCHAR(30),  VARCHAR(30),loging INTEGER NOT NULL)',
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

export const insertUser = (nombre, email, telefono) => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        `INSERT INTO user (nombre, email, telefono,loging) VALUES (?, ?, ?,?);`,
                        [nombre, email, telefono, 1],
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

export const fetchUser = () => {
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'SELECT * FROM user',
                        [],
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
export const logOutUser = (email) => {
      /* 
      const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                  tx.executeSql(
                        'UPDATE user SET loging = 0 WHERE email = ?',
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
      return promise; */
      const updateStatement = `UPDATE mi_tabla SET mi_columna = ? WHERE id = ?`;

      // Ejecutar la sentencia SQL UPDATE con los valores necesarios
      db.transaction((tx) => {
            tx.executeSql(
                  updateStatement,
                  ['nuevo_valor', 1],
                  (txObj, resultSet) => {
                        console.log('Actualización completada con éxito');
                  },
                  (txObj, error) => {
                        console.log('Error al actualizar la tabla', error);
                  }
            );
      });
};
