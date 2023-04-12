import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../../CONSTANTS/db';
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
