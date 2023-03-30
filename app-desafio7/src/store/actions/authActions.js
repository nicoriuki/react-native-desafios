import { SIGN_UP_URL, URL_AUTH_SIGN_UP } from '../../CONSTANTS/db';
export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
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
                        body: {
                              email,
                              password,
                              returnSecureToken: true,
                        },
                  });
                  console.log(response.body);
                  /*  if (!response.ok) {
                        const errorResData = await response.json();
                        const errorId = errorResData.error.message;
                        let message = 'No se pudo registrar!';

                        if (errorId === 'EMAIL_EXISTS') {
                              message = 'Este email ya existe!';
                        }
                        throw new Error(message);
                  } */

                  const data = await response.json();
                  console.log(data.error.errors);
                  console.log(data);

                  dispatch({
                        type: SIGN_UP,
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
