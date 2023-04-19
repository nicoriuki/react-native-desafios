import { URL_API } from '../../CONSTANTS/db';
import { fetchUser } from '../../db';

import { ALLUSERS, SETUSER, GETUSER, EDITUSER, DELUSER } from '../types';
let initialState = {
      nombre: '',
      email: '',
      telefono: '',
};
export const storeUser = (data) => {
      console.log(data.email);
      return async (dispatch) => {
            try {
                  console.log('hola');
                  const userDb = await fetchUser(data.email);
                  console.log('userDB', userDb.rows._array[0]);
                  dispatch({ type: SETUSER, payload: userDb.rows._array });
            } catch (error) {
                  console.log(error);
            }
      };
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
                  const userDb = await fetchUser(email);
                  dispatch({ type: GETUSER, payload: userDb });
            } catch (error) {
                  console.log(error);
            }
      };
};
