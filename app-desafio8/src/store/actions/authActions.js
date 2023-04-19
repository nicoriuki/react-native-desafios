import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../../CONSTANTS/db';
import { fetchUser, insertUser } from '../../db';
import { LOGOUT } from '../types';
export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password, nombre, telefono, photo) => {
      return async (dispatch) => {
            try {
                  dispatch({
                        type: 'SIGN_UP_START',
                  });
                  console.log(email, password);

                  const response = await fetch(URL_AUTH_SIGN_UP, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              email,
                              password,
                              returnSecureToken: true,
                        }),
                  });
                  if (!response.ok) {
                        const errorResData = await response.json();
                        console.log(errorResData);
                        const errorId = errorResData.error.message;
                        let message = 'No se pudo registrar!';

                        if (errorId === 'EMAIL_EXISTS') {
                              message = 'Este email ya existe!';
                        }
                        throw new Error(message);
                  }

                  const data = await response.json();

                  console.log(data);

                  const dbResult = await insertUser(
                        nombre,
                        email,
                        telefono,
                        photo
                  );

                  console.log('Db result: ', dbResult);

                  dispatch({
                        type: 'SIGN_UP',
                        token: data.idToken,
                        userId: data.localId,
                  });
            } catch (error) {
                  dispatch({
                        type: 'SIGN_UP_FAIL',
                  });
                  alert(error);
            }
      };
};

export const signIn = (email, password) => {
      return async (dispatch) => {
            try {
                  dispatch({
                        type: 'SIGN_UP_START',
                  });
                  console.log(email, password);

                  const response = await fetch(URL_AUTH_SIGN_IN, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              email,
                              password,
                              returnSecureToken: true,
                        }),
                  });

                  if (!response.ok) {
                        const errorResData = await response.json();
                        console.log(errorResData);
                  }

                  const data = await response.json();
                  /*          const dbResult = await logUser(email, 1);

                  console.log('Db result: ', dbResult.rows._array); */
                  console.log(data);

                  dispatch({
                        type: 'SIGN_UP',
                        token: data.idToken,
                        userId: data.localId,
                  });
            } catch (error) {
                  dispatch({
                        type: 'SIGN_UP_FAIL',
                  });
                  alert(error);
            }
      };
};
export const logOut = () => ({
      type: LOGOUT,
});
