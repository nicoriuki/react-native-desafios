import { ALLUSERS, SETUSER, GETUSER, EDITUSER, DELUSER } from '../types';
export const initialState = {
      list: [],
};
const userReducer = (state = initialState, action) => {
      switch (action.type) {
            case ALLUSERS: {
                  return {
                        ...state,
                        list: action.payload,
                  };
            }

            case SETUSER: {
                  return {
                        ...state,
                        list: action.payload,
                  };
            }
            case GETUSER: {
                  let user = state.filter((el) => el.id === action.payload);
                  return user;
            }
            case EDITUSER: {
                  let newData = state.map((el) =>
                        el.id === action.payload.id ? action.payload : el
                  );

                  return {
                        ...state,
                        newData,
                  };
            }
            case DELUSER: {
                  let newData = state.filter((el) => el.id !== action.payload);
                  return {
                        ...state,
                        newData,
                  };
            }

            default:
                  return state;
      }
};

export default userReducer;
