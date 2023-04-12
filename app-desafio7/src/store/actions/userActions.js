import { URL_API } from '../../CONSTANTS/db';
import { ALLUSERS, SETUSER, GETUSER, EDITUSER, DELUSER } from '../types';
let initialState = {
      nombre: '',
      email: '',
      telefono: '',
};

export const setUser = (data) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}users.json`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              date: new Date().toLocaleString(),
                              user: data,
                        }),
                  });
                  const result = await response.json();
                  console.log(result);

                  dispatch({ type: SETUSER, payload: data });
            } catch (error) {
                  console.log(error);
            }
      };
};
export const getUser = (email) => {
      return async (dispatch) => {
            try {
                  const response = await fetch(`${URL_API}/users.json`, {
                        headers: { 'Content-Type': 'application/json' },
                  });
                  const result = await response.json();
                  const users = Object.keys(result).map((key) => {
                        return {
                              ...result[key].patient,
                              id: key,
                        };
                  });

                  dispatch({ type: GETUSER, payload: users });
            } catch (error) {
                  console.log(error);
            }
      };
};
